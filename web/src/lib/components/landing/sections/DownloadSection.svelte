<script lang="ts">
	/* eslint-disable svelte/no-navigation-without-resolve */
	import RichText from '$lib/components/rich-text/RichText.svelte';
	import { defaultLandingContent } from '$lib/data/content';
	import type { LandingSectionContent } from '$lib/types/content';

	let {
		section = defaultLandingContent.download,
		appleAppUrl = defaultLandingContent.settings.appleAppUrl,
		googlePlayUrl = defaultLandingContent.settings.googlePlayUrl
	}: {
		section?: LandingSectionContent;
		appleAppUrl?: string;
		googlePlayUrl?: string;
	} = $props();
</script>

<section id="download" class="px-4 py-20 sm:px-6 lg:px-8">
	<div
		data-reveal
		class="mx-auto max-w-6xl overflow-hidden rounded-[2.6rem] bg-[var(--forest)] p-2 text-white"
	>
		<div
			class="relative rounded-[2.05rem] bg-[radial-gradient(circle_at_18%_18%,rgba(243,196,59,0.26),transparent_28%),linear-gradient(135deg,#0E5A3A,#174F31)] px-6 py-16 sm:px-12 lg:px-16"
		>
			<div class="max-w-3xl">
				<p class="eyebrow text-white/70">{section.eyebrow}</p>
				<h2 class="font-display text-5xl leading-none font-black sm:text-7xl">
					{section.title}
				</h2>
				<RichText
					content={section.body}
					className="mt-5 text-lg leading-8 font-bold text-white/72"
				/>
				<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
					<a
						href={appleAppUrl}
						class="store-badge-link"
						aria-label="Download Agrisync on the App Store"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							src="/logos/app-store-badge.svg"
							alt="Download on the App Store"
							class="store-badge store-badge-apple"
							loading="lazy"
						/>
					</a>
					<a
						href={googlePlayUrl}
						class="store-badge-link store-badge-link-google"
						aria-label="Get Agrisync on Google Play"
						rel="noopener noreferrer"
						target="_blank"
					>
						<img
							src="/logos/google-play-badge.png"
							alt="Get it on Google Play"
							class="store-badge store-badge-google"
							loading="lazy"
						/>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
