<script lang="ts">
	import { resolve } from '$app/paths';
	import RichText from '$lib/components/rich-text/RichText.svelte';
	import Seo from '$lib/components/seo/Seo.svelte';
	import { defaultSiteSettings } from '$lib/data/content';
	import type { LegalPageContent } from '$lib/data/legal';

	let { content, canonicalPath }: { content: LegalPageContent; canonicalPath: string } = $props();

	const canonicalUrl = $derived(new URL(canonicalPath, 'https://agrisync.online').toString());
	const title = $derived(`${content.title} - Agrisync`);
	const contactEmail = $derived(content.contactEmail || defaultSiteSettings.contactEmail);
</script>

<Seo
	{title}
	description={content.description}
	canonical={canonicalUrl}
	ogImage={defaultSiteSettings.ogImage}
/>

<main class="min-h-screen bg-(--cream) px-4 py-6 text-(--forest) sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<nav
			class="legal-nav mb-8 flex items-center justify-between rounded-full border border-white/70 bg-white/72 p-2 shadow-[0_18px_60px_rgba(14,90,58,0.1)]"
			aria-label="Legal page navigation"
		>
			<a
				href={resolve('/')}
				class="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-extrabold tracking-normal sm:text-base"
			>
				<img src="/favicon.svg" alt="Agrisync logo" class="brand-logo" />
				Agrisync
			</a>
			<a href={resolve('/')} class="primary-cta min-h-0 px-5 py-3 text-sm"> Back Home </a>
		</nav>

		<article class="surface-frame">
			<div class="surface-panel px-6 py-10 sm:px-10 lg:px-12">
				<p class="eyebrow">{content.eyebrow}</p>
				<h1 class="font-display mt-5 text-5xl leading-none font-black sm:text-7xl">
					{content.title}
				</h1>
				<RichText
					content={content.description}
					className="mt-5 text-lg leading-8 font-bold text-(--forest)/68"
				/>
				<p class="mt-4 text-sm font-black tracking-[0.14em] text-(--forest)/48 uppercase">
					Last updated: {content.updated}
				</p>

				<div class="mt-10 grid gap-7">
					{#each content.sections as section (section.title)}
						<section class="rounded-[1.6rem] bg-(--cream) p-6">
							<h2 class="font-display text-3xl leading-none font-black">{section.title}</h2>
							<div class="mt-4 grid gap-3">
								{#each section.body as paragraph (paragraph)}
									<RichText
										content={paragraph}
										className="text-base leading-8 font-bold text-(--forest)/68"
									/>
								{/each}
							</div>
						</section>
					{/each}
				</div>

				<div class="mt-10 rounded-[1.6rem] bg-(--light-green) p-6">
					<h2 class="font-display text-3xl leading-none font-black">Contact</h2>
					<p class="mt-3 leading-8 font-bold text-(--forest)/70">
						Questions about this page can be sent to
						<a
							class="font-black underline decoration-(--leaf) decoration-2 underline-offset-4"
							href={`mailto:${contactEmail}`}>{contactEmail}</a
						>.
					</p>
				</div>
			</div>
		</article>
	</div>
</main>
