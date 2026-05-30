<script lang="ts">
	import ContactCard from '$lib/components/contact/ContactCard.svelte';
	import Seo from '$lib/components/seo/Seo.svelte';
	import { defaultSiteSettings } from '$lib/data/content';
	import type { ActionData } from './$types';

	const canonicalUrl = 'https://agrisync.online/contact';
	const description =
		'Contact Agrisync for support, partnerships, app questions, or farmer community concerns.';
	const title = 'Contact - Agrisync';

	let { form }: { form?: ActionData } = $props();
</script>

<Seo {title} {description} canonical={canonicalUrl} ogImage={defaultSiteSettings.ogImage} />

<main
	class="grid min-h-screen place-items-center bg-[var(--cream)] px-4 py-10 text-[var(--forest)] sm:px-6 lg:px-8"
>
	<ContactCard {form} />
</main>
