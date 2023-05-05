<script>
	import { contactModal } from '$lib/stores';
</script>

<section class="contact margin-block-primary padding-block-primary" id="contact">
	<div class="container">
		<h1 class="section-heading">Contact me</h1>
		<div class="contact-wrapper bg-blur bg-blur-primary">
			<h2 class="secondary-heading">Get in touch.</h2>
			<div class="contacts">
				<div class="left">
					<button
						on:click={() => {
							$contactModal = true;
						}}
						class="button">Send an Instant Query</button
					>
				</div>
				<div class="center"><p>or</p></div>
				<div class="right">
					<div class="contact-method">
						<a class="primary-link" href="mailto:pritishraj04@gmail.com">pritishraj04@gmail.com</a>
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

<style>
	.contact {
		scroll-margin-top: 5em;
	}
	.contact-wrapper {
		padding: 2.875rem 1.625rem;
		margin-block: 2.5rem;
		border-radius: 10px;
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
