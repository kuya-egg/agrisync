<script lang="ts">
	import { resolve } from '$app/paths';
	import type { LegalPageContent } from '$lib/data/legal';

	let { content, canonicalPath }: { content: LegalPageContent; canonicalPath: string } = $props();

	const canonicalUrl = $derived(new URL(canonicalPath, 'https://agrisync.online').toString());
</script>

<svelte:head>
	<meta name="description" content={content.description} />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:title" content={`${content.title} - Agrisync`} />
	<meta property="og:description" content={content.description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content="https://agrisync.online/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<title>{content.title} - Agrisync</title>
</svelte:head>

<main class="min-h-screen bg-[var(--cream)] px-4 py-6 text-[var(--forest)] sm:px-6 lg:px-8">
	<div class="mx-auto max-w-4xl">
		<nav
			class="mb-8 flex items-center justify-between rounded-full border border-white/70 bg-white/72 p-2 shadow-[0_18px_60px_rgba(14,90,58,0.1)]"
			aria-label="Legal page navigation"
		>
			<a
				href={resolve('/')}
				class="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-extrabold tracking-normal sm:text-base"
			>
				<img src="/favicon.svg" alt="Agrisync logo" class="brand-logo" />
				Agrisync
			</a>
			<a
				href={resolve('/')}
				class="rounded-full bg-[var(--forest)] px-5 py-3 text-sm font-black text-white"
			>
				Back Home
			</a>
		</nav>

		<article class="rounded-[2.5rem] bg-[rgba(14,90,58,0.08)] p-2">
			<div
				class="rounded-[2rem] bg-white/82 px-6 py-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.86)] sm:px-10 lg:px-12"
			>
				<p class="eyebrow">{content.eyebrow}</p>
				<h1 class="font-display mt-5 text-5xl leading-none font-black sm:text-7xl">
					{content.title}
				</h1>
				<p class="mt-5 text-lg leading-8 font-bold text-[var(--forest)]/68">
					{content.description}
				</p>
				<p class="mt-4 text-sm font-black tracking-[0.14em] text-[var(--forest)]/48 uppercase">
					Last updated: {content.updated}
				</p>

				<div class="mt-10 grid gap-7">
					{#each content.sections as section (section.title)}
						<section class="rounded-[1.6rem] bg-[var(--cream)] p-6">
							<h2 class="font-display text-3xl leading-none font-black">{section.title}</h2>
							<div class="mt-4 grid gap-3">
								{#each section.body as paragraph (paragraph)}
									<p class="text-base leading-8 font-bold text-[var(--forest)]/68">{paragraph}</p>
								{/each}
							</div>
						</section>
					{/each}
				</div>

				<div class="mt-10 rounded-[1.6rem] bg-[var(--light-green)] p-6">
					<h2 class="font-display text-3xl leading-none font-black">Contact</h2>
					<p class="mt-3 leading-8 font-bold text-[var(--forest)]/70">
						Questions about this page can be sent to
						<a
							class="font-black underline decoration-[var(--leaf)] decoration-2 underline-offset-4"
							href="mailto:hello@agrisync.ph">hello@agrisync.ph</a
						>.
					</p>
				</div>
			</div>
		</article>
	</div>
</main>
