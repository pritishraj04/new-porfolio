import { c as create_ssr_component, a as add_attribute, e as escape, n as null_to_empty, d as each, b as subscribe, v as validate_component } from "../../../../chunks/index2.js";
import { w as works } from "../../../../chunks/works.js";
import { p as page } from "../../../../chunks/stores2.js";
import { C as ContactSection } from "../../../../chunks/ContactSection.js";
import { P as ProjectCarousel } from "../../../../chunks/ProjectCarousel.js";
const ProjectDetails_svelte_svelte_type_style_lang = "";
const css = {
  code: ".project.svelte-58a419.svelte-58a419{display:flex;justify-content:space-between;gap:2.5rem}.project-image.svelte-58a419.svelte-58a419{overflow:hidden}.project.svelte-58a419 img.svelte-58a419{object-position:center;object-fit:contain;border-radius:10px}.project-details.svelte-58a419.svelte-58a419{min-width:45%;display:flex;flex-direction:column;gap:20px}.project-details.svelte-58a419 .secondary-heading.svelte-58a419{position:relative}.project-details.svelte-58a419 h3.svelte-58a419{text-transform:capitalize;padding:2px 5px}.cat-fullstack.svelte-58a419.svelte-58a419{background-color:var(--clr-fullstack)}.cat-frontend.svelte-58a419.svelte-58a419{background-color:var(--clr-frontend)}.technologies.svelte-58a419.svelte-58a419{padding:10px 5px;border-radius:10px}.technologies.svelte-58a419 ul.svelte-58a419{list-style:circle;margin-left:1.5rem;display:flex;gap:0 2.5rem;flex-wrap:wrap}.technologies.svelte-58a419 ul li.svelte-58a419::marker{font-size:clamp(1.6rem, 1.8vw, 2.4rem)}@media screen and (max-width: 50em){.project.svelte-58a419.svelte-58a419{flex-direction:column}.project-details.svelte-58a419.svelte-58a419{max-width:unset}}",
  map: null
};
const ProjectDetails = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { img, title, category, desc, techs, link } = $$props;
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.category === void 0 && $$bindings.category && category !== void 0)
    $$bindings.category(category);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.techs === void 0 && $$bindings.techs && techs !== void 0)
    $$bindings.techs(techs);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<div class="project svelte-58a419"><div class="project-image svelte-58a419"><img${add_attribute("src", `/img/works/${img}`, 0)}${add_attribute("alt", `Image for ${title}`, 0)} class="svelte-58a419"></div>
	<div class="project-details svelte-58a419"><h2 class="secondary-heading svelte-58a419">${escape(title)}</h2>
		<h3 class="${escape(null_to_empty("ternary-heading cat-" + category), true) + " svelte-58a419"}">${escape(category)}</h3>
		<p class="paragraph">${escape(desc)}</p>
		<div class="technologies bg-blur-primary bg-blur svelte-58a419"><h3 class="ternary-heading svelte-58a419">Techonologies Used:</h3>
			<ul class="svelte-58a419">${each(techs, (tech) => {
    return `<li${add_attribute("style", `list-style-image: url(/img/svgs/${tech.toLowerCase()}.svg);`, 0)} class="svelte-58a419"><p class="paragraph">${escape(tech)}</p>
					</li>`;
  })}</ul></div>
		<div class="cta-visit"><a${add_attribute("href", link, 0)} target="_blank" class="button">View Project</a></div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let project;
  let similarProjects;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  project = works.filter((el) => el.slug === $page.params.slug)[0];
  similarProjects = works.filter((el) => el.slug !== $page.params.slug).slice(0, 6);
  $$unsubscribe_page();
  return `${$$result.head += `<!-- HEAD_svelte-1ewsl1g_START -->${$$result.title = `<title>${escape(project.title)} | Pritish - Best Website Developer/Designer in India</title>`, ""}<!-- HEAD_svelte-1ewsl1g_END -->`, ""}

<main><section class="site-head"><div class="container"><div class="site-head-wrapper"><h1 class="primary-heading">Project Details</h1>
				<div class="breadcrum"><a href="/" class="link">Home</a><span><iconify-icon icon="material-symbols:chevron-right-rounded" style="font-size: 14px;"></iconify-icon></span>
					<a href="/works" class="link">Works</a><span><iconify-icon icon="material-symbols:chevron-right-rounded" style="font-size: 14px;"></iconify-icon></span>
					<h5 class="ternary-heading">${escape(project.title)}</h5></div></div></div></section>
	<section class="margin-block-primary padding-block-primary"><div class="container"><div class="project-wrapper">${validate_component(ProjectDetails, "ProjectDetails").$$render(
    $$result,
    {
      img: project.img,
      title: project.title,
      category: project.category,
      desc: project.desc,
      link: project.link,
      techs: project.tech
    },
    {},
    {}
  )}</div></div></section>
	<section class="margin-block-primary padding-block-primary"><div class="container"><div class="project-wrapper"><h2 class="secondary-heading">Other Projects</h2></div></div>
		${validate_component(ProjectCarousel, "ProjectCarousel").$$render($$result, { works: similarProjects }, {}, {})}</section>
	${validate_component(ContactSection, "ContactSection").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Page as default
};
