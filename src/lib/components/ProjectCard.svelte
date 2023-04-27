<script>
	export let projectImg,
		projectCategory,
		projectName,
		projectDesc,
		projectLink = '/';
</script>

<div class="project-card bg-blur-primary">
	<div class="project-image">
		<img src={projectImg} alt={`Image for ${projectName}`} loading="lazy" />
		<button class={'button project-category cat-' + projectCategory}>{projectCategory}</button>
	</div>
	<div class="project-head">
		<h2 class="ternary-heading">{projectName}</h2>
	</div>
	<div class="project-details">
		<p class="paragraph">{projectDesc.slice(0, 140)}...</p>
	</div>
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
		min-height: 5rem;
	}
	.project-actions {
		text-align: end;
	}
</style>
