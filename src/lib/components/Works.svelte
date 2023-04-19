<script>
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import ProjectCard from './ProjectCard.svelte';
	const workOption = {
		pagination: true,
		arrows: false,
		gap: '1.875rem',
		perPage: 4,
		breakpoints: {
			1900: {
				perPage: 3
			},
			1300: {
				perPage: 2
			},
			630: {
				perPage: 1
			}
		}
	};
	let works = [
		{
			src: '/img/works/property-listing.webp',
			slug: 'property-listing-project',
			projectName: 'Property Listing Project',
			projectType: 'Fullstack'
		},
		{
			src: '/img/works/food-dashboard.webp',
			slug: 'food-dashboard-project',
			projectName: 'Food dashboard project',
			projectType: 'Fullstack'
		},
		{
			src: '/img/works/food-company.webp',
			slug: 'food-company-website',
			projectName: 'Food Company Website',
			projectType: 'Fullstack'
		},
		{
			src: '/img/works/frontend_homepage.webp',
			slug: 'simple-frontend-project',
			projectName: 'Simple Frontend Project',
			projectType: 'Frontend'
		},
		{
			src: '/img/works/frontend_mentor_challenge.webp',
			slug: 'frontend-mentor-challenge',
			projectName: 'Frontend Mentor Challenge',
			projectType: 'Frontend'
		},
		{
			src: '/img/works/mern_todo.webp',
			slug: 'mern-todo-app',
			projectName: 'Mern Todo App',
			projectType: 'Full Stack'
		},
		{
			src: '/img/works/react_menu.webp',
			slug: 'react-menu',
			projectName: 'React Menu',
			projectType: 'Frontend'
		},
		{
			src: '/img/works/svelte_menu.webp',
			slug: 'svelte-menu',
			projectName: 'Svelte Menu',
			projectType: 'Frontend'
		},
		{
			src: '/img/works/google_clone.webp',
			slug: 'google-clone',
			projectName: 'Google Clone',
			projectType: 'Frontend'
		},
		{
			src: '/img/works/lgini.webp',
			slug: 'laundry-project',
			projectName: 'Laundry Project',
			projectType: 'Frontend'
		}
	];
</script>

<div class="container-fluid">
	<Splide hasTrack={false} options={workOption} aria-labelledby="Works Carsourel">
		<SplideTrack>
			{#each works as work}
				<SplideSlide>
					<ProjectCard
						projectLink={`/works/${work.slug}`}
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
