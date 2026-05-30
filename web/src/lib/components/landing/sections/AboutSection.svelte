<script lang="ts">
	import { problems, solutions } from '$lib/data/landing';
	import InfoPanel from '../shared/InfoPanel.svelte';
	import SectionIntro from '../shared/SectionIntro.svelte';
</script>

<SectionIntro
	eyebrow="Problem to Solution"
	title="Less Guesswork. More Guidance."
	body="Agrisync turns scattered advice into a calm farm companion that helps farmers choose, care, prepare, and sell."
/>

<section id="about" class="px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
		<InfoPanel title="Farmers often struggle with" items={problems} tone="warm" />
		<InfoPanel title="Agrisync combines" items={solutions} tone="green" />
	</div>
</section>
