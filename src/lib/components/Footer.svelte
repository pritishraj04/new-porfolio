<script>
	import Logo from '$lib/components/Logo.svelte';
	import 'iconify-icon';
	import { currentTheme } from '$lib/stores';
</script>

<footer class="footer">
	<div class="container">
		<div class="footer-wrapper">
			<div class="logo"><a href="/" aria-label="Home"><Logo theme={$currentTheme} /></a></div>
			<nav class="footer-nav">
				<div class="footer-col col0">
					<div class="col-options">
						<a class="link" href="/" aria-label="Instagram"
							><iconify-icon icon="mdi:instagram" style="font-size: 24px" /></a
						>
						<a class="link" aria-label="Linkedin" href="/"
							><iconify-icon icon="mdi:linkedin" style="font-size: 24px" /></a
						>
						<a class="link" aria-label="Github" href="/"
							><iconify-icon icon="mdi:git" style="font-size: 24px" /></a
						>
					</div>
				</div>
				<div class="footer-col col1">
					<h3 class="col-header ternary-heading">Links</h3>
					<div class="col-options">
						<a class="link" href="/">Home</a>
						<a class="link" href="#about">About</a>
						<a class="link" href="#works">Works</a>
						<a class="link" href="#contact">Contact Me</a>
					</div>
				</div>
				<div class="footer-col col2">
					<h3 class="col-header ternary-heading">Contact</h3>
					<div class="col-options">
						<a class="link" href="mailto:pritishraj04@gmail.com">pritishraj04@gmail.com</a>
						<a class="link" href="tel:+919097785207">+91 9097785207</a>
						<a class="link" href="https://github.com/pritishraj04" target="blank"
							>github.com/pritishraj04</a
						>
						<a class="link" href="https://linkedin.com/in/pritishraj04"
							>linkedin.com/in/pritishraj04</a
						>
					</div>
				</div>
				<div class="footer-col col3">
					<h3 class="col-header ternary-heading">Address</h3>
					<div class="col-options">
						<address class="paragraph">
							Written by <a class="primary-link" href="mailto:pritishraj04@gmail.com">Pritish Raj</a
							>.<br />
							Visit us at:<br />
							Kankarbagh<br />
							Patna, Bihar<br />
							India
						</address>
					</div>
				</div>
			</nav>
			<div class="sign">
				<p class="paragraph">Designed and Developed by Pritish Raj</p>
			</div>
		</div>
	</div>
</footer>

<style>
	.footer {
		padding-top: 25rem;
	}
	.logo {
		display: flex;
		justify-content: start;
	}
	.footer-nav {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		margin-top: 1.5rem;
	}
	.footer-col .col-options {
		display: flex;
		margin-top: 0.75rem;
		flex-direction: column;
		gap: 0.375rem;
	}
	.col0 .col-options {
		flex-direction: row;
		gap: 2.5rem;
	}
	.sign {
		margin-top: 2.25rem;
		padding-block: 1rem;
		text-align: center;
	}
	@media screen and (max-width: 50em) {
		.footer-nav {
			grid-template-columns: 1fr;
		}
	}
</style>
