<script lang="ts">
	import { resolve } from '$app/paths';
	import { trustBadges } from '$lib/data/landing';
	import PhoneMockup from '../shared/PhoneMockup.svelte';
</script>

<section class="relative min-h-[100dvh] overflow-hidden px-4 pt-32 pb-16 sm:px-6 lg:px-8 lg:pt-36">
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
				Agrisync helps Filipino farmers plan crops, monitor growth, prepare for climate risks, and
				sell with confidence using AI-powered farming assistance.
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
						<div class="grid size-14 place-items-center rounded-full bg-[var(--yellow)] text-3xl">
							☀
						</div>
						<div>
							<p class="text-sm font-extrabold">Anie says</p>
							<p class="text-sm font-bold text-[var(--forest)]/65">Ready na ang tanim checklist.</p>
						</div>
					</div>
				</div>
			</div>
			<PhoneMockup
				title="Crop Plan"
				label="Crop Recommendation Screenshot"
				className="absolute right-2 top-0 rotate-[3deg]"
			/>
			<PhoneMockup
				title="Harvest Window"
				label="Crop Monitoring Screenshot"
				compact
				className="absolute bottom-4 left-2 -rotate-[4deg] scale-[0.92]"
			/>
		</div>
	</div>
</section>
