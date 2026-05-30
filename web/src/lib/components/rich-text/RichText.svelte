<script lang="ts">
	import { renderRichText } from '$lib/utils/richText';

	let { content, className = '' }: { content: string; className?: string } = $props();

	const html = $derived(renderRichText(content));
</script>

<div class={`rich-text ${className}`}>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html html}
</div>

<style>
	.rich-text :global(p) {
		margin: 0;
	}

	.rich-text :global(p + p),
	.rich-text :global(ul + p),
	.rich-text :global(ol + p),
	.rich-text :global(p + ul),
	.rich-text :global(p + ol) {
		margin-top: 0.85em;
	}

	.rich-text :global(strong) {
		font-weight: 900;
	}

	.rich-text :global(em) {
		font-style: italic;
	}

	.rich-text :global(a) {
		color: inherit;
		font-weight: 900;
		text-decoration: underline;
		text-decoration-color: var(--leaf);
		text-decoration-thickness: 0.12em;
		text-underline-offset: 0.2em;
	}

	.rich-text :global(ul),
	.rich-text :global(ol) {
		margin: 0;
		padding-left: 1.25em;
	}
</style>
