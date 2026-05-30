<script lang="ts">
	import MaintenancePage from '$lib/components/site/MaintenancePage.svelte';
	import type { LayoutData } from './$types';
	import '../app.css';

	let { children, data }: { children: import('svelte').Snippet; data: LayoutData } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap"
		rel="stylesheet"
	/>
	<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

{#if data.apiAvailable}
	{@render children()}
{:else}
	<MaintenancePage />
{/if}
