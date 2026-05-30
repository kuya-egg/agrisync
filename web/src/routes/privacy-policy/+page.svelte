<script lang="ts">
	import LegalPage from '$lib/components/legal/LegalPage.svelte';
	import { privacyPolicy } from '$lib/data/legal';
</script>

<LegalPage content={privacyPolicy} canonicalPath="/privacy-policy" />
