<script>
	import ContactSection from '$lib/components/ContactSection.svelte';
	import ProjectDetails from '$lib/components/ProjectDetails.svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	let img = '/img/works/placeholder.png',
		title = '',
		category,
		desc = ``,
		link = '',
		tech = [];
	const categories = $page.data.categories;
	const technologies = $page.data.technologies;
</script>

<svelte:head>
	<title>Add Work | Pritish - Best Website Developer/Designer in India</title>
</svelte:head>

<main>
	<section class="works site-head">
		<div class="container">
			<div class="site-head-wrapper">
				<h1 class="primary-heading">Add Work</h1>
				<p class="paragraph">Add your work details here and preview the changes in Realtime.</p>
				<div class="breadcrum">
					<a href="/" class="link">Home</a><span
						><iconify-icon
							icon="material-symbols:chevron-right-rounded"
							style="font-size: 14px;"
						/></span
					>
					<h5 class="ternary-heading">Works</h5>
				</div>
			</div>
		</div>
	</section>
	<section class="margin-block-primary padding-block-primary">
		<div class="container">
			<div class="add_project-wrapper">
				<form action="?/addWork" method="POST" autocomplete="off" use:enhance>
					<label for="title" class="inp">
						<input
							type="text"
							id="title"
							name="title"
							bind:value={title}
							class="text-field"
							placeholder="&nbsp;"
							required
						/>
						<span class="label">Title</span>
						<span class="focus-bg" />
					</label>
					<label for="slug" class="inp">
						<input
							type="text"
							id="slug"
							name="slug"
							class="text-field"
							placeholder="&nbsp;"
							required
						/>
						<span class="label">Slug</span>
						<span class="focus-bg" />
					</label>
					<label for="img" class="inp">
						<input
							type="text"
							id="img"
							name="img"
							class="text-field"
							placeholder="&nbsp;"
							required
						/>
						<span class="label">Image file name</span>
						<span class="focus-bg" />
					</label>
					<label for="link" class="inp">
						<input
							type="text"
							id="link"
							name="link"
							bind:value={link}
							class="text-field"
							placeholder="&nbsp;"
							required
						/>
						<span class="label">Link</span>
						<span class="focus-bg" />
					</label>
					<label for="defaultOrder" class="inp">
						<input
							type="number"
							min="0"
							id="defaultOrder"
							name="defaultOrder"
							class="text-field"
							placeholder="&nbsp;"
							required
						/>
						<span class="label">Default Order</span>
						<span class="focus-bg" />
					</label>

					<select class="select" name="category" id="category" bind:value={category}>
						<option value="" disabled selected>Select your Category</option>
						{#each categories as category}
							<option value={category.name}>{category.name}</option>
						{/each}
					</select>

					<fieldset class="fieldset full-width">
						<legend>Choose technologies used:</legend>
						{#each technologies as technology}
							<div class="field">
								<input
									type="checkbox"
									name="technologies"
									bind:group={tech}
									value={technology.name}
									id={technology.name}
								/><label for={technology.name}>{technology.name}</label>
							</div>
						{/each}
					</fieldset>
					<label for="desc" class="inp full-width">
						<textarea
							name="desc"
							id="desc"
							class="text-field"
							bind:value={desc}
							rows="3"
							placeholder="&nbsp;"
							required
						/>
						<span class="label">Description(HTML)</span>
						<span class="focus-bg" />
					</label>
					<div class="action full-width">
						<button class="button" type="submit" id="submit">
							Send <iconify-icon icon="mdi:email-arrow-right" style="font-size: 32px" />
						</button>
					</div>
				</form>
			</div>
		</div>
	</section>
	<section class="margin-block-primary padding-block-primary">
		<div class="container">
			<div class="heading">
				<h3 class="ternary-heading">Preview:</h3>
				<p class="paragraph">
					Fill the above form and view the project details page outlook in Realtime.
				</p>
			</div>
			<div class="project-wrapper">
				<ProjectDetails img="placeholder.png" {title} {category} {desc} {link} techs={tech} />
			</div>
		</div>
	</section>
	<ContactSection />
</main>

<style>
	.heading {
		margin-bottom: 20px;
	}
	form {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.5rem;
	}
	textarea {
		max-width: 100%;
		resize: vertical;
	}
	@media screen and (max-width: 50em) {
		form {
			grid-template-columns: 1fr;
		}
	}
	.full-width {
		grid-column: 1 / -1;
	}
	.action button {
		display: flex;
		gap: 0.5rem;
		align-items: center;
		padding-block: 0;
		float: right;
	}
</style>
