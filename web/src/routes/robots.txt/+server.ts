import { defaultSiteSettings } from '$lib/data/content';

export const GET = () =>
	new Response(
		`User-agent: *
Allow: /

Sitemap: ${new URL('/sitemap.xml', defaultSiteSettings.siteUrl).toString()}
`,
		{
			headers: {
				'content-type': 'text/plain; charset=utf-8'
			}
		}
	);
