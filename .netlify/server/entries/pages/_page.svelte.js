import { c as create_ssr_component, v as validate_component, d as each, a as add_attribute, e as escape } from "../../chunks/index2.js";
import { S as Splide_1, a as SplideSlide, P as ProjectCarousel } from "../../chunks/ProjectCarousel.js";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide-extension-auto-scroll/dist/js/splide-extension-auto-scroll.min.js";
import "iconify-icon";
import { C as ContactSection } from "../../chunks/ContactSection.js";
import { w as works } from "../../chunks/works.js";
const HeroMarquee_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".marquee.svelte-1iwwpzw{margin-top:1.56rem}.marqImages.svelte-1iwwpzw{width:4rem;margin-bottom:0.7rem;margin-inline:auto}",
  map: null
};
const HeroMarquee = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const marqElements = [
    { src: "/img/svgs/html.svg", alt: "HTML" },
    { src: "/img/svgs/css.svg", alt: "CSS" },
    {
      src: "/img/svgs/sveltekit.svg",
      alt: "Svelte"
    },
    {
      src: "/img/svgs/reactjs.svg",
      alt: "ReactJS"
    },
    {
      src: "/img/svgs/supabase.svg",
      alt: "Supabase"
    },
    {
      src: "/img/svgs/mongodb.svg",
      alt: "MongoDB"
    },
    {
      src: "/img/svgs/nodejs.svg",
      alt: "NodeJS"
    },
    {
      src: "/img/svgs/expressjs.svg",
      alt: "ExpressJS"
    }
  ];
  const marqueeOption = {
    pagination: false,
    arrows: false,
    gap: "1rem",
    type: "loop",
    drag: "free",
    focus: "center",
    autoScroll: { speed: 0.5 },
    perPage: 8,
    breakpoints: {
      1220: { perPage: 6 },
      930: { perPage: 4 },
      620: { perPage: 3 },
      370: { perPage: 2 }
    }
  };
  $$result.css.add(css$1);
  return `<div class="marquee svelte-1iwwpzw"><div class="marquee-inner">${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      extensions: { AutoScroll },
      options: marqueeOption,
      "aria-labelledby": "Marquee"
    },
    {},
    {
      default: () => {
        return `${each(marqElements, (marq) => {
          return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `<img class="marqImages svelte-1iwwpzw"${add_attribute("src", marq.src, 0)}${add_attribute("alt", `${marq.alt} Logo`, 0)}>
					<p class="paragraph" style="text-align: center;">${escape(marq.alt)}</p>
				`;
            }
          })}`;
        })}`;
      }
    }
  )}</div>
