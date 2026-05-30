<script lang="ts">
	import { defaultLandingContent } from '$lib/data/content';
	import type { Feature, LandingContent } from '$lib/types/content';
	import PhoneMockup from '../shared/PhoneMockup.svelte';
	import SectionHeader from '../shared/SectionHeader.svelte';

	const featureIllustrations: Record<string, string> = {
		'Crop Recommendation': '/illustrations/crop-recommendation.webp',
		'Crop Monitoring': '/illustrations/crop-monitoring.webp',
		'Personalized Action Items': '/illustrations/action-items.webp',
		'Market Views': '/illustrations/market-views.webp',
		'Generated Activity Reports': '/illustrations/generated-reports.webp',
		'Community Support': '/illustrations/community-support.webp'
	};

	let {
		intro = defaultLandingContent.featuresIntro,
		features = defaultLandingContent.features
	}: {
		intro?: LandingContent['featuresIntro'];
		features?: Feature[];
	} = $props();
</script>

<section id="features" class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
	<div class="mx-auto max-w-6xl">
		<SectionHeader eyebrow={intro.eyebrow} title={intro.title} />
		<div class="mt-8 grid grid-cols-[minmax(0,1fr)] gap-5 sm:mt-12 sm:gap-8">
			{#each features as feature, index (feature.title)}
				<article
					data-reveal
					class="feature-card grid min-w-0 items-center gap-3 overflow-hidden rounded-[1.75rem] bg-[rgba(14,90,58,0.08)] p-1.5 sm:gap-6 sm:rounded-[2.4rem] sm:p-2 lg:grid-cols-2"
				>
					<div
						class="h-full min-w-0 rounded-[1.35rem] bg-white/82 p-5 sm:rounded-[1.9rem] sm:p-9 {index %
						2
							? 'lg:order-2'
							: ''}"
					>
						<p class="eyebrow">{feature.question}</p>
						<h3 class="font-display mt-4 text-3xl leading-none font-black break-words sm:text-5xl">
							{feature.title}
						</h3>
						<p
							class="mt-4 text-sm leading-7 font-bold text-[var(--forest)]/68 sm:mt-5 sm:text-base sm:leading-8"
						>
							{feature.description}
						</p>
						<div class="mt-5 flex flex-wrap gap-2 sm:mt-6">
							{#each feature.benefits as benefit (benefit)}
								<span
									class="rounded-full bg-[var(--light-green)] px-3 py-1.5 text-xs font-extrabold text-[var(--forest)]/78 sm:px-4 sm:py-2 sm:text-sm"
									>{benefit}</span
								>
							{/each}
						</div>
					</div>
					<div
						class="feature-media grid min-w-0 place-items-center overflow-hidden rounded-[1.35rem] bg-[linear-gradient(145deg,#DDF4FF,#FFF8E9_52%,#DDEFC9)] p-4 sm:min-h-[420px] sm:rounded-[1.9rem] sm:p-6"
					>
						{#if feature.image || featureIllustrations[feature.title]}
							<img
								src={feature.image || featureIllustrations[feature.title]}
								alt={feature.label}
								class="h-full w-full rounded-[1.2rem] object-contain drop-shadow-[0_24px_60px_rgba(14,90,58,0.16)]"
								loading="lazy"
							/>
						{:else}
							<PhoneMockup title={feature.title} label={feature.label} compact={index > 3} />
						{/if}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>
