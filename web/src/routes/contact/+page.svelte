<script lang="ts">
	import ContactCard from '$lib/components/contact/ContactCard.svelte';

	const canonicalUrl = 'https://agrisync.online/contact';
	const description = 'Contact Agrisync by email for support, partnerships, or product questions.';
</script>

<svelte:head>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:title" content="Contact - Agrisync" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content="https://agrisync.online/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<title>Contact - Agrisync</title>
</svelte:head>

<main
	class="grid min-h-screen place-items-center bg-[var(--cream)] px-4 py-10 text-[var(--forest)] sm:px-6 lg:px-8"
>
	<ContactCard />
</main>
