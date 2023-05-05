<script>
	import Modal from '$lib/components/Modal.svelte';
	import { contactModal } from '$lib/stores';
</script>

<Modal
	showModal={$contactModal}
	closeModal={() => {
		$contactModal = false;
	}}
	heading="Get in touch!"
>
	<form
		name="contact"
		autocomplete="off"
		action="/success"
		method="POST"
		data-netlify="true"
		data-netlify-honeypot="bot-field"
	>
		<input type="hidden" name="form-name" value="contact" />
		<p hidden>
			<label>
				Don't fill this out: <input name="bot-field" />
			</label>
		</p>
		<label for="fullname" class="inp full-width">
			<input type="text" id="fullname" name="fullname" class="text-field" placeholder="&nbsp;" />
			<span class="label">Full Name</span>
			<span class="focus-bg" />
		</label>
		<label for="email" class="inp">
			<input type="email" id="email" name="email" class="text-field" placeholder="&nbsp;" />
			<span class="label">Email</span>
			<span class="focus-bg" />
		</label>
		<label for="phone" class="inp">
			<input type="text" id="phone" name="phone" class="text-field" placeholder="&nbsp;" />
			<span class="label">Phone Number</span>
			<span class="focus-bg" />
		</label>
		<label for="subject" class="inp full-width">
			<input type="text" id="subject" name="subject" class="text-field" placeholder="&nbsp;" />
			<span class="label">Subject</span>
			<span class="focus-bg" />
		</label>
		<label for="message" class="inp full-width">
			<textarea name="message" id="message" class="text-field" rows="3" placeholder="&nbsp;" />
			<span class="label">Message</span>
			<span class="focus-bg" />
		</label>
		<div class="action full-width">
			<button class="button" type="submit" id="submit">
				Send <iconify-icon icon="mdi:email-arrow-right" style="font-size: 32px" />
			</button>
		</div>
	</form>
</Modal>

<style>
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
