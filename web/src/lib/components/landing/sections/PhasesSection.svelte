<script lang="ts">
	import RichText from '$lib/components/rich-text/RichText.svelte';
	import { defaultLandingContent } from '$lib/data/content';
	import type { LandingContent, Phase } from '$lib/types/content';

	let {
		intro = defaultLandingContent.phasesIntro,
		phases = defaultLandingContent.phases
	}: {
		intro?: LandingContent['phasesIntro'];
		phases?: Phase[];
	} = $props();
</script>

<section class="px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-6xl">
		<div data-reveal class="mb-12 max-w-3xl">
			<p class="eyebrow">{intro.eyebrow}</p>
			<h2 class="section-title">{intro.title}</h2>
		</div>
		<div data-stagger class="grid gap-5 lg:grid-cols-4">
			{#each phases as item (item.phase)}
				<article data-stagger-item class="rounded-[2rem] bg-[rgba(14,90,58,0.07)] p-2">
					<div
						class="h-full rounded-[1.55rem] bg-white/82 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
					>
						<p class="text-xs font-black tracking-[0.18em] text-[var(--leaf)] uppercase">
							{item.phase}
						</p>
						<h3 class="font-display mt-4 text-3xl leading-none font-black">{item.title}</h3>
						<p
							class="mt-5 rounded-2xl bg-[var(--sky)] px-4 py-3 text-sm font-extrabold text-[var(--forest)]/75"
						>
							“{item.question}”
						</p>
						<p class="mt-5 text-sm font-black text-[var(--forest)]">{item.feature}</p>
						<RichText
							content={item.description}
							className="mt-2 text-sm leading-6 font-semibold text-[var(--forest)]/66"
						/>
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
