import { c as create_ssr_component, b as subscribe, g as set_store_value, a as add_attribute, d as each, v as validate_component } from "../../../chunks/index2.js";
import "iconify-icon";
import { w as works, P as ProjectCard } from "../../../chunks/works.js";
import { C as ContactSection } from "../../../chunks/ContactSection.js";
import { s as selectedCategory } from "../../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".filters.svelte-9se8f9{display:grid;grid-template-columns:2fr 1fr 1fr;gap:21px;margin-bottom:35px}@media screen and (max-width: 767px){.filters.svelte-9se8f9{grid-template-columns:1fr}}.projects.svelte-9se8f9{display:grid;gap:21px;grid-template-columns:repeat(4, 1fr)}.no-project.svelte-9se8f9{text-align:center;padding:20px 10px;border-radius:10px;display:flex;flex-direction:column;gap:0.6rem;grid-column:1 / -1}@media screen and (max-width: 991px){.projects.svelte-9se8f9{grid-template-columns:repeat(3, 1fr)}}@media screen and (max-width: 767px){.projects.svelte-9se8f9{grid-template-columns:repeat(2, 1fr)}}@media screen and (max-width: 520px){.projects.svelte-9se8f9{grid-template-columns:1fr}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedCategory, $$unsubscribe_selectedCategory;
  $$unsubscribe_selectedCategory = subscribe(selectedCategory, (value) => $selectedCategory = value);
  let searchText = "";
  set_store_value(selectedCategory, $selectedCategory = "all", $selectedCategory);
  let result = works;
  $$result.css.add(css);
  {
    switch ($selectedCategory) {
      case "frontend":
        searchText = "";
        result = works.filter((el) => el.category === "frontend");
        break;
      case "fullstack":
        searchText = "";
        result = works.filter((el) => el.category === "fullstack");
        break;
      default:
        searchText = "";
        result = works;
        break;
    }
  }
  {
    {
      result = result.sort(function(a, b) {
        return b.id - a.id;
      });
    }
  }
  $$unsubscribe_selectedCategory();
  return `${$$result.head += `<!-- HEAD_svelte-ql804p_START -->${$$result.title = `<title>Works | Pritish - Best Website Developer/Designer in India</title>`, ""}<!-- HEAD_svelte-ql804p_END -->`, ""}

<main><section class="works site-head"><div class="container"><div class="site-head-wrapper"><h1 class="primary-heading">Works</h1>
				<p class="paragraph">Here are some of the the projects i&#39;ve made using some very interesting techonologies.
					Apart from these listed projects i&#39;ve also worked on multiple projects as a QA Engineer
					with as big as 40 members team. I&#39;ve also managed group of 5-8 members in my team as a
					POC.
				</p>
				<div class="breadcrum"><a href="/" class="link">Home</a><span><iconify-icon icon="material-symbols:chevron-right-rounded" style="font-size: 14px;"></iconify-icon></span>
					<h5 class="ternary-heading">Works</h5></div></div></div></section>
	<section class="work margin-block-primary padding-block-primary"><div class="container"><div class="work-wrapper"><div class="filters svelte-9se8f9"><label for="search" class="inp"><input type="text" id="search" class="text-field" placeholder=" "${add_attribute("value", searchText, 0)}>
						<span class="label">Search</span>
						<span class="focus-bg"></span></label>

					<select class="select" name="filter" id="filter"><option value="all">All</option><option value="frontend">Frontend</option><option value="fullstack">Fullstack</option></select>
					<select class="select" name="shorting" id="shorting"><option value="relevance">Relevance</option><option value="newestFirst">Newest First</option></select></div>
				<div class="projects svelte-9se8f9">${result.length ? each(result, (work, id) => {
    return `${validate_component(ProjectCard, "ProjectCard").$$render(
      $$result,
      {
        projectImg: `./img/works/${work.img}`,
        projectName: work.title,
        projectDesc: work.desc,
        projectCategory: work.category,
        projectLink: `/works/${work.slug}`
      },
      {},
      {}
    )}`;
  }) : `<div class="no-project bg-blur bg-blur-primary svelte-9se8f9"><h2 class="ternary-heading">No items found. Try removing filters.</h2>
							<p class="paragraph">Or click here:</p>
							<a href="/" class="primary-link">Home</a>
						</div>`}</div></div></div></section>
	${validate_component(ContactSection, "ContactSection").$$render($$result, {}, {}, {})}
</main>`;
});
export {
  Page as default
};
