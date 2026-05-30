<script lang="ts">
	import { resolve } from '$app/paths';
	import { defaultLandingContent } from '$lib/data/content';
	import type { LandingContent, PricingPlan } from '$lib/types/content';
	import SectionHeader from '../shared/SectionHeader.svelte';

	let {
		intro = defaultLandingContent.pricingIntro,
		plans = defaultLandingContent.pricingPlans
	}: {
		intro?: LandingContent['pricingIntro'];
		plans?: PricingPlan[];
	} = $props();

	let billing = $state<'monthly' | 'yearly'>('monthly');

	const priceFor = (plan: PricingPlan) => {
		if (billing === 'yearly' && plan.annualPrice) return plan.annualPrice;
		return plan.price;
	};
</script>

<section id="pricing" class="px-4 py-20 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-6xl">
		<div class="flex flex-col justify-between gap-5 md:flex-row md:items-end">
			<SectionHeader eyebrow={intro.eyebrow} title={intro.title} />
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
			{#each plans as plan (plan.name)}
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
						{#if billing === 'yearly' && plan.annualPrice}
							<p class="mt-2 text-sm font-black text-[var(--leaf)]">
								Save two months with annual billing
							</p>
						{/if}
						<a
							href={resolve('/#download')}
							class="primary-cta mt-8 min-h-12 w-full px-5 py-3 text-center">{plan.cta}</a
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
