<script lang="ts">
	import { defaultLandingContent } from '$lib/data/content';
	import type { LandingSectionContent } from '$lib/types/content';
	import InfoPanel from '../shared/InfoPanel.svelte';
	import SectionIntro from '../shared/SectionIntro.svelte';

	let {
		section = defaultLandingContent.about,
		problems = defaultLandingContent.problems,
		solutions = defaultLandingContent.solutions
	}: {
		section?: LandingSectionContent;
		problems?: string[];
		solutions?: string[];
	} = $props();
</script>

<SectionIntro eyebrow={section.eyebrow} title={section.title} body={section.body} />

<section id="about" class="px-4 py-16 sm:px-6 lg:px-8">
	<div class="mx-auto grid max-w-6xl gap-6 lg:grid-cols-2">
		<InfoPanel title="Farmers often struggle with" items={problems} tone="warm" />
		<InfoPanel title="Agrisync combines" items={solutions} tone="green" />
	</div>
</section>
