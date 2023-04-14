<script>
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	const workOption = {
		pagination: true,
		arrows: false,
		gap: '1rem',
		perPage: 3,
		breakpoints: {
			930: {
				perPage: 2
			},
			620: {
				perPage: 1
			}
		}
	};
	let works = [
		{ src: '', alt: '' },
		{ src: '', alt: '' },
		{ src: '', alt: '' },
		{ src: '', alt: '' }
	];
</script>

<div class="container-fluid">
	<Splide options={workOption} aria-labelledby="Works Carsourel">
		{#each works as work}
			<SplideSlide>
				<img class="workImage" src={work.src} alt={`${work.alt} Image`} />
				<p class="paragraph" style="text-align: center;">{work.alt}</p>
			</SplideSlide>
		{/each}
	</Splide>
</div>

<style>
	.container-fluid {
		margin-top: 1.56rem;
	}
	/* .workImage {
		width: 4rem;
		margin-bottom: 0.7rem;
		margin-inline: auto;
	} */
</style>
