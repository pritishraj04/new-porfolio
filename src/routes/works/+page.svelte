<script>
	import 'iconify-icon';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import works from '$lib/works';
	import { selectedCategory } from '$lib/stores';

	let isFocus = false;
	let searchText = '';
	$selectedCategory = 'all';
	let result = works;
	const searchWorks = (query) => {
		$selectedCategory = 'all';
		result = works.filter(
			(el) =>
				el.title.toLowerCase().includes(query.toLowerCase()) ||
				el.category.toLowerCase().includes(query.toLowerCase())
		);
	};
	$: switch ($selectedCategory) {
		case 'frontend':
			searchText = '';
			result = works.filter((el) => el.category === 'frontend');
			break;
		case 'fullstack':
			searchText = '';
			result = works.filter((el) => el.category === 'fullstack');
			break;
		default:
			searchText = '';
			result = works;
			break;
	}
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
					<input
						type="text"
						class="text-field"
						placeholder="Type to start searching..."
						on:focus={() => {
							isFocus = true;
						}}
						on:blur={() => {
							isFocus = false;
						}}
						bind:value={searchText}
						on:keyup={() => searchWorks(searchText)}
					/>
					<select class="select" name="filter" id="filter" bind:value={$selectedCategory}
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
					{#each result as work}
						<ProjectCard
							projectImg={`./img/works/${work.img}`}
							projectName={work.title}
							projectDesc={work.desc}
							projectCategory={work.category}
							projectLink={`/works/${work.slug}`}
						/>
					{:else}
						<div class="no-project bg-blur bg-blur-primary">
							<h2 class="ternary-heading">No items found. Try removing filters.</h2>
							<p class="paragraph">Or click here:</p>
							<a href="/" class="primary-link">Home</a>
						</div>
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
	.no-project {
		text-align: center;
		padding: 20px 10px;
		border-radius: 10px;
		display: flex;
		flex-direction: column;
		gap: 0.6rem;
		grid-column: 1 / -1;
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
