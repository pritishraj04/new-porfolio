<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CustomCursor from '$lib/components/CustomCursor.svelte';
	import ContactModal from '../lib/components/ContactModal.svelte';
</script>

<CustomCursor>
	<Header />
	<slot />
	<Footer />
	<ContactModal />
</CustomCursor>
