import { loadLegalContent } from '$lib/server/cms';

export const load = async () => {
	const content = await loadLegalContent('terms-of-service');

	return {
		content
	};
};
