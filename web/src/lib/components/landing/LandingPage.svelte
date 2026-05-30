<script lang="ts">
	import { resolve } from '$app/paths';
	import { onMount } from 'svelte';
	import { animate, inView, stagger } from 'motion';
	import {
		anieHighlights,
		faqs,
		features,
		footerLinks,
		navLinks,
		phases,
		pricingPlans,
		problems,
		solutions,
		testimonials,
		trustBadges
	} from '../../data/landing';

	let menuOpen = $state(false);
	let billing = $state<'monthly' | 'yearly'>('monthly');
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

	const priceFor = (plan: (typeof pricingPlans)[number]) => {
		if (billing === 'yearly' && plan.name === 'Farmer Plus') return '₱1,490/year';
		return plan.price;
	};

	const featureIllustrations: Record<string, string> = {
		'Crop Recommendation': '/illustrations/crop-recommendation.webp',
		'Crop Monitoring': '/illustrations/crop-monitoring.webp',
		'Personalized Action Items': '/illustrations/action-items.webp',
		'Market Views': '/illustrations/market-views.webp',
		'Generated Activity Reports': '/illustrations/generated-reports.webp',
		'Community Support': '/illustrations/community-support.webp'
	};

	const resolveRoute = (href: string) => {
		if (href.startsWith('#')) return resolve(`/${href}` as `/#${string}`);
		if (href === '/privacy-policy') return resolve('/privacy-policy');
		if (href === '/terms-of-service') return resolve('/terms-of-service');
		if (href === '/contact') return resolve('/contact');
		return resolve('/');
	};
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Nunito:wght@400;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div class="min-h-screen overflow-hidden bg-[var(--cream)] text-[var(--forest)]">
	<div class="texture pointer-events-none fixed inset-0 z-[1]" aria-hidden="true"></div>

	<header class="fixed top-0 right-0 left-0 z-30 px-4 pt-4 sm:pt-6">
		<nav
			class="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-[rgba(255,248,233,0.82)] p-2 shadow-[0_18px_60px_rgba(14,90,58,0.13)] backdrop-blur-xl"
			aria-label="Primary navigation"
		>
			<a
				href={resolve('/#home')}
				class="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-extrabold tracking-tight sm:text-base"
			>
				<img src="/favicon.svg" alt="Agrisync logo" class="brand-logo" />
				Agrisync
			</a>

			<div class="hidden items-center gap-1 lg:flex">
				{#each navLinks as link (link.href)}
					<a
						class="rounded-full px-4 py-2 text-sm font-bold text-[var(--forest)]/75 transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-white/70 hover:text-[var(--forest)]"
						href={resolveRoute(link.href)}>{link.label}</a
					>
				{/each}
			</div>

			<button
				class="relative grid size-11 place-items-center rounded-full bg-[var(--forest)] text-white lg:hidden"
				type="button"
				aria-label="Toggle menu"
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
			>
				<span
					class="absolute h-0.5 w-5 rounded-full bg-white transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] {menuOpen
						? 'translate-y-0 rotate-45'
						: '-translate-y-1.5'}"
				></span>
				<span
					class="absolute h-0.5 w-5 rounded-full bg-white transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] {menuOpen
						? 'translate-y-0 -rotate-45'
						: 'translate-y-1.5'}"
				></span>
			</button>
		</nav>

		{#if menuOpen}
			<div
				class="mx-auto mt-3 max-w-6xl rounded-[2rem] border border-white/70 bg-[rgba(255,248,233,0.94)] p-4 shadow-[0_30px_90px_rgba(14,90,58,0.18)] backdrop-blur-xl lg:hidden"
			>
				<div class="grid gap-2">
					{#each navLinks as link, index (link.href)}
						<a
							class="rounded-full bg-white/60 px-5 py-3 font-extrabold text-[var(--forest)]"
							style={`animation-delay: ${index * 45}ms`}
							href={resolveRoute(link.href)}
							onclick={() => (menuOpen = false)}>{link.label}</a
						>
					{/each}
				</div>
			</div>
		{/if}
	</header>

	<main id="home" class="relative z-10">
		<section
			class="relative min-h-[100dvh] overflow-hidden px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pt-36"
		>
			<img
				src="/illustrations/agrisync-farm-hero.png"
				alt=""
				class="absolute inset-x-0 bottom-0 h-full w-full object-cover object-center opacity-95"
			/>
			<div
				class="absolute inset-0 bg-gradient-to-b from-[rgba(221,244,255,0.76)] via-[rgba(255,248,233,0.32)] to-[rgba(255,248,233,0.98)]"
			></div>
			<div class="cloud cloud-one"></div>
			<div class="cloud cloud-two"></div>
			<div class="leaf leaf-one"></div>
			<div class="leaf leaf-two"></div>

			<div class="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_0.9fr]">
				<div data-reveal class="max-w-2xl pt-6">
					<div
						class="mb-5 inline-flex rounded-full bg-white/72 p-1.5 shadow-[0_16px_44px_rgba(14,90,58,0.12)]"
					>
						<span
							class="rounded-full bg-[var(--light-green)] px-4 py-2 text-xs font-extrabold tracking-[0.16em] text-[var(--forest)] uppercase"
							>Your Smart Farm Assistant</span
						>
					</div>
					<h1
						class="font-display text-depth text-[clamp(3.4rem,8vw,7.4rem)] leading-[0.84] font-black tracking-normal text-[var(--forest)]"
					>
						Grow Smarter.<br />Earn Better.<br />Live Better.
					</h1>
					<p class="mt-7 max-w-xl text-lg leading-8 font-bold text-[var(--forest)]/78 sm:text-xl">
						Agrisync helps Filipino farmers plan crops, monitor growth, prepare for climate risks,
						and sell with confidence using AI-powered farming assistance.
					</p>
					<div class="mt-8 flex flex-col gap-3 sm:flex-row">
						<a
							href={resolve('/#download')}
							class="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-[var(--forest)] py-3 pr-3 pl-7 text-base font-extrabold text-white shadow-[0_18px_42px_rgba(14,90,58,0.27)] transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 active:scale-[0.98]"
						>
							Download App
							<span
								class="grid size-9 place-items-center rounded-full bg-white/14 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5"
								>↗</span
							>
						</a>
					</div>
					<div class="mt-8 flex flex-wrap gap-2">
						{#each trustBadges as badge (badge)}
							<span
								class="rounded-full bg-white/72 px-4 py-2 text-sm font-extrabold text-[var(--forest)]/74 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
								>{badge}</span
							>
						{/each}
					</div>
				</div>

				<div data-reveal class="relative mx-auto min-h-[540px] w-full max-w-[520px]">
					<div
						class="anie-orbit absolute top-4 left-2 z-20 rounded-[2rem] bg-white/78 p-2 shadow-[0_24px_70px_rgba(14,90,58,0.18)]"
					>
						<div class="rounded-[1.5rem] bg-[var(--cream)] px-5 py-4">
							<div class="flex items-center gap-3">
								<div
									class="grid size-14 place-items-center rounded-full bg-[var(--yellow)] text-3xl"
								>
									☀
								</div>
								<div>
									<p class="text-sm font-extrabold">Anie says</p>
									<p class="text-sm font-bold text-[var(--forest)]/65">
										Ready na ang tanim checklist.
									</p>
								</div>
							</div>
						</div>
					</div>
					{@render PhoneMockup(
						'Crop Plan',
						'Crop Recommendation Screenshot',
						false,
						'absolute right-2 top-0 rotate-[3deg]'
					)}
					{@render PhoneMockup(
						'Harvest Window',
						'Crop Monitoring Screenshot',
						true,
						'absolute bottom-4 left-2 -rotate-[4deg] scale-[0.92]'
					)}
				</div>
			</div>
		</section>

		{@render SectionIntro(
			'Problem to Solution',
			'Less Guesswork. More Guidance.',
			'Agrisync turns scattered advice into a calm farm companion that helps farmers choose, care, prepare, and sell.'
		)}

		<section id="about" class="px-4 py-16 sm:px-6 lg:px-8">
			<div class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
				{@render InfoPanel('Farmers often struggle with', problems, 'warm')}
				{@render InfoPanel('Agrisync combines', solutions, 'green')}
			</div>
		</section>

		<section class="px-4 py-20 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-6xl">
				<div data-reveal class="mb-12 max-w-3xl">
					<p class="eyebrow">The Four Farming Phases</p>
					<h2 class="section-title">From first plan to fair price.</h2>
				</div>
				<div data-stagger class="grid gap-5 lg:grid-cols-4">
					{#each phases as item (item.phase)}
						<article data-stagger-item class="rounded-[2rem] bg-[rgba(14,90,58,0.07)] p-2">
							<div
								class="h-full rounded-[1.55rem] bg-white/82 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
							>
								<p class="text-xs font-black tracking-[0.18em] text-[var(--leaf)] uppercase">
									{item.phase}
								</p>
								<h3 class="font-display mt-4 text-3xl leading-none font-black">{item.title}</h3>
								<p
									class="mt-5 rounded-2xl bg-[var(--sky)] px-4 py-3 text-sm font-extrabold text-[var(--forest)]/75"
								>
									“{item.question}”
								</p>
								<p class="mt-5 text-sm font-black text-[var(--forest)]">{item.feature}</p>
								<p class="mt-2 text-sm leading-6 font-semibold text-[var(--forest)]/66">
									{item.description}
								</p>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

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
								src="/illustrations/anie.webp"
								alt="Virtual Assistant Anie illustration"
								class="absolute top-[-28%] left-1/2 h-[132%] w-[152%] max-w-none -translate-x-1/2 object-contain drop-shadow-[0_30px_70px_rgba(14,90,58,0.16)]"
								loading="lazy"
							/>
						</div>
					</div>
				</div>
				<div data-reveal>
					<p class="eyebrow">Meet Anie</p>
					<h2 class="section-title">Your virtual farm assistant.</h2>
					<p class="mt-5 text-lg leading-8 font-bold text-[var(--forest)]/70">
						Anie helps guide your farming journey from crop planning to harvesting and selling with
						simple, friendly answers.
					</p>
					<div class="mt-7 grid gap-3">
						{#each anieHighlights as item (item)}
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

		<section id="features" class="px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
			<div class="mx-auto max-w-6xl">
				{@render SectionHeader('Feature Showcase', 'Built for the full farming cycle.')}
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
								<h3
									class="font-display mt-4 text-3xl leading-none font-black break-words sm:text-5xl"
								>
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
								{#if featureIllustrations[feature.title]}
									<img
										src={featureIllustrations[feature.title]}
										alt={feature.label}
										class="h-full w-full rounded-[1.2rem] object-contain drop-shadow-[0_24px_60px_rgba(14,90,58,0.16)]"
										loading="lazy"
									/>
								{:else}
									{@render PhoneMockup(feature.title, feature.label, index > 3)}
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section id="pricing" class="px-4 py-20 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-6xl">
				<div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
					{@render SectionHeader('Pricing', 'Simple plans for real farms.')}
					<div
						class="inline-flex w-max rounded-full bg-white/72 p-1.5 shadow-[0_14px_34px_rgba(14,90,58,0.1)]"
					>
						{#each ['monthly', 'yearly'] as option (option)}
							<button
								class="rounded-full px-5 py-2 text-sm font-black capitalize transition duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] {billing ===
								option
									? 'bg-[var(--forest)] text-white'
									: 'text-[var(--forest)]/65'}"
								type="button"
								onclick={() => (billing = option as 'monthly' | 'yearly')}>{option}</button
							>
						{/each}
					</div>
				</div>
				<div data-stagger class="mt-12 grid gap-5 lg:grid-cols-3">
					{#each pricingPlans as plan (plan.name)}
						<article
							data-stagger-item
							class="relative rounded-[2rem] bg-[rgba(14,90,58,0.08)] p-2 transition duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-2 {plan.recommended
								? 'bg-[rgba(243,196,59,0.38)]'
								: ''}"
						>
							{#if plan.recommended}
								<span
									class="absolute top-6 right-6 rounded-full bg-[var(--yellow)] px-4 py-2 text-xs font-black tracking-[0.14em] text-[var(--forest)] uppercase"
									>Most Popular</span
								>
							{/if}
							<div class="h-full rounded-[1.55rem] bg-white/86 p-7">
								<h3 class="font-display text-4xl font-black">{plan.name}</h3>
								<p class="mt-3 text-sm font-bold text-[var(--forest)]/62">{plan.target}</p>
								<p class="font-display mt-8 text-5xl leading-none font-black">{priceFor(plan)}</p>
								{#if billing === 'yearly' && plan.name === 'Farmer Plus'}
									<p class="mt-2 text-sm font-black text-[var(--leaf)]">
										Save two months with annual billing
									</p>
								{/if}
								<a
									href={resolve('/#download')}
									class="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--forest)] px-5 py-3 font-black text-white"
									>{plan.cta}</a
								>
								<ul class="mt-7 grid gap-3">
									{#each plan.features as item (item)}
										<li class="flex gap-3 text-sm font-bold text-[var(--forest)]/72">
											<span class="text-[var(--leaf)]">✓</span>{item}
										</li>
									{/each}
								</ul>
							</div>
						</article>
					{/each}
				</div>
			</div>
		</section>

		<section class="px-4 py-20 sm:px-6 lg:px-8">
			<div class="mx-auto max-w-6xl">
				{@render SectionHeader('Farmer Stories', 'Trust that feels close to home.')}
				<div data-stagger class="mt-12 grid gap-5 md:grid-cols-3">
					{#each testimonials as item (item.name)}
						<figure data-stagger-item class="rounded-[2rem] bg-[rgba(14,90,58,0.08)] p-2">
							<blockquote class="rounded-t-[1.55rem] bg-white/82 p-7 pb-0">
								<div class="font-display text-6xl leading-none font-black text-[var(--yellow)]">
									“
								</div>
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

		<section id="faq" class="px-4 py-20 sm:px-6 lg:px-8">
			<div class="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
				{@render SectionHeader('FAQ', 'Helpful answers, no heavy jargon.')}
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
							<p class="mt-4 leading-7 font-bold text-[var(--forest)]/66">{item.answer}</p>
						</details>
					{/each}
				</div>
			</div>
		</section>

		<section id="download" class="px-4 py-20 sm:px-6 lg:px-8">
			<div
				data-reveal
				class="mx-auto max-w-6xl overflow-hidden rounded-[2.6rem] bg-[var(--forest)] p-2 text-white"
			>
				<div
					class="relative rounded-[2.05rem] bg-[radial-gradient(circle_at_18%_18%,rgba(243,196,59,0.26),transparent_28%),linear-gradient(135deg,#0E5A3A,#174F31)] px-6 py-16 sm:px-12 lg:px-16"
				>
					<div class="max-w-3xl">
						<p class="eyebrow text-white/70">Download Agrisync</p>
						<h2 class="font-display text-5xl leading-none font-black sm:text-7xl">
							Start Growing Smarter Today
						</h2>
						<p class="mt-5 text-lg leading-8 font-bold text-white/72">
							Download Agrisync and get your AI-powered farming assistant for planning, monitoring,
							alerts, reports, and fairer selling decisions.
						</p>
						<div class="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
							<a
								href="https://apps.apple.com/"
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
								href="https://play.google.com/store/apps"
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
	</main>

	<footer class="relative z-10 px-4 pt-10 pb-10 sm:px-6 lg:px-8">
		<div
			class="mx-auto flex max-w-6xl flex-col gap-6 border-t border-[rgba(14,90,58,0.16)] pt-8 md:flex-row md:items-center md:justify-between"
		>
			<div>
				<p class="font-display text-3xl font-black">Agrisync</p>
				<p class="mt-1 text-sm font-bold text-[var(--forest)]/60">
					We help farmers grow with confidence.
				</p>
			</div>
			<div class="flex flex-wrap gap-4 text-sm font-black text-[var(--forest)]/68">
				{#each footerLinks as link (link.href)}
					<a href={resolveRoute(link.href)}>{link.label}</a>
				{/each}
			</div>
			<p class="text-sm font-bold text-[var(--forest)]/58">© 2026 Agrisync. All rights reserved.</p>
		</div>
	</footer>
</div>

{#snippet SectionHeader(eyebrow: string, title: string)}
	<div data-reveal class="max-w-3xl">
		<p class="eyebrow">{eyebrow}</p>
		<h2 class="section-title">{title}</h2>
	</div>
{/snippet}

{#snippet SectionIntro(eyebrow: string, title: string, body: string)}
	<section class="px-4 pt-20 sm:px-6 lg:px-8">
		<div data-reveal class="mx-auto max-w-4xl text-center">
			<p class="eyebrow justify-center">{eyebrow}</p>
			<h2 class="section-title">{title}</h2>
			<p class="mx-auto mt-5 max-w-2xl text-lg leading-8 font-bold text-[var(--forest)]/68">
				{body}
			</p>
		</div>
	</section>
{/snippet}

{#snippet InfoPanel(title: string, items: string[], tone: 'warm' | 'green')}
	<article data-reveal class="rounded-[2.3rem] bg-[rgba(14,90,58,0.08)] p-2">
		<div
			class="h-full rounded-[1.8rem] {tone === 'green'
				? 'bg-[var(--light-green)]'
				: 'bg-white/82'} p-7 sm:p-9"
		>
			<h3 class="font-display text-4xl leading-none font-black">{title}</h3>
			<div class="mt-7 grid gap-3">
				{#each items as item (item)}
					<div class="flex gap-3 rounded-2xl bg-white/64 p-4 font-bold text-[var(--forest)]/72">
						<span
							class="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-[var(--yellow)] text-xs text-[var(--forest)]"
							>✓</span
						>
						{item}
					</div>
				{/each}
			</div>
		</div>
	</article>
{/snippet}

{#snippet PhoneMockup(title: string, label: string, compact = false, className = '')}
	<div class="phone-frame {className}" aria-label={label}>
		<div class="phone-screen">
			<div class="mx-auto mb-4 h-5 w-24 rounded-full bg-[var(--forest)]/12"></div>
			<div class="rounded-3xl bg-[var(--forest)] p-4 text-white">
				<p class="text-xs font-black tracking-[0.14em] text-white/55 uppercase">Agrisync</p>
				<h3 class="font-display mt-1 text-3xl leading-none font-black">{title}</h3>
			</div>
			<div class="mt-4 grid gap-3">
				<div class="rounded-3xl bg-[var(--light-green)] p-4">
					<div class="h-3 w-24 rounded-full bg-[var(--forest)]/18"></div>
					<div class="mt-3 h-3 w-36 rounded-full bg-[var(--forest)]/12"></div>
					<div class="mt-5 h-3 rounded-full bg-white/70">
						<div class="h-3 w-2/3 rounded-full bg-[var(--leaf)]"></div>
					</div>
				</div>
				<div class="grid grid-cols-2 gap-3">
					<div class="rounded-3xl bg-[var(--sky)] p-4">
						<div class="h-10 rounded-2xl bg-white/70"></div>
						<p class="mt-3 text-xs font-black text-[var(--forest)]/58">Rain alert</p>
					</div>
					<div class="rounded-3xl bg-[var(--yellow)]/70 p-4">
						<div class="h-10 rounded-2xl bg-white/65"></div>
						<p class="mt-3 text-xs font-black text-[var(--forest)]/58">Price view</p>
					</div>
				</div>
				{#if !compact}
					<div class="rounded-3xl bg-white p-4 shadow-[inset_0_0_0_1px_rgba(14,90,58,0.08)]">
						<p class="text-xs font-black text-[var(--forest)]/50">{label}</p>
						<div class="mt-3 flex gap-2">
							<span class="h-10 flex-1 rounded-2xl bg-[var(--light-green)]"></span>
							<span class="h-10 flex-1 rounded-2xl bg-[var(--sky)]"></span>
							<span class="h-10 flex-1 rounded-2xl bg-[var(--yellow)]/70"></span>
						</div>
					</div>
				{/if}
			</div>
		</div>
	</div>
{/snippet}
