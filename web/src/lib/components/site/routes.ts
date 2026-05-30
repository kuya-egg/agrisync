import { resolve } from '$app/paths';

export const resolveSiteRoute = (href: string) => {
	if (href.startsWith('#')) return resolve(`/${href}` as `/#${string}`);
	if (href === '/privacy-policy') return resolve('/privacy-policy');
	if (href === '/terms-of-service') return resolve('/terms-of-service');
	if (href === '/contact') return resolve('/contact');
	return resolve('/');
};
