<script lang="ts">
	let { eyebrow, title, body }: { eyebrow: string; title: string; body: string } = $props();
</script>

<section class="px-4 pt-20 sm:px-6 lg:px-8">
	<div data-reveal class="mx-auto max-w-4xl text-center">
		<p class="eyebrow justify-center">{eyebrow}</p>
		<h2 class="section-title">{title}</h2>
		<p class="mx-auto mt-5 max-w-2xl text-lg leading-8 font-bold text-[var(--forest)]/68">
			{body}
		</p>
	</div>
</section>
