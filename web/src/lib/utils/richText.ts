import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

const allowedTags = [
	'a',
	'br',
	'blockquote',
	'code',
	'em',
	'h3',
	'h4',
	'li',
	'ol',
	'p',
	'strong',
	'ul'
];

export const renderRichText = (content: string) => {
	const html = marked.parse(content, {
		async: false,
		breaks: true
	}) as string;

	return sanitizeHtml(html, {
		allowedTags,
		allowedAttributes: {
			a: ['href', 'title', 'target', 'rel']
		},
		allowedSchemes: ['http', 'https', 'mailto']
	});
};
