<script lang="ts">
	let { eyebrow, title }: { eyebrow: string; title: string } = $props();
</script>

<div data-reveal class="max-w-3xl">
	<p class="eyebrow">{eyebrow}</p>
	<h2 class="section-title">{title}</h2>
</div>
