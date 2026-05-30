<script lang="ts">
	import { resolve } from '$app/paths';
	import { defaultLandingContent } from '$lib/data/content';
	import type { NavLink } from '$lib/types/content';
	import { resolveSiteRoute } from './routes';

	let { links = defaultLandingContent.navLinks }: { links?: NavLink[] } = $props();
	let menuOpen = $state(false);
</script>

<header class="fixed top-0 right-0 left-0 z-30 px-4 pt-4 sm:pt-6">
	<nav
		class="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-[rgba(255,248,233,0.82)] p-2 shadow-[0_18px_60px_rgba(14,90,58,0.13)] backdrop-blur-xl"
		aria-label="Primary navigation"
	>
		<a
			href={resolve('/#home')}
			class="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-extrabold tracking-tight sm:text-base"
		>
			<img src="/favicon.svg" alt="Agrisync logo" class="brand-logo" />
			Agrisync
		</a>

		<div class="hidden items-center gap-1 lg:flex">
			{#each links as link (link.href)}
				<a
					class="rounded-full px-4 py-2 text-sm font-bold text-[var(--forest)]/75 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/70 hover:text-[var(--forest)]"
					href={resolveSiteRoute(link.href)}>{link.label}</a
				>
			{/each}
		</div>

		<button
			class="relative grid size-11 place-items-center rounded-full bg-[var(--forest)] text-white lg:hidden"
			type="button"
			aria-label="Toggle menu"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span
				class="absolute h-0.5 w-5 rounded-full bg-white transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] {menuOpen
					? 'translate-y-0 rotate-45'
					: '-translate-y-1.5'}"
			></span>
			<span
				class="absolute h-0.5 w-5 rounded-full bg-white transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] {menuOpen
					? 'translate-y-0 -rotate-45'
					: 'translate-y-1.5'}"
			></span>
		</button>
	</nav>

	{#if menuOpen}
		<div
			class="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-white/70 bg-[rgba(255,248,233,0.94)] p-4 shadow-[0_30px_90px_rgba(14,90,58,0.18)] backdrop-blur-xl lg:hidden"
		>
			<div class="grid gap-2">
				{#each links as link, index (link.href)}
					<a
						class="rounded-full bg-white/60 px-5 py-3 font-extrabold text-[var(--forest)]"
						style={`animation-delay: ${index * 45}ms`}
						href={resolveSiteRoute(link.href)}
						onclick={() => (menuOpen = false)}>{link.label}</a
					>
				{/each}
			</div>
		</div>
	{/if}
</header>
