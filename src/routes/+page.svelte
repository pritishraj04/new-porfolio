<script>
	import HeroMarquee from '$lib/components/HeroMarquee.svelte';
</script>

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
	<section class="about">
		<div class="container">
			<div class="about-wrapper">
				<h1 class="section-heading">About</h1>
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
				<ul>
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
				<ul>
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
	}
	.about {
		margin-block: 30px;
		padding-block: 50px;
	}
	.about-wrapper .secondary-heading {
		margin-top: 0.7rem;
	}
	.about-wrapper p {
		margin-block: 1rem;
		max-width: 675px;
	}
	.history-wrapper .secondary-heading {
		font-weight: var(--fw-semi-bold);
	}
	.history-wrapper ul {
		margin-block: 1rem;
		margin-left: 0.85rem;
	}
	.history-wrapper li {
		position: relative;
		margin-block: 0.5rem;
	}
	.history-wrapper li:not(:last-child)::before {
		content: '';
		position: absolute;
		top: 15.4px;
		left: -13.9px;
		background-color: #656565;
		width: 2px;
		height: 110%;
	}
	.history-wrapper li p {
		margin-block: 0.2rem;
	}
</style>
