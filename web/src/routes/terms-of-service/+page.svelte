<script lang="ts">
	import LegalPage from '$lib/components/legal/LegalPage.svelte';
	import { termsOfService } from '$lib/data/legal';
</script>

<LegalPage content={termsOfService} canonicalPath="/terms-of-service" />
