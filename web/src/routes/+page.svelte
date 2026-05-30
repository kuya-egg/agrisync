<script lang="ts">
	import LandingPage from '$lib/components/landing/LandingPage.svelte';
	import Seo from '$lib/components/seo/Seo.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	const settings = $derived(data.content.settings);
	const description = $derived(settings.description);
	const siteUrl = $derived(settings.siteUrl);
	const canonicalUrl = $derived(new URL('/', siteUrl).toString());
	const ogImage = $derived(settings.ogImage);
	const title = $derived(`${settings.siteName} - ${settings.tagline}`);
	const keywords =
		'Smart farming Philippines, AI farming assistant, Crop monitoring app, Farm management app, Agriculture technology Philippines, Crop recommendation app, Farming assistant AI';
</script>

<Seo
	{title}
	{description}
	canonical={canonicalUrl}
	{ogImage}
	{keywords}
	siteName={settings.siteName}
/>

<LandingPage content={data.content} />
