import { pocketbaseUrl } from '$lib/server/pocketbase';

const healthUrl = `${pocketbaseUrl}/api/health`;

export const load = async ({ fetch }) => {
	const controller = new AbortController();
	const timeout = setTimeout(() => controller.abort(), 3500);

	try {
		const response = await fetch(healthUrl, {
			signal: controller.signal
		});

		return {
			apiAvailable: response.ok
		};
	} catch {
		return {
			apiAvailable: false
		};
	} finally {
		clearTimeout(timeout);
	}
};
