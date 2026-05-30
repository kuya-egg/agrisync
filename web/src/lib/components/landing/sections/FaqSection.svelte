<script lang="ts">
	import RichText from '$lib/components/rich-text/RichText.svelte';
	import { defaultLandingContent } from '$lib/data/content';
	import type { Faq, LandingContent } from '$lib/types/content';
	import SectionHeader from '../shared/SectionHeader.svelte';

	let {
		intro = defaultLandingContent.faqIntro,
		faqs = defaultLandingContent.faqs
	}: {
		intro?: LandingContent['faqIntro'];
		faqs?: Faq[];
	} = $props();
</script>

<section id="faq" class="px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
		<SectionHeader eyebrow={intro.eyebrow} title={intro.title} />
		<div class="grid gap-3">
			{#each faqs as item (item.question)}
				<details
					data-reveal
					class="group rounded-3xl bg-white/76 p-5 shadow-[0_10px_32px_rgba(14,90,58,0.08)]"
				>
					<summary class="cursor-pointer list-none text-lg font-black"
						>{item.question}<span
							class="float-right ml-4 transition duration-500 group-open:rotate-45">+</span
						></summary
					>
					<RichText
						content={item.answer}
						className="mt-4 leading-7 font-bold text-[var(--forest)]/66"
					/>
				</details>
			{/each}
		</div>
	</div>
</section>
