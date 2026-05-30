import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { pocketbaseUrl } from '$lib/server/pocketbase';

const passthroughHeaders = [
	'content-type',
	'content-length',
	'cache-control',
	'etag',
	'last-modified',
	'content-disposition'
];

export const GET: RequestHandler = async ({ params, fetch, url }) => {
	const sourceUrl = new URL(
		`/api/files/${params.collection}/${params.recordId}/${encodeURIComponent(params.fileName)}`,
		pocketbaseUrl
	);

	const thumb = url.searchParams.get('thumb');
	const token = url.searchParams.get('token');
	const download = url.searchParams.get('download');

	if (thumb) sourceUrl.searchParams.set('thumb', thumb);
	if (token) sourceUrl.searchParams.set('token', token);
	if (download) sourceUrl.searchParams.set('download', download);

	const response = await fetch(sourceUrl.toString());

	if (!response.ok) {
		throw error(response.status, 'Media file not found.');
	}

	const headers = new Headers();
	for (const header of passthroughHeaders) {
		const value = response.headers.get(header);
		if (value) headers.set(header, value);
	}

	return new Response(response.body, {
		status: response.status,
		headers
	});
};
