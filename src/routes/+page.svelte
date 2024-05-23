<script>
	import HeroMarquee from '$lib/components/HeroMarquee.svelte';
	import 'iconify-icon';
	import ProjectCarousel from '$lib/components/ProjectCarousel.svelte';
	import ContactSection from '$lib/components/ContactSection.svelte';
	import works from '$lib/works';
	const worksOnHomePage = works.slice(0, 6);
</script>

<svelte:head>
	<title>Pritish - Best Website Developer/Designer in India</title>
</svelte:head>

<main>
	<section class="hero">
		<div class="container">
			<div class="hero-wrapper">
				<p class="text-accent">Hello, I am</p>
				<h1 class="text-name">Pritish Raj.</h1>
				<h2 class="text-work">Software Engineer from New Delhi.</h2>
				<p class="paragraph">
					Learning new Technologies in web development and web automation frameworks. Currently
					working at Appinventiv Technologies Pvt. Ltd. as a Senior Quality Analyst.
				</p>
			</div>
			<div class="showcase bg-blur-primary bg-blur">
				<h3 class="secondary-heading">Technologies i am familiar with</h3>
				<div class="marq">
					<HeroMarquee />
				</div>
			</div>
		</div>
	</section>
	<section class="about margin-block-primary padding-block-primary" id="about">
		<div class="container">
			<h1 class="section-heading">About</h1>
			<div class="about-wrapper">
				<h2 class="secondary-heading">
					Currently Working as a Senior Quality Analyst at Appinventiv Technologies Pvt. Ltd.
				</h2>
				<p class="paragraph">
					Previously I have worked with Creatiosoft Solution Pvt. Ltd. as a software test engineer.
					My primary day to day task at this organisation inclues leading a small group of team as a
					POC for my manager, writing and reviewing test cases and reporting, and pier review issues
					on bug tracking tools. I have worked on multiple poker game web and mobile based projects
					and other various games, webapps and websites.
				</p>
				<p class="paragraph">
					Prior to this role i was assigned a role of FQA Tester at Babel Media Pvt. Ltd.. In this
					role i have worked on multiple projects including AAA games. I also have worked in Agile
					work environment. I am well versed in different testing techniques and tools.Previously, I
					have done web development to build enhanced UI & UX for emerging companies.
				</p>
				<p class="paragraph">
					Before this I have also worked as an intern at Tech4i Pvt. Ltd. Here I got the chance to
					work on web development project which helps students and teacher with a platform to
					connect effortlessy online.
				</p>
				<p class="paragraph">
					I was a freelance web and brand designer and developer, and worked with Polardot.in to
					help multiple companies to build their digital footprint.
				</p>
				<p class="paragraph">
					Want to work together? <a class="primary-link" href="#contact"> Contact me.</a>
				</p>
			</div>
			<div class="history-wrapper">
				<h2 class="secondary-heading">Work History</h2>
				<ul data-role="list">
					<li>
						<h5 class="ternary-heading">
							Senior Quality Analyst - Appinventiv Technologies Pvt. Ltd., Noida
						</h5>
						<p class="paragraph">May 2024 - Currently Working Here</p>
					</li>
					<li>
						<h5 class="ternary-heading">Test Engineer - Creatiosoft Pvt. Ltd., Noida</h5>
						<p class="paragraph">May 2022 - Apr 2024</p>
					</li>
					<li>
						<h5 class="ternary-heading">
							QA Tester - Babel Media Pvt. Ltd. (A Keywords Studios), Gurugram
						</h5>
						<p class="paragraph">Sep 2019 - May 2022</p>
					</li>
					<li>
						<h5 class="ternary-heading">Intern - Tech4i Pvt. Ltd., New Delhi</h5>
						<p class="paragraph">May 2018 - Jun 2018</p>
					</li>
				</ul>
				<h2 class="secondary-heading">Education History</h2>
				<ul data-role="list">
					<li>
						<h5 class="ternary-heading">B. Tech - Amity University</h5>
						<p class="paragraph">Mar 2015 - May 2019</p>
					</li>
					<li>
						<h5 class="ternary-heading">Intermediate - D.A.V. Public School</h5>
						<p class="paragraph">2015</p>
					</li>
					<li>
						<h5 class="ternary-heading">Matriculation - D.A.V. Public School</h5>
						<p class="paragraph">2012</p>
					</li>
				</ul>
			</div>
			<div class="expertise-wrapper">
				<div class="secondary-heading">My Expertise</div>
				<ul data-role="list">
					<li>
						<iconify-icon icon="game-icons:materials-science" style="font-size: 96px;" />
						<h5 class="ternary-heading">Digital Solution</h5>
						<p class="paragraph">Comprehensive package of technologies, tools, and services</p>
					</li>
					<li>
						<iconify-icon icon="material-symbols:ambient-screen-rounded" style="font-size: 96px" />
						<h5 class="ternary-heading">UI-UX Design</h5>
						<p class="paragraph">Creating the visual elements and layout of a website</p>
					</li>
					<li>
						<iconify-icon icon="solar:devices-bold-duotone" style="font-size: 96px" />
						<h5 class="ternary-heading">Web Development</h5>
						<p class="paragraph">Translating these designs into a functional website</p>
					</li>
				</ul>
			</div>
		</div>
	</section>
	<section class="works margin-block-primary padding-block-primary" id="works">
		<div class="container">
			<h1 class="section-heading">My Works</h1>
			<div class="works-wrapper">
				<h2 class="secondary-heading">I've Created these, please have a look</h2>
			</div>
		</div>
		<ProjectCarousel works={worksOnHomePage} />
		<div class="container">
			<div class="work-button" style="text-align: center;">
				<a class="button" href="/works">See All Projects</a>
			</div>
			<div class="featured-project">
				<div class="featured-image">
					<img src="/img/works/food-company.webp" alt="The Only Burger" loading="lazy" />
				</div>
				<div class="feature-details">
					<h2 class="secondary-heading">Featured Project</h2>
					<h3 class="ternary-heading">The Only Burger. A QSR Franchise</h3>
					<p class="paragraph">
						Full Stack project Food Company Website made using Sveltekit, CSS as frontend & ,
						Supabase, MongoDB, Prisma, as backend. This project focuses on quick login/register
						system integration. User can view restaurnat offering on this website without need of
						signup/login. However after susseful login user can order food from this website at
						anywhere near the admin specifed location. This project also features odering and
						account system.
					</p>
					<div class="cta-visit">
						<a href="https://foodfrontendproject.vercel.app/" target="_blank" class="button"
							>Visit Site</a
						>
					</div>
				</div>
			</div>
		</div>
	</section>
	<ContactSection />
