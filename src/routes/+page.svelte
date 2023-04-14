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
</main>

<style>
	.hero {
		height: 100vh;
		height: 100dvh;
	}
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
</style>
