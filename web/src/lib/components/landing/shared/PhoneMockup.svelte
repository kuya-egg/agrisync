<script lang="ts">
	let {
		title,
		label,
		compact = false,
		className = ''
	}: { title: string; label: string; compact?: boolean; className?: string } = $props();
</script>

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