</div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".hero-wrapper.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{padding-top:37.5vh;max-width:489px}.text-accent.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{color:var(--clr-accent-400);font-size:1rem}.text-name.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{font-size:3rem;font-weight:var(--fw-bold);letter-spacing:4.8px}.text-work.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{font-size:2rem;font-weight:var(--fw-semi-bold)}.showcase.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{margin-top:8.5625rem;padding:2.125rem 2.5rem;border-radius:32px}.showcase.svelte-129ufpc h3.svelte-129ufpc.svelte-129ufpc{font-size:16px}.about.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc,.works.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{scroll-margin-top:5em}.about-wrapper.svelte-129ufpc .secondary-heading.svelte-129ufpc.svelte-129ufpc{margin-top:0.7rem}.about-wrapper.svelte-129ufpc p.svelte-129ufpc.svelte-129ufpc{margin-block:1rem;max-width:675px}.about-wrapper.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc,.history-wrapper.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc,.expertise-wrapper.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc,.works-wrapper.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{margin-block:2.15rem}.history-wrapper.svelte-129ufpc .secondary-heading.svelte-129ufpc.svelte-129ufpc,.expertise-wrapper.svelte-129ufpc .secondary-heading.svelte-129ufpc.svelte-129ufpc{font-weight:var(--fw-semi-bold)}.expertise-wrapper.svelte-129ufpc ul.svelte-129ufpc li.svelte-129ufpc{border-radius:10px}.history-wrapper.svelte-129ufpc ul.svelte-129ufpc.svelte-129ufpc{margin-block:1rem;margin-left:0.85rem}.history-wrapper.svelte-129ufpc li.svelte-129ufpc.svelte-129ufpc{position:relative;margin-block:0.7rem}.history-wrapper.svelte-129ufpc li.svelte-129ufpc.svelte-129ufpc:not(:last-child)::after{content:'';left:-0.725rem;top:0.78rem;position:absolute;width:0.0625rem;height:115%}.history-wrapper.svelte-129ufpc li.svelte-129ufpc.svelte-129ufpc::before{content:'';left:-0.85rem;top:0.5rem;position:absolute;width:5px;height:5px;border-radius:50%}.history-wrapper.svelte-129ufpc li.svelte-129ufpc p.svelte-129ufpc{margin-block:0.2rem}.expertise-wrapper.svelte-129ufpc ul.svelte-129ufpc.svelte-129ufpc{display:grid;grid-template-columns:repeat(3, 1fr);margin-block:1rem}.expertise-wrapper.svelte-129ufpc li.svelte-129ufpc.svelte-129ufpc{text-align:center;padding:3rem 4rem}.expertise-wrapper.svelte-129ufpc .ternary-heading.svelte-129ufpc.svelte-129ufpc{margin-block:0.7rem}.work-button.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{padding-block:2rem 3.5rem}.featured-project.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{display:flex;justify-content:space-between;gap:2.5rem}.featured-image.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{border-radius:10px;overflow:hidden}.featured-project.svelte-129ufpc img.svelte-129ufpc.svelte-129ufpc{object-position:center;object-fit:contain;position:relative}.feature-details.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{max-width:40%;display:flex;flex-direction:column;gap:20px}.feature-details.svelte-129ufpc .secondary-heading.svelte-129ufpc.svelte-129ufpc{position:relative;margin-left:20px}.feature-details.svelte-129ufpc .secondary-heading.svelte-129ufpc.svelte-129ufpc::before{content:'';position:absolute;top:50%;background-color:#656565;transform:translateY(-50%);left:-118px;width:103px;height:1px}@media screen and (max-width: 50em){.text-name.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{font-size:2.25rem}.text-work.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{font-size:1.5rem}.showcase.svelte-129ufpc h3.svelte-129ufpc.svelte-129ufpc{font-size:14px}.history-wrapper.svelte-129ufpc li.svelte-129ufpc.svelte-129ufpc::before{top:0.4375rem}.expertise-wrapper.svelte-129ufpc ul.svelte-129ufpc.svelte-129ufpc{grid-template-columns:1fr}.featured-project.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{flex-direction:column}.feature-details.svelte-129ufpc.svelte-129ufpc.svelte-129ufpc{max-width:unset}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const worksOnHomePage = works.slice(0, 6);
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-1j1o09n_START -->${$$result.title = `<title>Pritish - Best Website Developer/Designer in India</title>`, ""}<!-- HEAD_svelte-1j1o09n_END -->`, ""}

<main><section class="hero"><div class="container"><div class="hero-wrapper svelte-129ufpc"><p class="text-accent svelte-129ufpc">Hello, I am</p>
				<h1 class="text-name svelte-129ufpc">Pritish Raj.</h1>
				<h2 class="text-work svelte-129ufpc">Software Engineer from New Delhi.</h2>
				<p class="paragraph">Right now I&#39;m looking for new opportunites in Test Automation and Web
					development.Currently working at Creatiosoft Pvt. Ltd. as a Test Engineer.
				</p></div>
			<div class="showcase bg-blur-primary bg-blur svelte-129ufpc"><h3 class="secondary-heading svelte-129ufpc">Technologies i am familiar with</h3>
				<div class="marq">${validate_component(HeroMarquee, "HeroMarquee").$$render($$result, {}, {}, {})}</div></div></div></section>
	<section class="about margin-block-primary padding-block-primary svelte-129ufpc" id="about"><div class="container"><h1 class="section-heading">About</h1>
			<div class="about-wrapper svelte-129ufpc"><h2 class="secondary-heading svelte-129ufpc">Currently Working as Test Engineer at Creatiosoft Pvt. Ltd.
				</h2>
				<p class="paragraph svelte-129ufpc">Prior to this role i was assigned a role of FQA Tester at Babel Media Pvt. Ltd.. In this
					role i have worked on multiple projects including AAA games. I also have worked in Agile
					work environment. I am well versed in different testing techniques and tools.Previously, I
					have done web development to build enhanced UI &amp; UX for emerging companies. I was a
					freelance web and brand designer and developer, and worked with Polardot.in to help
					multiple companies to build their digital footprint. I was also an intern at Tech4i Pvt.
					Ltd.
				</p>
				<p class="paragraph svelte-129ufpc">Want to work together? <a class="primary-link" href="#contact">Contact me.</a></p></div>
			<div class="history-wrapper svelte-129ufpc"><h2 class="secondary-heading svelte-129ufpc">Work History</h2>
				<ul data-role="list" class="svelte-129ufpc"><li class="svelte-129ufpc"><h5 class="ternary-heading">Test Engineer - Creatiosoft Pvt. Ltd., Noida</h5>
						<p class="paragraph svelte-129ufpc">May 2022 - Currently Working Here</p></li>
					<li class="svelte-129ufpc"><h5 class="ternary-heading">QA Tester - Babel Media Pvt. Ltd. (A Keywords Studios), Gurugram
						</h5>
						<p class="paragraph svelte-129ufpc">Sep 2019 - May 2022</p></li>
					<li class="svelte-129ufpc"><h5 class="ternary-heading">Intern - Tech4i Pvt. Ltd., New Delhi</h5>
						<p class="paragraph svelte-129ufpc">May 2018 - Jun 2018</p></li></ul>
				<h2 class="secondary-heading svelte-129ufpc">Education History</h2>
				<ul data-role="list" class="svelte-129ufpc"><li class="svelte-129ufpc"><h5 class="ternary-heading">B. Tech - Amity University</h5>
						<p class="paragraph svelte-129ufpc">Mar 2015 - May 2019</p></li>
					<li class="svelte-129ufpc"><h5 class="ternary-heading">Intermediate - D.A.V. Public School</h5>
						<p class="paragraph svelte-129ufpc">2015</p></li>
					<li class="svelte-129ufpc"><h5 class="ternary-heading">Matriculation - D.A.V. Public School</h5>
						<p class="paragraph svelte-129ufpc">2012</p></li></ul></div>
			<div class="expertise-wrapper svelte-129ufpc"><div class="secondary-heading svelte-129ufpc">My Expertise</div>
				<ul data-role="list" class="svelte-129ufpc"><li class="svelte-129ufpc"><iconify-icon icon="game-icons:materials-science" style="font-size: 96px;"></iconify-icon>
						<h5 class="ternary-heading svelte-129ufpc">Digital Products</h5>
						<p class="paragraph svelte-129ufpc">Web design encompasses many different skills and diciplines in the production of all
							web.
						</p></li>
					<li class="svelte-129ufpc"><iconify-icon icon="material-symbols:ambient-screen-rounded" style="font-size: 96px"></iconify-icon>
						<h5 class="ternary-heading svelte-129ufpc">UI-UX Design</h5>
						<p class="paragraph svelte-129ufpc">Web design encompasses many different skills and diciplines in the production of all
							web.
						</p></li>
					<li class="svelte-129ufpc"><iconify-icon icon="solar:devices-bold-duotone" style="font-size: 96px"></iconify-icon>
						<h5 class="ternary-heading svelte-129ufpc">Web Development</h5>
						<p class="paragraph svelte-129ufpc">Web design encompasses many different skills and diciplines in the production of all
							web.
						</p></li></ul></div></div></section>
	<section class="works margin-block-primary padding-block-primary svelte-129ufpc" id="works"><div class="container"><h1 class="section-heading">My Works</h1>
			<div class="works-wrapper svelte-129ufpc"><h2 class="secondary-heading">I&#39;ve Created these, please have a look</h2></div></div>
		${validate_component(ProjectCarousel, "ProjectCarousel").$$render($$result, { works: worksOnHomePage }, {}, {})}
		<div class="container"><div class="work-button svelte-129ufpc" style="text-align: center;"><a class="button" href="/works">See All Projects</a></div>
			<div class="featured-project svelte-129ufpc"><div class="featured-image svelte-129ufpc"><img src="/img/works/food-company.webp" alt="The Only Burger" loading="lazy" class="svelte-129ufpc"></div>
				<div class="feature-details svelte-129ufpc"><h2 class="secondary-heading svelte-129ufpc">Featured Project</h2>
					<h3 class="ternary-heading">The Only Burger. A QSR Franchise</h3>
					<p class="paragraph">Full Stack project Food Company Website made using Sveltekit, CSS as frontend &amp; ,
						Supabase, MongoDB, Prisma, as backend. This project focuses on quick login/register
						system integration. User can view restaurnat offering on this website without need of
						signup/login. However after susseful login user can order food from this website at
						anywhere near the admin specifed location. This project also features odering and
						account system.
					</p>
					<div class="cta-visit"><a href="https://foodfrontendproject.vercel.app/" target="_blank" class="button">Visit Site</a></div></div></div></div></section>
	${validate_component(ContactSection, "ContactSection").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
