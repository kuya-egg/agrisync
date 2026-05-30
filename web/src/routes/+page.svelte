<script lang="ts">
	import LandingPage from '$lib/components/landing/LandingPage.svelte';

	const description =
		'Agrisync helps Filipino farmers plan crops, monitor growth, prepare for climate risks, and sell with confidence using AI-powered farming assistance.';
	const siteUrl = 'https://agrisync.online';
	const ogImage = `${siteUrl}/og-image.png`;
</script>

<svelte:head>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="Smart farming Philippines, AI farming assistant, Crop monitoring app, Farm management app, Agriculture technology Philippines, Crop recommendation app, Farming assistant AI"
	/>
	<meta property="og:title" content="Agrisync - Your Smart Farm Assistant" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:site_name" content="Agrisync" />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta
		property="og:image:alt"
		content="Agrisync, your smart farm assistant for Filipino farmers"
	/>
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Agrisync - Your Smart Farm Assistant" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={ogImage} />
	<link rel="canonical" href={siteUrl} />
	<title>Agrisync - Your Smart Farm Assistant</title>
</svelte:head>

<LandingPage />
