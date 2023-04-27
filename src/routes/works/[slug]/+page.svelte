<script>
	import works from '$lib/works';
	import { page } from '$app/stores';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import ProjectDetails from '$lib/components/ProjectDetails.svelte';
	import ProjectCarousel from '$lib/components/ProjectCarousel.svelte';

	$: project = works.filter((el) => el.slug === $page.params.slug)[0];

	$: similarProjects = works.filter((el) => el.slug !== $page.params.slug).slice(0, 6);
</script>

<svelte:head>
	<title>{project.title} | Pritish - Best Website Developer/Designer in India</title>
</svelte:head>

<main>
	<section class="site-head">
		<div class="container">
			<div class="site-head-wrapper">
				<h1 class="primary-heading">Project Details</h1>
				<div class="breadcrum">
					<a href="/" class="link">Home</a><span
						><iconify-icon
							icon="material-symbols:chevron-right-rounded"
							style="font-size: 14px;"
						/></span
					>
					<a href="/works" class="link">Works</a><span
						><iconify-icon
							icon="material-symbols:chevron-right-rounded"
							style="font-size: 14px;"
						/></span
					>
					<h5 class="ternary-heading">{project.title}</h5>
				</div>
			</div>
		</div>
	</section>
	<section class="margin-block-primary padding-block-primary">
		<div class="container">
			<div class="project-wrapper">
				<ProjectDetails
					img={project.img}
					title={project.title}
					category={project.category}
					desc={project.desc}
					link={project.link}
					techs={project.tech}
				/>
			</div>
		</div>
	</section>
	<section class="margin-block-primary padding-block-primary">
		<div class="container">
			<div class="project-wrapper">
				<h2 class="secondary-heading">Other Projects</h2>
			</div>
		</div>
		<ProjectCarousel works={similarProjects} />
	</section>
	<ContactSection />
</main>
