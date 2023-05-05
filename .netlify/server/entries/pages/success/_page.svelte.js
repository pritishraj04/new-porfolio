import { c as create_ssr_component, v as validate_component } from "../../../chunks/index2.js";
import { C as ContactSection } from "../../../chunks/ContactSection.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".success-wrapper.svelte-vvifnq div.svelte-vvifnq{display:flex;flex-direction:column;gap:0.6rem;text-align:center;padding:0.8rem 1rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1r7lm86_START -->${$$result.title = `<title>Success | Pritish - Best Website Developer/Designer in India</title>`, ""}<!-- HEAD_svelte-1r7lm86_END -->`, ""}

<main><section class="site-head"><div class="container"><div class="site-head-wrapper"><h1 class="primary-heading">Success</h1>
				<div class="breadcrum"><a href="/" class="link">Home</a><span><iconify-icon icon="material-symbols:chevron-right-rounded" style="font-size: 14px;"></iconify-icon></span>
					<h5 class="ternary-heading">Form submitted successfully!</h5></div></div></div></section>
	<section class="success margin-block-primary padding-block-primary"><div class="container"><div class="success-wrapper svelte-vvifnq"><div class="svelte-vvifnq"><h3 class="ternary-heading">Message submited</h3>
					<p class="paragraph">Your message has been successfully submited. Please wait for a few hours for the
						response.
					</p>
					<p class="paragraph">Meanwhile you can view some of my <a class="primary-link" href="/works">Works</a></p></div></div></div></section>
	${validate_component(ContactSection, "ContactSection").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
