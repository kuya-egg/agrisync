<script lang="ts">
	type SeoProps = {
		title: string;
		description: string;
		canonical: string;
		ogImage: string;
		type?: string;
		keywords?: string;
		imageAlt?: string;
		siteName?: string;
	};

	let {
		title,
		description,
		canonical,
		ogImage,
		type = 'website',
		keywords,
		imageAlt = 'Agrisync, your smart farm assistant for Filipino farmers',
		siteName = 'Agrisync'
	}: SeoProps = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if keywords}
		<meta name="keywords" content={keywords} />
	{/if}
	<link rel="canonical" href={canonical} />

	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonical} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={imageAlt} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
</svelte:head>
