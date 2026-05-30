export type ContactFormValues = {
	name: string;
	email: string;
	subject: string;
	message: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export type ContactFormResult = {
	success?: boolean;
	status?: string;
	message?: string;
	values?: ContactFormValues;
	errors?: ContactFormErrors;
};
