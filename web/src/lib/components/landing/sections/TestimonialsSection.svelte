<script lang="ts">
	import { defaultLandingContent } from '$lib/data/content';
	import type { LandingContent, Testimonial } from '$lib/types/content';
	import SectionHeader from '../shared/SectionHeader.svelte';

	let {
		intro = defaultLandingContent.testimonialsIntro,
		testimonials = defaultLandingContent.testimonials
	}: {
		intro?: LandingContent['testimonialsIntro'];
		testimonials?: Testimonial[];
	} = $props();
</script>

<section class="px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-6xl">
		<SectionHeader eyebrow={intro.eyebrow} title={intro.title} />
		<div data-stagger class="mt-12 grid gap-5 md:grid-cols-3">
			{#each testimonials as item (item.name)}
				<figure data-stagger-item class="rounded-[2rem] bg-[rgba(14,90,58,0.08)] p-2">
					<blockquote class="rounded-t-[1.55rem] bg-white/82 p-7 pb-0">
						<div class="font-display text-6xl leading-none font-black text-[var(--yellow)]">“</div>
						<p class="text-xl leading-8 font-black">{item.quote}</p>
					</blockquote>
					<figcaption
						class="rounded-b-[1.55rem] bg-white/82 p-7 pt-6 text-sm font-bold text-[var(--forest)]/64"
					>
						<div class="flex items-center gap-3">
							{#if item.image}
								<img
									src={item.image}
									alt={item.name}
									class="h-12 w-12 rounded-full object-cover"
									loading="lazy"
								/>
							{/if}
							<div class="leading-tight">
								<strong class="block text-[var(--forest)]">{item.name}</strong>
								<span class="text-[var(--forest)]/64">{item.detail}</span>
							</div>
						</div>
					</figcaption>
				</figure>
			{/each}
		</div>
	</div>
</section>
