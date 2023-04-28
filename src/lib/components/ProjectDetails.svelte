<script>
	export let img, title, category, desc, techs, link;
</script>

<div class="project">
	<div class="project-image">
		<img src={`/img/works/${img}`} alt={`Image for ${title}`} />
	</div>
	<div class="project-details">
		<h2 class="secondary-heading">{title}</h2>
		<h3 class={'ternary-heading cat-' + category}>{category}</h3>
		<p class="paragraph">
			{desc}
		</p>
		<div class="technologies bg-blur-primary bg-blur">
			<h3 class="ternary-heading">Techonologies Used:</h3>
			<ul>
				{#each techs as tech}
					<li style={`list-style-image: url(/img/svgs/${tech.toLowerCase()}.svg);`}>
						<p class="paragraph">{tech}</p>
					</li>
				{/each}
			</ul>
		</div>
		<div class="cta-visit">
			<a href={link} target="_blank" class="button">View Project</a>
		</div>
	</div>
</div>

<style>
	.project {
		display: flex;
		justify-content: space-between;
		gap: 2.5rem;
	}
	.project-image {
		overflow: hidden;
	}
	.project img {
		object-position: center;
		object-fit: contain;
		border-radius: 10px;
	}
	.project-details {
		min-width: 45%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.project-details .secondary-heading {
		position: relative;
		/* margin-left: 20px; */
	}
	/* .project-details .secondary-heading::before {
		content: '';
		position: absolute;
		top: 50%;
		background-color: #656565;
		transform: translateY(-50%);
		left: -118px;
		width: 103px;
		height: 1px;
	} */
	.project-details h3 {
		text-transform: capitalize;
		padding: 2px 5px;
	}
	.cat-fullstack {
		background-color: var(--clr-fullstack);
	}
	.cat-frontend {
		background-color: var(--clr-frontend);
	}
	.technologies {
		padding: 10px 5px;
		border-radius: 10px;
	}
	.technologies ul {
		list-style: circle;
		margin-left: 1.5rem;
		display: flex;
		gap: 0 2.5rem;
		flex-wrap: wrap;
	}
	.technologies ul li::marker {
		font-size: clamp(1.6rem, 1.8vw, 2.4rem);
	}
	@media screen and (max-width: 50em) {
		.project {
			flex-direction: column;
		}
		.project-details {
			max-width: unset;
		}
	}
</style>
