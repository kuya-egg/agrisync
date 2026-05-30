import { env } from '$env/dynamic/private';
import { pocketbaseUrl } from '$lib/server/pocketbase';

const healthUrl = `${pocketbaseUrl}/api/health`;
const maintenanceModeEnabled = () => env.MAINTENANCE_MODE?.toLowerCase() === 'true';

export const load = async ({ fetch }) => {
	if (maintenanceModeEnabled()) {
		return {
			apiAvailable: false
		};
	}

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
