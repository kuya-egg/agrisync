<script lang="ts">
	import { resolve } from '$app/paths';
	import { defaultSiteSettings } from '$lib/data/content';
</script>

<svelte:head>
	<title>Agrisync Maintenance</title>
	<meta
		name="description"
		content="Agrisync is temporarily in maintenance while we reconnect our farm content system."
	/>
</svelte:head>

<main
	class="grid min-h-screen place-items-center bg-[var(--cream)] px-4 py-10 text-[var(--forest)] sm:px-6 lg:px-8"
>
	<section class="surface-frame w-full max-w-3xl">
		<div class="surface-panel p-8 text-center sm:p-12">
			<a
				href={resolve('/')}
				class="mx-auto mb-8 flex w-max items-center gap-2 rounded-full px-3 py-2 text-sm font-extrabold tracking-normal sm:text-base"
			>
				<img src="/favicon.svg" alt="Agrisync logo" class="brand-logo" />
				{defaultSiteSettings.siteName}
			</a>
			<p class="eyebrow mx-auto">Maintenance</p>
			<h1 class="font-display mt-5 text-5xl leading-none font-black sm:text-7xl">
				Agrisync is in maintenance right now.
			</h1>
			<p class="mx-auto mt-5 max-w-2xl text-lg leading-8 font-bold text-[var(--forest)]/68">
				We are reconnecting our farming content system. Please check again shortly.
			</p>
		</div>
	</section>
</main>
