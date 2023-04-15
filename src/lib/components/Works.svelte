<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import ProjectCard from './ProjectCard.svelte';
	const workOption = {
		pagination: true,
		arrows: false,
		gap: '1.875rem',
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
		{
			src: '/img/works/frontend_homepage.webp',
			projectName: 'Simple Frontend Project',
			projectType: 'Frontend'
		},
		{
			src: '/img/works/frontend_mentor_challenge.webp',
			projectName: 'Frontend Mentor Challenge',
			projectType: 'Frontend'
		},
		{
			src: '/img/works/mern_todo.webp',
			projectName: 'Mern Todo App',
			projectType: 'Full Stack'
		},
		{
			src: '/img/works/react_menu.webp',
			projectName: 'React Menu',
			projectType: 'Frontend'
		},
		{
			src: '/img/works/svelte_menu.webp',
			projectName: 'Svelte Menu',
			projectType: 'Frontend'
		},
		{ src: '/img/works/google_clone.webp', projectName: 'Google Clone', projectType: 'Frontend' },
		{ src: '/img/works/lgini.webp', projectName: 'Laundry Project', projectType: 'Frontend' }
	];
</script>

<div class="container-fluid">
	<Splide hasTrack={false} options={workOption} aria-labelledby="Works Carsourel">
		<SplideTrack>
			{#each works as work}
				<SplideSlide>
					<ProjectCard
						src={work.src}
						projectName={work.projectName}
						projectType={work.projectType}
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
