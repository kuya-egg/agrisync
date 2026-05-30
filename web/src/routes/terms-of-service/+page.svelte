<script lang="ts">
	import LegalPage from '$lib/components/legal/LegalPage.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<LegalPage content={data.content} canonicalPath="/terms-of-service" />
