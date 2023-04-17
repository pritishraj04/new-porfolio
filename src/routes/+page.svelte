<script>
	import HeroMarquee from '$lib/components/HeroMarquee.svelte';
	import 'iconify-icon';
	import Works from '$lib/components/Works.svelte';
	import ProjectCard from '../lib/components/ProjectCard.svelte';
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
					Right now I'm looking for new opportunites in Test Automation and Web
					development.Currently working at Creatiosoft Pvt. Ltd. as a Test Engineer.
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
					Currently Working as Test Engineer at Creatiosoft Pvt. Ltd.
				</h2>
				<p class="paragraph">
					Prior to this role i was assigned a role of FQA Tester at Babel Media Pvt. Ltd.. In this
					role i have worked on multiple projects including AAA games. I also have worked in Agile
					work environment. I am well versed in different testing techniques and tools.Previously, I
					have done web development to build enhanced UI & UX for emerging companies. I was a
					freelance web and brand designer and developer, and worked with Polardot.in to help
					multiple companies to build their digital footprint. I was also an intern at Tech4i Pvt.
					Ltd.
				</p>
				<p class="paragraph">
					Want to work together? <a class="primary-link" href="#contact"> Contact me.</a>
				</p>
			</div>
			<div class="history-wrapper">
				<h2 class="secondary-heading">Work History</h2>
				<ul data-role="list">
					<li>
						<h5 class="ternary-heading">Test Engineer - Creatiosoft Pvt. Ltd., Noida</h5>
						<p class="paragraph">May 2022 - Currently Working Here</p>
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
						<iconify-icon icon="icons8:idea" style="font-size: 96px" />
						<h5 class="ternary-heading">Digital Products</h5>
						<p class="paragraph">
							Web design encompasses many different skills and diciplines in the production of all
							web.
						</p>
					</li>
					<li>
						<iconify-icon icon="tabler:device-tablet" style="font-size: 96px" />
						<h5 class="ternary-heading">UI-UX Design</h5>
						<p class="paragraph">
							Web design encompasses many different skills and diciplines in the production of all
							web.
						</p>
					</li>
					<li>
						<iconify-icon icon="iconoir:dev-mode-laptop" style="font-size: 96px" />
						<h5 class="ternary-heading">Web Development</h5>
						<p class="paragraph">
							Web design encompasses many different skills and diciplines in the production of all
							web.
						</p>
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
		<Works />
		<div class="container">
			<div class="work-button" style="text-align: center;">
				<a class="button" href="/projects">See All Projects</a>
			</div>
			<div class="featured-project">
				<ProjectCard
					src="/img/works/svelte_menu.webp"
					projectName="Svelte Menu"
					projectType="Frontend"
				/>
				<div class="feature-details">
					<h2 class="secondary-heading">Featured Project</h2>
					<h3 class="ternary-heading">Polardot.in A design company website</h3>
					<p class="paragraph">
						Prior to this role i was assigned a role of FQA Tester at Babel Media Pvt. Ltd.. In this
						role i have worked on multiple projects including AAA games. I also have worked in Agile
						work environment. I am well versed in different testing techniques and tools.Previously,
						I have done web development to build enhanced UI & UX for emerging companies. I was a
						freelance web and brand designer and developer, and worked with Polardot.in to help
						multiple companies to build their digital footprint. I was also an intern at Tech4i Pvt.
						Ltd.
					</p>
					<div class="cta-visit">
						<button class="button">Visit Site</button>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="contact margin-block-primary padding-block-primary" id="contact">
		<div class="container">
			<h1 class="section-heading">Contact me</h1>
			<div class="contact-wrapper">
				<h2 class="secondary-heading">Get in touch.</h2>
				<div class="contacts">
					<div class="left">
						<button class="button">Send an Instant Query</button>
					</div>
					<div class="center"><p>or</p></div>
					<div class="right">
						<div class="contact-method">
							<a class="primary-link" href="mailto:pritishraj04@gmail.com">pritishraj04@gmail.com</a
							>
						</div>
						<div class="contact-method">
							<a class="primary-link" href="tel:+919097785207">+91 9097785207</a>
						</div>
						<div class="contact-method">
							<a class="primary-link" href="https://github.com/pritishraj04" target="blank"
								>github.com/pritishraj04</a
							>
						</div>
						<div class="contact-method">
							<a class="primary-link" href="https://linkedin.com/in/pritishraj04"
								>linkedin.com/in/pritishraj04</a
							>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</main>

<style>
	/* .hero {
		height: 100vh;
		height: 100dvh;
	} */
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
	.works,
	.contact {
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
	.feature-details {
		max-width: 50%;
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
	.feature-details button {
		padding-block: 0;
	}
	.contact-wrapper {
		padding: 2.875rem 1.625rem;
		margin-block: 2.5rem;
	}
	#contact {
		margin-bottom: -350px;
	}
	.contacts {
		display: flex;
		justify-content: space-evenly;
		align-items: center;
		margin-top: 20px;
		gap: 1.5rem;
		overflow: hidden;
	}
	.contacts .right {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}
	.contact-wrapper .button {
		padding-block: 0;
	}
	/* .contact-wrapper .left::after {
		position: absolute;
		content: 'or';
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		margin-top: 20px;
		padding: 10px;
	}*/
	.contact .center {
		position: relative;
	}
	.center p::before,
	.center p::after {
		position: absolute;
		content: '';
		top: 50%;
		left: 50%;
		width: 0.0625rem;
		height: 5rem;
	}
	.center p::before {
		transform: translate(-50%, -120%);
	}
	.center p::after {
		transform: translate(-50%, 20%);
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
		.contacts {
			flex-direction: column;
			gap: 4rem;
		}
		.center p::before {
			transform: translate(-4rem, -50%) rotate(90deg);
		}
		.center p::after {
			transform: translate(4rem, -50%) rotate(90deg);
		}
	}
</style>
