import { c as create_ssr_component, b as subscribe } from "./index2.js";
import { a as contactModal } from "./stores.js";
const ContactSection_svelte_svelte_type_style_lang = "";
const css = {
  code: ".contact.svelte-1xshm78.svelte-1xshm78{scroll-margin-top:5em}.contact-wrapper.svelte-1xshm78.svelte-1xshm78{padding:2.875rem 1.625rem;margin-block:2.5rem;border-radius:10px}#contact.svelte-1xshm78.svelte-1xshm78{margin-bottom:-350px}.contacts.svelte-1xshm78.svelte-1xshm78{display:flex;justify-content:space-evenly;align-items:center;margin-top:20px;gap:1.5rem;overflow:hidden}.contacts.svelte-1xshm78 .right.svelte-1xshm78{display:flex;flex-direction:column;gap:20px}.contact-wrapper.svelte-1xshm78 .button.svelte-1xshm78{padding-block:0}.contact.svelte-1xshm78 .center.svelte-1xshm78{position:relative}.center.svelte-1xshm78 p.svelte-1xshm78::before,.center.svelte-1xshm78 p.svelte-1xshm78::after{position:absolute;content:'';top:50%;left:50%;width:0.0625rem;height:5rem}.center.svelte-1xshm78 p.svelte-1xshm78::before{transform:translate(-50%, -120%)}.center.svelte-1xshm78 p.svelte-1xshm78::after{transform:translate(-50%, 20%)}@media screen and (max-width: 50em){.contacts.svelte-1xshm78.svelte-1xshm78{flex-direction:column;gap:4rem}.center.svelte-1xshm78 p.svelte-1xshm78::before{transform:translate(-4rem, -50%) rotate(90deg)}.center.svelte-1xshm78 p.svelte-1xshm78::after{transform:translate(4rem, -50%) rotate(90deg)}}",
  map: null
};
const ContactSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_contactModal;
  $$unsubscribe_contactModal = subscribe(contactModal, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_contactModal();
  return `<section class="contact margin-block-primary padding-block-primary svelte-1xshm78" id="contact"><div class="container"><h1 class="section-heading">Contact me</h1>
		<div class="contact-wrapper bg-blur bg-blur-primary svelte-1xshm78"><h2 class="secondary-heading">Get in touch.</h2>
			<div class="contacts svelte-1xshm78"><div class="left"><button class="button svelte-1xshm78">Send an Instant Query</button></div>
				<div class="center svelte-1xshm78"><p class="svelte-1xshm78">or</p></div>
				<div class="right svelte-1xshm78"><div class="contact-method"><a class="primary-link" href="mailto:pritishraj04@gmail.com">pritishraj04@gmail.com</a></div>
					<div class="contact-method"><a class="primary-link" href="tel:+919097785207">+91 9097785207</a></div>
					<div class="contact-method"><a class="primary-link" href="https://github.com/pritishraj04" target="blank">github.com/pritishraj04</a></div>
					<div class="contact-method"><a class="primary-link" href="https://linkedin.com/in/pritishraj04">linkedin.com/in/pritishraj04</a></div></div></div></div></div>
</section>`;
});
export {
  ContactSection as C
};
