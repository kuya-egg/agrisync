<script lang="ts">
	let { title, items, tone }: { title: string; items: string[]; tone: 'warm' | 'green' } = $props();
</script>

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
