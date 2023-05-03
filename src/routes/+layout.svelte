<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	export let data;
</script>

<CustomCursor>
	<Header />
	<PageTransition pathname={data.pathname}>
		<slot />
	</PageTransition>
	<Footer />
</CustomCursor>
