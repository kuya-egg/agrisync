<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { resolve } from '$app/paths';
	import type { ContactFormResult } from '$lib/types/contact';

	let { form }: { form?: ContactFormResult | null } = $props();
	let submitting = $state(false);
	let modalOpen = $state(false);
	let lastMessage = $state<string | undefined>();
	let formElement: HTMLFormElement;

	const values = $derived(
		form?.values ?? {
			name: '',
			email: '',
			subject: '',
			message: ''
		}
	);
	const errors = $derived(form?.errors ?? {});
	const statusId = 'contact-form-status';
	const showFeedback = $derived(Boolean(form?.message) && (modalOpen || !browser));

	$effect(() => {
		if (form?.message && form.message !== lastMessage) {
			modalOpen = true;
			lastMessage = form.message;
		}
	});
</script>

<section class="surface-frame w-full max-w-4xl">
	<div class="surface-panel p-6 sm:p-10">
		<a
			href={resolve('/')}
			class="mx-auto mb-8 flex w-max items-center gap-2 rounded-full px-3 py-2 text-sm font-extrabold tracking-normal sm:text-base"
		>
			<img src="/favicon.svg" alt="Agrisync logo" class="brand-logo" />
			Agrisync
		</a>
		<p class="eyebrow mx-auto text-center">Contact Agrisync</p>
		<h1 class="font-display mt-5 text-center text-5xl leading-none font-black sm:text-7xl">
			Let's talk farming.
		</h1>
		<p
			class="mx-auto mt-5 max-w-2xl text-center text-lg leading-8 font-bold text-[var(--forest)]/68"
		>
			Send support questions, partnership ideas, app feedback, or farmer community concerns directly
			to the Agrisync team.
		</p>

		<form
			bind:this={formElement}
			method="POST"
			class="mt-8 grid gap-5 text-left"
			aria-busy={submitting}
			aria-describedby={form?.message ? statusId : undefined}
			use:enhance={() => {
				submitting = true;

				return async ({ result, update }) => {
					await update({ reset: result.type === 'success' });
					submitting = false;

					if (result.type === 'success') {
						formElement.reset();
					}
				};
			}}
		>
			<label class="grid gap-2 font-extrabold">
				<span>Name</span>
				<input
					class="rounded-[1.35rem] border-2 border-[var(--forest)]/16 bg-white px-4 py-3 font-bold text-[var(--forest)] shadow-inner transition outline-none focus:border-[var(--leaf)]"
					name="name"
					autocomplete="name"
					value={values.name}
					disabled={submitting}
					aria-invalid={Boolean(errors.name)}
					aria-describedby={errors.name ? 'contact-name-error' : undefined}
				/>
				{#if errors.name}
					<span id="contact-name-error" class="text-sm font-bold text-red-700">{errors.name}</span>
				{/if}
			</label>

			<label class="grid gap-2 font-extrabold">
				<span>Email</span>
				<input
					class="rounded-[1.35rem] border-2 border-[var(--forest)]/16 bg-white px-4 py-3 font-bold text-[var(--forest)] shadow-inner transition outline-none focus:border-[var(--leaf)]"
					name="email"
					type="email"
					autocomplete="email"
					value={values.email}
					disabled={submitting}
					aria-invalid={Boolean(errors.email)}
					aria-describedby={errors.email ? 'contact-email-error' : undefined}
				/>
				{#if errors.email}
					<span id="contact-email-error" class="text-sm font-bold text-red-700">{errors.email}</span
					>
				{/if}
			</label>

			<label class="grid gap-2 font-extrabold">
				<span>Subject</span>
				<input
					class="rounded-[1.35rem] border-2 border-[var(--forest)]/16 bg-white px-4 py-3 font-bold text-[var(--forest)] shadow-inner transition outline-none focus:border-[var(--leaf)]"
					name="subject"
					value={values.subject}
					disabled={submitting}
					aria-invalid={Boolean(errors.subject)}
					aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
				/>
				{#if errors.subject}
					<span id="contact-subject-error" class="text-sm font-bold text-red-700"
						>{errors.subject}</span
					>
				{/if}
			</label>

			<label class="grid gap-2 font-extrabold">
				<span>Message</span>
				<textarea
					class="min-h-40 resize-y rounded-[1.35rem] border-2 border-[var(--forest)]/16 bg-white px-4 py-3 font-bold text-[var(--forest)] shadow-inner transition outline-none focus:border-[var(--leaf)]"
					name="message"
					disabled={submitting}
					aria-invalid={Boolean(errors.message)}
					aria-describedby={errors.message ? 'contact-message-error' : undefined}
					>{values.message}</textarea
				>
				{#if errors.message}
					<span id="contact-message-error" class="text-sm font-bold text-red-700"
						>{errors.message}</span
					>
				{/if}
			</label>

			<label class="hidden" aria-hidden="true">
				<span>Company</span>
				<input name="company" tabindex="-1" autocomplete="off" />
			</label>

			<button
				class="primary-cta w-full px-8 py-3 disabled:cursor-wait disabled:opacity-70 sm:w-max"
				type="submit"
				disabled={submitting}
			>
				{submitting ? 'Sending...' : 'Send message'}
			</button>
		</form>
	</div>
</section>

{#if form?.message && showFeedback}
	<dialog
		open
		class="fixed inset-0 z-50 grid h-full max-h-none w-full max-w-none place-items-center border-0 bg-[var(--forest)]/45 px-4 py-8 backdrop-blur-sm"
	>
		<section
			id={statusId}
			class="surface-panel w-full max-w-lg p-6 text-center shadow-2xl sm:p-8"
			aria-labelledby="contact-feedback-title"
			aria-describedby="contact-feedback-message"
		>
			<p class="eyebrow mx-auto">{form.success ? 'Message sent' : 'Message not sent'}</p>
			<h2 id="contact-feedback-title" class="font-display mt-4 text-4xl leading-none font-black">
				{form.success ? 'Thank you.' : 'Please try again.'}
			</h2>
			<p
				id="contact-feedback-message"
				class="mx-auto mt-4 max-w-sm text-base leading-7 font-bold text-[var(--forest)]/70"
				aria-live="polite"
				role={form.success ? 'status' : 'alert'}
			>
				{form.message}
			</p>
			<button class="primary-cta mt-6 px-8 py-3" type="button" onclick={() => (modalOpen = false)}>
				{form.success ? 'Done' : 'Back to form'}
			</button>
		</section>
	</dialog>
{/if}
