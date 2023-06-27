<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import ContactModal from '$lib/components/ContactModal.svelte';

	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import { onMount } from 'svelte';
	let root;

	onMount(() => {
		root = document.getElementsByTagName('html')[0];

		root?.classList.add('smoothscroll');
	});

	beforeNavigate(() => {
		root?.classList.remove('smoothscroll');
	});

	afterNavigate(() => {
		root?.classList.add('smoothscroll');
	});
</script>

<svelte:head>
	<meta property="og:image" content="/favicon.png" />
</svelte:head>

<CustomCursor>
	<Header />
	<slot />
	<Footer />
	<ContactModal />
</CustomCursor>
