<script>
	import { goto } from '$app/navigation';
	import { selectedCategory } from '$lib/stores';
	export let projectImg,
		projectCategory,
		projectName,
		projectDesc,
		projectLink = '/';

	const handleNavigateCategory = async (category) => {
		await goto('/works');
		$selectedCategory = category;
	};
</script>

<div class="project-card bg-blur-primary">
	<div class="project-image">
		<img src={projectImg} alt={`Image for ${projectName}`} height="169px" loading="lazy" />
		<button
			on:click={handleNavigateCategory(projectCategory)}
			class={'button project-category cat-' + projectCategory}>{projectCategory}</button
		>
	</div>
	<div class="project-head">
		<h2 class="ternary-heading">{projectName}</h2>
	</div>
	<div class="project-details">
		{@html projectDesc}
	</div>
	...
	<div class="project-actions">
		<a href={projectLink} class="button">View</a>
	</div>
</div>

<style>
	.project-card {
		border-radius: 10px;
		backdrop-filter: blur(10px);
		padding: 10px;
		height: 100%;
	}
	.project-image {
		position: relative;
		border-radius: 6px;
		overflow: hidden;
	}
	.project-category {
		position: absolute;
		top: 10px;
		right: 10px;
		padding: 0 8px;
		font-size: 10px;
	}
	.cat-fullstack {
		background-color: var(--clr-fullstack);
	}
	.cat-frontend {
		background-color: var(--clr-frontend);
	}
	.cat-backend {
		background-color: var(--clr-backend);
	}
	.project-image img {
		object-position: center;
		object-fit: contain;
		position: relative;
	}
	.project-head {
		margin-top: 20px;
	}
	.project-details {
		margin-top: 10px;
		min-height: 3rem;
		max-height: 4.25rem;
		overflow: hidden;
	}
	@media screen and (max-width: 50em) {
		.project-details {
			max-height: 3.65rem;
		}
	}
	.project-actions {
		text-align: end;
	}
</style>
