<script>
	import { fly } from 'svelte/transition';
	export let pathname = '';
</script>

{#key pathname}
	<div in:fly={{ y: -200, duration: 1000, delay: 1000 }} out:fly={{ y: 200, duration: 1000 }}>
		<slot />
	</div>
{/key}
