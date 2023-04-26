<script>
	import 'iconify-icon';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import works from '$lib/works';
	console.log(works);
</script>

<svelte:head>
	<title>Works | Pritish - Best Website Developer/Designer in India</title>
</svelte:head>

<main>
	<section class="works site-head">
		<div class="container">
			<div class="site-head-wrapper">
				<h1 class="primary-heading">Works</h1>
				<p class="paragraph">
					Here are some of the the projects i've made using some very interesting techonologies.
					Apart from these listed projects i've also worked on multiple projects as a QA Engineer
					with as big as 40 members team. I've also managed group of 5-8 members in my team as a
					POC.
				</p>
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
	<section class="work margin-block-primary padding-block-primary">
		<div class="container">
			<div class="work-wrapper">
				<div class="filters">
					<input type="text" class="text-field" placeholder="Type to start searching..." />
					<select class="select" name="filter" id="filter"
						><option value="all">All</option><option value="frontend">Frontend</option><option
							value="fullstack">Fullstack</option
						></select
					>
					<select class="select" name="shorting" id="shorting"
						><option value="relevance">Relevance</option><option value="newestFirst"
							>Newest First</option
						></select
					>
				</div>
				<div class="projects">
					{#each works as work}
						<ProjectCard
							projectImg={`./img/works/${work.img}`}
							projectName={work.title}
							projectDesc={work.desc}
							projectCategory={work.category}
							projectLink={`/works/${work.slug}`}
						/>
					{/each}
				</div>
			</div>
		</div>
	</section>
	<ContactSection />
</main>

<style>
	.filters {
		display: grid;
		grid-template-columns: 2fr 1fr 1fr;
		gap: 21px;
		margin-bottom: 35px;
	}
	@media screen and (max-width: 767px) {
		.filters {
			grid-template-columns: 1fr;
		}
	}
	.projects {
		display: grid;
		gap: 21px;
		grid-template-columns: repeat(4, 1fr);
	}
	@media screen and (max-width: 991px) {
		.projects {
			grid-template-columns: repeat(3, 1fr);
		}
	}
	@media screen and (max-width: 767px) {
		.projects {
			grid-template-columns: repeat(2, 1fr);
		}
	}
	@media screen and (max-width: 520px) {
		.projects {
			grid-template-columns: 1fr;
		}
	}
</style>
