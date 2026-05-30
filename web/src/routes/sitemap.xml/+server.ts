import { defaultSiteSettings } from '$lib/data/content';

const routes = ['/', '/contact', '/privacy-policy', '/terms-of-service'];

export const GET = () => {
	const urls = routes
		.map((route) => {
			const location = new URL(route, defaultSiteSettings.siteUrl).toString();

			return `<url><loc>${location}</loc></url>`;
		})
		.join('');

	return new Response(
		`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`,
		{
			headers: {
				'content-type': 'application/xml; charset=utf-8'
			}
		}
	);
};
