import { c as create_ssr_component, a as add_attribute, b as subscribe, e as escape, n as null_to_empty, v as validate_component, d as each, f as now, l as loop } from "../../chunks/index2.js";
import "iconify-icon";
import { c as currentTheme, a as contactModal } from "../../chunks/stores.js";
import { w as writable } from "../../chunks/index.js";
const Logo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { theme } = $$props;
  if ($$props.theme === void 0 && $$bindings.theme && theme !== void 0)
    $$bindings.theme(theme);
  return `<svg width="115" height="32" viewBox="0 0 115 32" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="16" cy="16" r="16"${add_attribute("fill", theme === "light" ? "#a0a0a0" : "#3d3d3d", 0)}></circle><path d="M11.992 25V8.2H19.264C20.768 8.2 22.064 8.448 23.152 8.944C24.24 9.424 25.08 10.12 25.672 11.032C26.264 11.944 26.56 13.032 26.56 14.296C26.56 15.544 26.264 16.624 25.672 17.536C25.08 18.448 24.24 19.152 23.152 19.648C22.064 20.128 20.768 20.368 19.264 20.368H14.152L15.88 18.616V25H11.992ZM15.88 19.048L14.152 17.2H19.048C20.248 17.2 21.144 16.944 21.736 16.432C22.328 15.92 22.624 15.208 22.624 14.296C22.624 13.368 22.328 12.648 21.736 12.136C21.144 11.624 20.248 11.368 19.048 11.368H14.152L15.88 9.52V19.048ZM31.4483 25V12.088H35.0243V15.736L34.5203 14.68C34.9043 13.768 35.5203 13.08 36.3683 12.616C37.2163 12.136 38.2483 11.896 39.4643 11.896V15.352C39.3043 15.336 39.1603 15.328 39.0323 15.328C38.9043 15.312 38.7683 15.304 38.6243 15.304C37.6003 15.304 36.7683 15.6 36.1283 16.192C35.5043 16.768 35.1923 17.672 35.1923 18.904V25H31.4483ZM44.1139 25V12.088H47.8579V25H44.1139ZM45.9859 10.288C45.2979 10.288 44.7379 10.088 44.3059 9.688C43.8739 9.288 43.6579 8.792 43.6579 8.2C43.6579 7.608 43.8739 7.112 44.3059 6.712C44.7379 6.312 45.2979 6.112 45.9859 6.112C46.6739 6.112 47.2339 6.304 47.6659 6.688C48.0979 7.056 48.3139 7.536 48.3139 8.128C48.3139 8.752 48.0979 9.272 47.6659 9.688C47.2499 10.088 46.6899 10.288 45.9859 10.288ZM59.0127 25.192C57.4927 25.192 56.3087 24.808 55.4607 24.04C54.6127 23.256 54.1887 22.096 54.1887 20.56V9.232H57.9327V20.512C57.9327 21.056 58.0767 21.48 58.3647 21.784C58.6527 22.072 59.0447 22.216 59.5407 22.216C60.1327 22.216 60.6367 22.056 61.0527 21.736L62.0607 24.376C61.6767 24.648 61.2127 24.856 60.6687 25C60.1407 25.128 59.5887 25.192 59.0127 25.192ZM52.1967 15.256V12.376H61.1487V15.256H52.1967ZM66.5624 25V12.088H70.3064V25H66.5624ZM68.4344 10.288C67.7464 10.288 67.1864 10.088 66.7544 9.688C66.3224 9.288 66.1064 8.792 66.1064 8.2C66.1064 7.608 66.3224 7.112 66.7544 6.712C67.1864 6.312 67.7464 6.112 68.4344 6.112C69.1224 6.112 69.6824 6.304 70.1144 6.688C70.5464 7.056 70.7624 7.536 70.7624 8.128C70.7624 8.752 70.5464 9.272 70.1144 9.688C69.6984 10.088 69.1384 10.288 68.4344 10.288ZM80.5251 25.192C79.4211 25.192 78.3571 25.064 77.3331 24.808C76.3251 24.536 75.5251 24.2 74.9331 23.8L76.1811 21.112C76.7731 21.48 77.4691 21.784 78.2691 22.024C79.0851 22.248 79.8851 22.36 80.6691 22.36C81.5331 22.36 82.1411 22.256 82.4931 22.048C82.8611 21.84 83.0451 21.552 83.0451 21.184C83.0451 20.88 82.9011 20.656 82.6131 20.512C82.3411 20.352 81.9731 20.232 81.5091 20.152C81.0451 20.072 80.5331 19.992 79.9731 19.912C79.4291 19.832 78.8771 19.728 78.3171 19.6C77.7571 19.456 77.2451 19.248 76.7811 18.976C76.3171 18.704 75.9411 18.336 75.6531 17.872C75.3811 17.408 75.2451 16.808 75.2451 16.072C75.2451 15.256 75.4771 14.536 75.9411 13.912C76.4211 13.288 77.1091 12.8 78.0051 12.448C78.9011 12.08 79.9731 11.896 81.2211 11.896C82.1011 11.896 82.9971 11.992 83.9091 12.184C84.8211 12.376 85.5811 12.656 86.1891 13.024L84.9411 15.688C84.3171 15.32 83.6851 15.072 83.0451 14.944C82.4211 14.8 81.8131 14.728 81.2211 14.728C80.3891 14.728 79.7811 14.84 79.3971 15.064C79.0131 15.288 78.8211 15.576 78.8211 15.928C78.8211 16.248 78.9571 16.488 79.2291 16.648C79.5171 16.808 79.8931 16.936 80.3571 17.032C80.8211 17.128 81.3251 17.216 81.8691 17.296C82.4291 17.36 82.9891 17.464 83.5491 17.608C84.1091 17.752 84.6131 17.96 85.0611 18.232C85.5251 18.488 85.9011 18.848 86.1891 19.312C86.4771 19.76 86.6211 20.352 86.6211 21.088C86.6211 21.888 86.3811 22.6 85.9011 23.224C85.4211 23.832 84.7251 24.312 83.8131 24.664C82.9171 25.016 81.8211 25.192 80.5251 25.192ZM99.1791 11.896C100.203 11.896 101.115 12.104 101.915 12.52C102.731 12.92 103.371 13.544 103.835 14.392C104.299 15.224 104.531 16.296 104.531 17.608V25H100.787V18.184C100.787 17.144 100.555 16.376 100.091 15.88C99.6431 15.384 99.0031 15.136 98.1711 15.136C97.5791 15.136 97.0431 15.264 96.5631 15.52C96.0991 15.76 95.7311 16.136 95.4591 16.648C95.2031 17.16 95.0751 17.816 95.0751 18.616V25H91.3311V7.192H95.0751V15.664L94.2351 14.584C94.6991 13.72 95.3631 13.056 96.2271 12.592C97.0911 12.128 98.0751 11.896 99.1791 11.896ZM111.741 25.192C111.101 25.192 110.549 24.976 110.085 24.544C109.637 24.096 109.413 23.528 109.413 22.84C109.413 22.152 109.637 21.6 110.085 21.184C110.549 20.752 111.101 20.536 111.741 20.536C112.397 20.536 112.949 20.752 113.397 21.184C113.845 21.6 114.069 22.152 114.069 22.84C114.069 23.528 113.845 24.096 113.397 24.544C112.949 24.976 112.397 25.192 111.741 25.192Z"${add_attribute("fill", theme === "light" ? "#000" : "#fff", 0)}></path></svg>`;
});
const Header_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "header.svelte-kia17f.svelte-kia17f{position:fixed;width:100%}.on-top.svelte-kia17f.svelte-kia17f{z-index:99}header.svelte-kia17f .container.svelte-kia17f{display:flex;justify-content:space-between;align-items:center;padding-top:2.844rem;padding-bottom:1.5rem;transition:padding-top 300ms}.flex.svelte-kia17f.svelte-kia17f{display:flex;gap:2.5rem;align-items:center}nav.svelte-kia17f ul.svelte-kia17f{display:flex;align-items:center;gap:2.5rem}.hamburger-button.svelte-kia17f.svelte-kia17f{display:none;user-select:none}.theme-button.svelte-kia17f.svelte-kia17f{user-select:none}.theme-button.svelte-kia17f.svelte-kia17f:hover{filter:none}@media screen and (max-width: 680px){.flex.svelte-kia17f.svelte-kia17f{gap:0.7rem}.hamburger-button.svelte-kia17f.svelte-kia17f{display:block}nav.svelte-kia17f ul.svelte-kia17f{gap:0.7rem}.navigation.svelte-kia17f.svelte-kia17f{flex-direction:column;position:absolute;height:100vh;height:100dvh;gap:1.3rem;padding-top:1.3rem;top:90px;left:0;width:100%;transition:height 300ms, padding 500ms}.nav-hidden.svelte-kia17f.svelte-kia17f{height:0;overflow:hidden;top:90px;padding:0;transition:height 300ms, padding 500ms}}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentTheme, $$unsubscribe_currentTheme;
  $$unsubscribe_currentTheme = subscribe(currentTheme, (value) => $currentTheme = value);
  const themes = [
    {
      name: "light",
      icon: "/img/svgs/moon-sunny.svg"
    },
    {
      name: "dark",
      icon: "/img/svgs/sunny-moon.svg"
    }
  ];
  $$result.css.add(css$3);
  $$unsubscribe_currentTheme();
  return `

<header class="${escape(null_to_empty(""), true) + " svelte-kia17f"}"><div class="container svelte-kia17f"${add_attribute("style", "", 0)}><div class="logo"><a href="/" aria-label="Home">${validate_component(Logo, "Logo").$$render($$result, { theme: $currentTheme }, {}, {})}</a></div>
		<div class="flex svelte-kia17f"><nav class="svelte-kia17f"><ul data-role="list" class="svelte-kia17f"><li class="${escape(
    null_to_empty("flex navigation nav-hidden"),
    true
  ) + " svelte-kia17f"}"><div><a class="link" href="/#about">About</a></div>
						<div><a class="link" href="/#works">Works</a></div></li>
					<li><a class="button" href="#contact">Contact me</a></li>
					<li>${each(themes, (theme) => {
    return `${$currentTheme !== theme.name ? `<button class="button theme-button svelte-kia17f" data-type="ghost"${add_attribute("aria-label", `Theme button ${theme.name}`, 0)}><img aria-hidden="true"${add_attribute("src", theme.icon, 0)} alt="" style="width: 32px;"></button>` : ``}`;
  })}</li></ul></nav>
			<button class="hamburger-button button svelte-kia17f" data-type="ghost"${add_attribute("aria-label", `Hamburger Menu button ${"close"}`, 0)}><iconify-icon${add_attribute(
    "icon",
    "line-md:close-to-menu-alt-transition",
    0
  )} style="font-size: 32px"></iconify-icon></button></div></div>
</header>`;
});
const Footer_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".footer.svelte-ty3dkl.svelte-ty3dkl{padding-top:25rem}.logo.svelte-ty3dkl.svelte-ty3dkl{display:flex;justify-content:start}.footer-nav.svelte-ty3dkl.svelte-ty3dkl{display:grid;grid-template-columns:repeat(4, 1fr);gap:2rem;margin-top:1.5rem}.footer-col.svelte-ty3dkl .col-options.svelte-ty3dkl{display:flex;margin-top:0.75rem;flex-direction:column;gap:0.375rem}.col0.svelte-ty3dkl .col-options.svelte-ty3dkl{flex-direction:row;gap:2.5rem}.sign.svelte-ty3dkl.svelte-ty3dkl{margin-top:2.25rem;padding-block:1rem;text-align:center}@media screen and (max-width: 50em){.footer-nav.svelte-ty3dkl.svelte-ty3dkl{grid-template-columns:1fr}}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $currentTheme, $$unsubscribe_currentTheme;
  $$unsubscribe_currentTheme = subscribe(currentTheme, (value) => $currentTheme = value);
  $$result.css.add(css$2);
  $$unsubscribe_currentTheme();
  return `<footer class="footer svelte-ty3dkl"><div class="container"><div class="footer-wrapper"><div class="logo svelte-ty3dkl"><a href="/" aria-label="Home">${validate_component(Logo, "Logo").$$render($$result, { theme: $currentTheme }, {}, {})}</a></div>
			<nav class="footer-nav svelte-ty3dkl"><div class="footer-col col0 svelte-ty3dkl"><div class="col-options svelte-ty3dkl"><a class="link" href="https://www.instagram.com/pritishraj04/" target="_blank" aria-label="Instagram profile"><iconify-icon icon="mdi:instagram" style="font-size: 24px"></iconify-icon></a>
						<a class="link" aria-label="Linkedin profile" href="https://www.linkedin.com/in/pritishraj04/" target="_blank"><iconify-icon icon="mdi:linkedin" style="font-size: 24px"></iconify-icon></a>
						<a class="link" aria-label="Github profile" href="https://github.com/pritishraj04" target="_blank"><iconify-icon icon="mdi:git" style="font-size: 24px"></iconify-icon></a></div></div>
				<div class="footer-col col1 svelte-ty3dkl"><h3 class="col-header ternary-heading">Links</h3>
					<div class="col-options svelte-ty3dkl"><a class="link" href="/">Home</a>
						<a class="link" href="/#about">About</a>
						<a class="link" href="/#works">Works</a>
						<a class="link" href="#contact">Contact Me</a></div></div>
				<div class="footer-col col2 svelte-ty3dkl"><h3 class="col-header ternary-heading">Contact</h3>
					<div class="col-options svelte-ty3dkl"><a class="link" href="mailto:pritishraj04@gmail.com">pritishraj04@gmail.com</a>
						<a class="link" href="tel:+919097785207">+91 9097785207</a>
						<a class="link" href="https://github.com/pritishraj04" target="blank">github.com/pritishraj04</a>
						<a class="link" href="https://linkedin.com/in/pritishraj04">linkedin.com/in/pritishraj04</a></div></div>
				<div class="footer-col col3 svelte-ty3dkl"><h3 class="col-header ternary-heading">Address</h3>
					<div class="col-options svelte-ty3dkl"><address class="paragraph">Written by <a class="primary-link" href="mailto:pritishraj04@gmail.com">Pritish Raj</a>.<br>
							Visit us at:<br>
							Kankarbagh<br>
							Patna, Bihar<br>
							India
						</address></div></div></nav>
			<div class="sign svelte-ty3dkl"><p class="paragraph">Designed and Developed by Pritish Raj</p></div></div></div>
</footer>`;
});
const PageTransition = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pathname = "" } = $$props;
  if ($$props.pathname === void 0 && $$bindings.pathname && pathname !== void 0)
    $$bindings.pathname(pathname);
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function tick_spring(ctx, last_value, current_value, target_value) {
  if (typeof current_value === "number" || is_date(current_value)) {
    const delta = target_value - current_value;
    const velocity = (current_value - last_value) / (ctx.dt || 1 / 60);
    const spring2 = ctx.opts.stiffness * delta;
    const damper = ctx.opts.damping * velocity;
    const acceleration = (spring2 - damper) * ctx.inv_mass;
    const d = (velocity + acceleration) * ctx.dt;
    if (Math.abs(d) < ctx.opts.precision && Math.abs(delta) < ctx.opts.precision) {
      return target_value;
    } else {
      ctx.settled = false;
      return is_date(current_value) ? new Date(current_value.getTime() + d) : current_value + d;
    }
  } else if (Array.isArray(current_value)) {
    return current_value.map((_, i) => tick_spring(ctx, last_value[i], current_value[i], target_value[i]));
  } else if (typeof current_value === "object") {
    const next_value = {};
    for (const k in current_value) {
      next_value[k] = tick_spring(ctx, last_value[k], current_value[k], target_value[k]);
    }
    return next_value;
  } else {
    throw new Error(`Cannot spring ${typeof current_value} values`);
  }
}
function spring(value, opts = {}) {
  const store = writable(value);
  const { stiffness = 0.15, damping = 0.8, precision = 0.01 } = opts;
  let last_time;
  let task;
  let current_token;
  let last_value = value;
  let target_value = value;
  let inv_mass = 1;
  let inv_mass_recovery_rate = 0;
  let cancel_task = false;
  function set(new_value, opts2 = {}) {
    target_value = new_value;
    const token = current_token = {};
    if (value == null || opts2.hard || spring2.stiffness >= 1 && spring2.damping >= 1) {
      cancel_task = true;
      last_time = now();
      last_value = new_value;
      store.set(value = target_value);
      return Promise.resolve();
    } else if (opts2.soft) {
      const rate = opts2.soft === true ? 0.5 : +opts2.soft;
      inv_mass_recovery_rate = 1 / (rate * 60);
      inv_mass = 0;
    }
    if (!task) {
      last_time = now();
      cancel_task = false;
      task = loop((now2) => {
        if (cancel_task) {
          cancel_task = false;
          task = null;
          return false;
        }
        inv_mass = Math.min(inv_mass + inv_mass_recovery_rate, 1);
        const ctx = {
          inv_mass,
          opts: spring2,
          settled: true,
          dt: (now2 - last_time) * 60 / 1e3
        };
        const next_value = tick_spring(ctx, last_value, value, target_value);
        last_time = now2;
        last_value = value;
        store.set(value = next_value);
        if (ctx.settled) {
          task = null;
        }
        return !ctx.settled;
      });
    }
    return new Promise((fulfil) => {
      task.promise.then(() => {
        if (token === current_token)
          fulfil();
      });
    });
  }
  const spring2 = {
    set,
    update: (fn, opts2) => set(fn(target_value, value), opts2),
    subscribe: store.subscribe,
    stiffness,
    damping,
    precision
  };
  return spring2;
}
const CustomCursor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_coords;
  let $$unsubscribe_size;
  let coords = spring({ x: 0, y: 0 }, { stiffness: 0.05, damping: 0.25 });
  $$unsubscribe_coords = subscribe(coords, (value) => value);
  let size = spring(1);
  $$unsubscribe_size = subscribe(size, (value) => value);
  $$unsubscribe_coords();
  $$unsubscribe_size();
  return `

<div>${slots.default ? slots.default({}) : ``}
	${``}</div>`;
});
const Modal_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "dialog.svelte-17qqp9e.svelte-17qqp9e{border-radius:10px;border:none;padding:1rem 2rem;margin-inline:auto;margin-top:5rem;max-height:80vh;max-height:80dvh}dialog.svelte-17qqp9e .head.svelte-17qqp9e{display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem}dialog[open].svelte-17qqp9e.svelte-17qqp9e{animation:svelte-17qqp9e-zoom 600ms cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes svelte-17qqp9e-zoom{from{transform:scale(0)}to{transform:scale(1)}}dialog[open].svelte-17qqp9e.svelte-17qqp9e::backdrop{animation:svelte-17qqp9e-fade 500ms ease-out}@keyframes svelte-17qqp9e-fade{from{opacity:0}to{opacity:1}}button.svelte-17qqp9e.svelte-17qqp9e{display:block}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { showModal, closeModal } = $$props;
  let { heading = "modal" } = $$props;
  let dialog;
  if ($$props.showModal === void 0 && $$bindings.showModal && showModal !== void 0)
    $$bindings.showModal(showModal);
  if ($$props.closeModal === void 0 && $$bindings.closeModal && closeModal !== void 0)
    $$bindings.closeModal(closeModal);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  $$result.css.add(css$1);
  return `

<dialog class="bg-blur bg-blur-primary container svelte-17qqp9e"${add_attribute("this", dialog, 0)}><div><div class="head svelte-17qqp9e"><h2 class="secondary-heading">${escape(heading)}</h2>
			
			<button autofocus data-type="ghost" class="button svelte-17qqp9e" aria-label="Close modal"><iconify-icon icon="solar:close-square-bold" style="font-size: 32px"></iconify-icon></button></div>
		${slots.default ? slots.default({}) : ``}</div>
</dialog>`;
});
const ContactModal_svelte_svelte_type_style_lang = "";
const css = {
  code: "form.svelte-3uxm28.svelte-3uxm28{display:grid;grid-template-columns:1fr 1fr;gap:0.5rem}textarea.svelte-3uxm28.svelte-3uxm28{max-width:100%;resize:vertical}@media screen and (max-width: 50em){form.svelte-3uxm28.svelte-3uxm28{grid-template-columns:1fr}}.full-width.svelte-3uxm28.svelte-3uxm28{grid-column:1 / -1}.action.svelte-3uxm28 button.svelte-3uxm28{display:flex;gap:0.5rem;align-items:center;padding-block:0;float:right}",
  map: null
};
const ContactModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $contactModal, $$unsubscribe_contactModal;
  $$unsubscribe_contactModal = subscribe(contactModal, (value) => $contactModal = value);
  $$result.css.add(css);
  $$unsubscribe_contactModal();
  return `${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      showModal: $contactModal,
      closeModal: () => {
        $contactModal = false;
      },
      heading: "Get in touch!"
    },
    {},
    {
      default: () => {
        return `<form name="contact" autocomplete="off" method="POST" action="/success" data-netlify="true" data-netlify-honeypot="bot-field" class="svelte-3uxm28"><input type="hidden" name="form-name" value="contact">
		<p hidden><label>Don&#39;t fill this out: <input name="bot-field"></label></p>
		<label for="fullname" class="inp full-width svelte-3uxm28"><input type="text" id="fullname" name="fullname" class="text-field" placeholder=" " required>
			<span class="label">Full Name</span>
			<span class="focus-bg"></span></label>
		<label for="email" class="inp"><input type="email" id="email" name="email" class="text-field" placeholder=" " required>
			<span class="label">Email</span>
			<span class="focus-bg"></span></label>
		<label for="phone" class="inp"><input type="text" id="phone" name="phone" class="text-field" placeholder=" " required>
			<span class="label">Phone Number</span>
			<span class="focus-bg"></span></label>
		<label for="subject" class="inp full-width svelte-3uxm28"><input type="text" id="subject" name="subject" class="text-field" placeholder=" " required>
			<span class="label">Subject</span>
			<span class="focus-bg"></span></label>
		<label for="message" class="inp full-width svelte-3uxm28"><textarea name="message" id="message" class="text-field svelte-3uxm28" rows="3" placeholder=" " required></textarea>
			<span class="label">Message</span>
			<span class="focus-bg"></span></label>
		<div class="action full-width svelte-3uxm28"><button class="button svelte-3uxm28" type="submit" id="submit">Send <iconify-icon icon="mdi:email-arrow-right" style="font-size: 32px"></iconify-icon></button></div></form>`;
      }
    }
  )}`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(CustomCursor, "CustomCursor").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
	${validate_component(PageTransition, "PageTransition").$$render($$result, { pathname: data.pathname }, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}
	${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
	${validate_component(ContactModal, "ContactModal").$$render($$result, {}, {}, {})}`;
    }
  })}`;
});
export {
  Layout as default
};
