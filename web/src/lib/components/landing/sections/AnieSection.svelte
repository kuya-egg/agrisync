<script lang="ts">
	import RichText from '$lib/components/rich-text/RichText.svelte';
	import { defaultLandingContent } from '$lib/data/content';
	import type { LandingSectionContent } from '$lib/types/content';

	let {
		section = defaultLandingContent.anie,
		highlights = defaultLandingContent.anieHighlights
	}: {
		section?: LandingSectionContent;
		highlights?: string[];
	} = $props();
</script>

<section class="px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[0.9fr_1fr]">
		<div data-reveal class="rounded-[2.4rem] bg-[rgba(14,90,58,0.08)] p-2">
			<div
				class="relative overflow-visible rounded-[1.9rem] bg-[linear-gradient(150deg,#DDEFC9,#FFF8E9_46%,#DDF4FF)] p-8"
			>
				<div
					class="relative mx-auto aspect-square max-w-[420px] overflow-visible rounded-full bg-white/50 px-4 pt-5 pb-0"
				>
					<img
						src={section.image || '/illustrations/anie.webp'}
						alt="Virtual Assistant Anie illustration"
						class="absolute top-[-28%] left-1/2 h-[132%] w-[152%] max-w-none -translate-x-1/2 object-contain drop-shadow-[0_30px_70px_rgba(14,90,58,0.16)]"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
		<div data-reveal>
			<p class="eyebrow">{section.eyebrow}</p>
			<h2 class="section-title">{section.title}</h2>
			<RichText
				content={section.body}
				className="mt-5 text-lg leading-8 font-bold text-[var(--forest)]/70"
			/>
			<div class="mt-7 grid gap-3">
				{#each highlights as item (item)}
					<div
						class="flex gap-3 rounded-3xl bg-white/72 p-4 font-bold shadow-[0_10px_30px_rgba(14,90,58,0.08)]"
					>
						<span
							class="grid size-7 shrink-0 place-items-center rounded-full bg-[var(--light-green)] text-sm"
							>✓</span
						>
						{item}
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
