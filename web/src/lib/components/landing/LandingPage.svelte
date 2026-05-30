<script lang="ts">
	import SiteFooter from '$lib/components/site/SiteFooter.svelte';
	import SiteHeader from '$lib/components/site/SiteHeader.svelte';
	import { onMount } from 'svelte';
	import { animate, inView, stagger } from 'motion';
	import AboutSection from './sections/AboutSection.svelte';
	import AnieSection from './sections/AnieSection.svelte';
	import DownloadSection from './sections/DownloadSection.svelte';
	import FaqSection from './sections/FaqSection.svelte';
	import FeaturesSection from './sections/FeaturesSection.svelte';
	import HeroSection from './sections/HeroSection.svelte';
	import PhasesSection from './sections/PhasesSection.svelte';
	import PricingSection from './sections/PricingSection.svelte';
	import TestimonialsSection from './sections/TestimonialsSection.svelte';

	const ease = [0.32, 0.72, 0, 1] as const;
	const animateDom = animate as unknown as (
		target: Element | NodeListOf<Element>,
		keyframes: Record<string, unknown>,
		options: Record<string, unknown>
	) => void;

	onMount(() => {
		const stopCards = inView(
			'[data-reveal]',
			(element) => {
				animateDom(
					element,
					{
						opacity: [0, 1],
						transform: ['translateY(34px)', 'translateY(0px)'],
						filter: ['blur(8px)', 'blur(0px)']
					},
					{ duration: 0.8, easing: ease }
				);
			},
			{ margin: '0px 0px -12% 0px' }
		);

		const stopGroups = inView(
			'[data-stagger]',
			(element) => {
				animateDom(
					element.querySelectorAll('[data-stagger-item]'),
					{ opacity: [0, 1], transform: ['translateY(22px)', 'translateY(0px)'] },
					{ delay: stagger(0.08), duration: 0.62, easing: ease }
				);
			},
			{ margin: '0px 0px -12% 0px' }
		);

		return () => {
			stopCards();
			stopGroups();
		};
	});
</script>

<div class="min-h-screen overflow-hidden bg-[var(--cream)] text-[var(--forest)]">
	<div class="texture pointer-events-none fixed inset-0 z-[1]" aria-hidden="true"></div>

	<SiteHeader />

	<main id="home" class="relative z-10">
		<HeroSection />
		<AboutSection />
		<PhasesSection />
		<AnieSection />
		<FeaturesSection />
		<PricingSection />
		<TestimonialsSection />
		<FaqSection />
		<DownloadSection />
	</main>

	<SiteFooter />
</div>
