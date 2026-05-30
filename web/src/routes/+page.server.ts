import { loadLandingContent } from '$lib/server/cms';

export const load = async () => {
	const content = await loadLandingContent();

	return {
		content
	};
};
