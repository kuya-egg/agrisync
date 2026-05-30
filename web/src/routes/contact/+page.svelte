<script lang="ts">
	import { resolve } from '$app/paths';

	const email = 'hello@agrisync.ph';
	const mailto = `mailto:${email}`;
	const canonicalUrl = 'https://agrisync.online/contact';
	const description = 'Contact Agrisync by email for support, partnerships, or product questions.';
</script>

<svelte:head>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />
	<meta property="og:title" content="Contact - Agrisync" />
	<meta property="og:description" content={description} />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:image" content="https://agrisync.online/og-image.png" />
	<meta name="twitter:card" content="summary_large_image" />
	<title>Contact - Agrisync</title>
</svelte:head>

<main
	class="grid min-h-screen place-items-center bg-[var(--cream)] px-4 py-10 text-[var(--forest)] sm:px-6 lg:px-8"
>
	<section class="w-full max-w-3xl rounded-[2.5rem] bg-[rgba(14,90,58,0.08)] p-2">
		<div
			class="rounded-[2rem] bg-white/84 p-8 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.86)] sm:p-12"
		>
			<a
				href={resolve('/')}
				class="mx-auto mb-8 flex w-max items-center gap-2 rounded-full px-3 py-2 text-sm font-extrabold tracking-normal sm:text-base"
			>
				<img src="/favicon.svg" alt="Agrisync logo" class="brand-logo" />
				Agrisync
			</a>
			<p class="eyebrow mx-auto">Contact Agrisync</p>
			<h1 class="font-display mt-5 text-5xl leading-none font-black sm:text-7xl">
				Let's talk farming.
			</h1>
			<p class="mx-auto mt-5 max-w-2xl text-lg leading-8 font-bold text-[var(--forest)]/68">
				For support, partnerships, app questions, or farmer community concerns, send us an email and
				we'll get back to you.
			</p>
			<a
				href={mailto}
				class="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--forest)] px-8 py-3 font-black text-white shadow-[0_18px_42px_rgba(14,90,58,0.22)]"
			>
				Email {email}
			</a>
			<p class="mt-6 text-sm font-bold text-[var(--forest)]/56">
				If your email app does not open, write to {email}.
			</p>
		</div>
	</section>
</main>
