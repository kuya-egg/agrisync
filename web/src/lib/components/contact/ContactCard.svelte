<script lang="ts">
	import { resolve } from '$app/paths';

	const email = 'hello@agrisync.ph';
	const mailto = `mailto:${email}`;
</script>

<section class="surface-frame w-full max-w-3xl">
	<div class="surface-panel p-8 text-center sm:p-12">
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
		<a href={mailto} class="primary-cta mt-8 px-8 py-3">
			Email {email}
		</a>
		<p class="mt-6 text-sm font-bold text-[var(--forest)]/56">
			If your email app does not open, write to {email}.
		</p>
	</div>
</section>
