<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	export let works = [];
	const workOption = {
		pagination: true,
		arrows: false,
		gap: '1.875rem',
		perPage: 5,
		breakpoints: {
			1900: {
				perPage: 4
			},
			1300: {
				perPage: 3
			},
			920: {
				perPage: 2
			},
			640: {
				perPage: 1
			}
		}
	};
</script>

<div class="container-fluid">
	<Splide hasTrack={false} options={workOption} aria-labelledby="Works Carsourel">
		<SplideTrack>
			{#each works as work}
				<SplideSlide>
					<ProjectCard
						projectImg={`/img/works/${work.img}`}
						projectName={work.title}
						projectDesc={work.desc}
						projectCategory={work.category}
						projectLink={`/works/${work.slug}`}
					/>
				</SplideSlide>
			{/each}
		</SplideTrack>
		<ul class="splide__pagination" />
	</Splide>
</div>

<style>
	.container-fluid {
		margin-block: 2.5rem;
	}

	.splide__pagination {
		bottom: -2.5rem;
	}
</style>