</main>

<style>
	.hero-wrapper {
		padding-top: 37.5vh;
		max-width: 489px;
	}
	.text-accent {
		color: var(--clr-accent-400);
		font-size: 1rem;
	}
	.text-name {
		font-size: 3rem;
		font-weight: var(--fw-bold);
		letter-spacing: 4.8px;
	}

	.text-work {
		font-size: 2rem;
		font-weight: var(--fw-semi-bold);
	}
	.showcase {
		margin-top: 8.5625rem;
		padding: 2.125rem 2.5rem;
		border-radius: 32px;
	}
	.showcase h3 {
		font-size: 16px;
	}
	.about,
	.works {
		scroll-margin-top: 5em;
	}
	.about-wrapper .secondary-heading {
		margin-top: 0.7rem;
	}
	.about-wrapper p {
		margin-block: 1rem;
		max-width: 675px;
	}
	.about-wrapper,
	.history-wrapper,
	.expertise-wrapper,
	.works-wrapper {
		margin-block: 2.15rem;
	}
	.history-wrapper .secondary-heading,
	.expertise-wrapper .secondary-heading {
		font-weight: var(--fw-semi-bold);
	}
	.expertise-wrapper ul li {
		border-radius: 10px;
	}
	.history-wrapper ul {
		margin-block: 1rem;
		margin-left: 0.85rem;
	}
	.history-wrapper li {
		position: relative;
		margin-block: 0.7rem;
	}
	.history-wrapper li:not(:last-child)::after {
		content: '';
		left: -0.725rem;
		top: 0.78rem;
		position: absolute;
		width: 0.0625rem;
		height: 115%;
	}
	.history-wrapper li::before {
		content: '';
		left: -0.85rem;
		top: 0.5rem;
		position: absolute;
		width: 5px;
		height: 5px;
		border-radius: 50%;
	}
	.history-wrapper li p {
		margin-block: 0.2rem;
	}

	.expertise-wrapper ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		margin-block: 1rem;
	}
	.expertise-wrapper li {
		text-align: center;
		padding: 3rem 4rem;
	}
	.expertise-wrapper .ternary-heading {
		margin-block: 0.7rem;
	}
	.work-button {
		padding-block: 2rem 3.5rem;
	}
	.featured-project {
		display: flex;
		justify-content: space-between;
		gap: 2.5rem;
	}
	.featured-image {
		border-radius: 10px;
		overflow: hidden;
	}
	.featured-project img {
		object-position: center;
		object-fit: contain;
		position: relative;
	}
	.feature-details {
		max-width: 40%;
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.feature-details .secondary-heading {
		position: relative;
		margin-left: 20px;
	}
	.feature-details .secondary-heading::before {
		content: '';
		position: absolute;
		top: 50%;
		background-color: #656565;
		transform: translateY(-50%);
		left: -118px;
		width: 103px;
		height: 1px;
	}

	@media screen and (max-width: 50em) {
		.text-name {
			font-size: 2.25rem;
		}
		.text-work {
			font-size: 1.5rem;
		}
		.showcase h3 {
			font-size: 14px;
		}
		.history-wrapper li::before {
			top: 0.4375rem;
		}
		.expertise-wrapper ul {
			grid-template-columns: 1fr;
		}
		.featured-project {
			flex-direction: column;
		}
		.feature-details {
			max-width: unset;
		}
	}
</style>
