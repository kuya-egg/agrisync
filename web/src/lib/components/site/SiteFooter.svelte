<script lang="ts">
	import { defaultLandingContent } from '$lib/data/content';
	import type { FooterLink } from '$lib/types/content';
	import { resolveSiteRoute } from './routes';

	let { links = defaultLandingContent.footerLinks }: { links?: FooterLink[] } = $props();
</script>

<footer class="relative z-10 px-4 pt-10 pb-10 sm:px-6 lg:px-8">
	<div
		class="mx-auto flex max-w-6xl flex-col gap-6 border-t border-[rgba(14,90,58,0.16)] pt-8 md:flex-row md:items-center md:justify-between"
	>
		<div>
			<p class="font-display text-3xl font-black">Agrisync</p>
			<p class="mt-1 text-sm font-bold text-[var(--forest)]/60">
				We help farmers grow with confidence.
			</p>
		</div>
		<div class="flex flex-wrap gap-4 text-sm font-black text-[var(--forest)]/68">
			{#each links as link (link.href)}
				<a href={resolveSiteRoute(link.href)}>{link.label}</a>
			{/each}
		</div>
		<p class="text-sm font-bold text-[var(--forest)]/58">© 2026 Agrisync. All rights reserved.</p>
	</div>
</footer>
