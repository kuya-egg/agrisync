import { fail } from '@sveltejs/kit';
import { createPocketBase } from '$lib/server/pocketbase';
import type { ContactFormErrors, ContactFormValues } from '$lib/types/contact';
import type { Actions } from './$types';

const source = 'contact-page';
const successMessage = 'Thanks for reaching out. We received your message and will reply soon.';
const minMessageLength = 8;
const maxMessageLength = 500;

const getFormValue = (formData: FormData, key: keyof ContactFormValues) =>
	String(formData.get(key) || '').trim();

const getClientIp = (request: Request, getClientAddress: () => string) => {
	const forwardedFor = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim();
	const realIp = request.headers.get('x-real-ip')?.trim();

	return forwardedFor || realIp || getClientAddress();
};

const validateContactForm = (values: ContactFormValues) => {
	const errors: ContactFormErrors = {};

	if (!values.name) {
		errors.name = 'Enter your name.';
	}

	if (!values.email) {
		errors.email = 'Enter your email address.';
	} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
		errors.email = 'Enter a valid email address.';
	}

	if (!values.subject) {
		errors.subject = 'Enter a subject.';
	}

	if (!values.message) {
		errors.message = 'Enter your message.';
	} else if (values.message.length < minMessageLength) {
		errors.message = `Message should be at least ${minMessageLength} characters.`;
	} else if (values.message.length > maxMessageLength) {
		errors.message = `Message should be ${maxMessageLength} characters or less.`;
	}

	return errors;
};

export const actions: Actions = {
	default: async ({ request, getClientAddress }) => {
		const formData = await request.formData();
		const honeypot = String(formData.get('company') || '').trim();
		const values: ContactFormValues = {
			name: getFormValue(formData, 'name'),
			email: getFormValue(formData, 'email'),
			subject: getFormValue(formData, 'subject'),
			message: getFormValue(formData, 'message')
		};

		if (honeypot) {
			return {
				success: true,
				status: 'success',
				message: successMessage,
				values
			};
		}

		const errors = validateContactForm(values);

		if (Object.keys(errors).length > 0) {
			return fail(400, {
				success: false,
				status: 'error',
				message: 'Please fix the highlighted fields.',
				values,
				errors
			});
		}

		const pb = createPocketBase();

		try {
			await pb.collection('contact_submissions').create({
				...values,
				source,
				status: 'new',
				user_agent: request.headers.get('user-agent') || '',
				ip_address: getClientIp(request, getClientAddress),
				honeypot: ''
			});
		} catch (error) {
			console.error('Contact submission failed', error);

			return fail(502, {
				success: false,
				status: 'error',
				message: 'We could not send your message right now. Please try again shortly.',
				values,
				errors: {}
			});
		}

		return {
			success: true,
			status: 'success',
			message: successMessage,
			values: {
				name: '',
				email: '',
				subject: '',
				message: ''
			}
		};
	}
};
