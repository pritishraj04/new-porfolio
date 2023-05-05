import { c as create_ssr_component, b as subscribe, a as add_attribute, e as escape, n as null_to_empty } from "./index2.js";
import { s as selectedCategory } from "./stores.js";
const ProjectCard_svelte_svelte_type_style_lang = "";
const css = {
  code: ".project-card.svelte-79oh4l.svelte-79oh4l{border-radius:10px;backdrop-filter:blur(10px);padding:10px;height:100%}.project-image.svelte-79oh4l.svelte-79oh4l{position:relative;border-radius:6px;overflow:hidden}.project-category.svelte-79oh4l.svelte-79oh4l{position:absolute;top:10px;right:10px;padding:0 8px;font-size:10px}.cat-fullstack.svelte-79oh4l.svelte-79oh4l{background-color:var(--clr-fullstack)}.cat-frontend.svelte-79oh4l.svelte-79oh4l{background-color:var(--clr-frontend)}.project-image.svelte-79oh4l img.svelte-79oh4l{object-position:center;object-fit:contain;position:relative}.project-head.svelte-79oh4l.svelte-79oh4l{margin-top:20px}.project-details.svelte-79oh4l.svelte-79oh4l{margin-top:10px;min-height:5rem}.project-actions.svelte-79oh4l.svelte-79oh4l{text-align:end}",
  map: null
};
const ProjectCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedCategory;
  $$unsubscribe_selectedCategory = subscribe(selectedCategory, (value) => value);
  let { projectImg, projectCategory, projectName, projectDesc, projectLink = "/" } = $$props;
  if ($$props.projectImg === void 0 && $$bindings.projectImg && projectImg !== void 0)
    $$bindings.projectImg(projectImg);
  if ($$props.projectCategory === void 0 && $$bindings.projectCategory && projectCategory !== void 0)
    $$bindings.projectCategory(projectCategory);
  if ($$props.projectName === void 0 && $$bindings.projectName && projectName !== void 0)
    $$bindings.projectName(projectName);
  if ($$props.projectDesc === void 0 && $$bindings.projectDesc && projectDesc !== void 0)
    $$bindings.projectDesc(projectDesc);
  if ($$props.projectLink === void 0 && $$bindings.projectLink && projectLink !== void 0)
    $$bindings.projectLink(projectLink);
  $$result.css.add(css);
  $$unsubscribe_selectedCategory();
  return `<div class="project-card bg-blur-primary svelte-79oh4l"><div class="project-image svelte-79oh4l"><img${add_attribute("src", projectImg, 0)}${add_attribute("alt", `Image for ${projectName}`, 0)} loading="lazy" class="svelte-79oh4l">
		<button class="${escape(null_to_empty("button project-category cat-" + projectCategory), true) + " svelte-79oh4l"}">${escape(projectCategory)}</button></div>
	<div class="project-head svelte-79oh4l"><h2 class="ternary-heading">${escape(projectName)}</h2></div>
	<div class="project-details svelte-79oh4l"><p class="paragraph">${escape(projectDesc.slice(0, 140))}...</p></div>
	<div class="project-actions svelte-79oh4l"><a${add_attribute("href", projectLink, 0)} class="button">View</a></div>
</div>`;
});
const works = [
  {
    id: 10,
    title: "Property Listing Project",
    slug: "property-listing-project",
    category: "fullstack",
    tech: ["Sveltekit", "Prisma", "CSS"],
    img: "property-listing.webp",
    link: "https://property-listing-livid.vercel.app/",
    desc: "Full Stack project Property Listing made using Sveltekit, CSS as frontend & Prisma, SQLite as backend. This project focuses on quick login/register system integration and list customer's properties on this website. In this website customer can also shortlist listed properties without need of signup/login.",
    orderByNew: 10
  },
  {
    id: 9,
    title: "Food dashboard project",
    slug: "food-dashboard-project",
    category: "fullstack",
    tech: ["Sveltekit", "Supabase", "MongoDB", "Prisma", "CSS"],
    img: "food-dashboard.webp",
    link: "http://fooddashboardproject.vercel.app/",
    desc: "Full Stack project Food dashboard made using Sveltekit, CSS as frontend & Supabase, MongoDB, Prisma as backend. This project focuses on quick login/register system integration. After user successful login into this system he/she can perform CRUD action and handle every aspect of a restaurant. This project also features odering and account system.",
    orderByNew: 8
  },
  {
    id: 8,
    title: "Food Company Website",
    slug: "food-company-website",
    category: "fullstack",
    tech: ["Sveltekit", "Supabase", "MongoDB", "Prisma", "CSS"],
    img: "food-company.webp",
    link: "https://foodfrontendproject.vercel.app/",
    desc: "Full Stack project Food Company Website made using Sveltekit, CSS as frontend & , Supabase, MongoDB, Prisma, as backend. This project focuses on quick login/register system integration. User can view restaurnat offering on this website without need of signup/login. However after susseful login user can order food from this website at anywhere near the admin specifed location. This project also features odering and account system.",
    orderByNew: 9
  },
  {
    id: 7,
    title: "Google Clone",
    slug: "google-clone",
    category: "frontend",
    tech: ["HTML", "CSS"],
    img: "google_clone.webp",
    link: "https://pritishraj04.github.io/google-clone/",
    desc: "Frontend project Google Clone made using plain HTML & CSS. This project focuses on creating reponsive mobile first development techniques.",
    orderByNew: 1
  },
  {
    id: 6,
    title: "Laundry App",
    slug: "laundry-app",
    category: "fullstack",
    tech: ["Sveltekit", "Supabase"],
    img: "lgini.webp",
    link: "https://mystifying-goodall-ca2cf8.netlify.app/",
    desc: "Full Stack project Laundry App made using Sveltekit, CSS as frontend & supabase as backend. This project focuses on quick login/register system integration. This project also features odering and account system.",
    orderByNew: 5
  },
  {
    id: 5,
    title: "Sveltekit Menu",
    slug: "sveltekit-menu",
    category: "frontend",
    tech: ["Sveltekit", "CSS"],
    img: "svelte_menu.webp",
    link: "https://dreamy-pare-0a653b.netlify.app/menu",
    desc: "Frontend project Sveltkit Menu made using Sveltekit, CSS. This project focuses on creating reponsive mobile first development techniques. This project also features glassmorphism styled reactive bill calculator. Add a product to see the total bill amount.",
    orderByNew: 6
  },
  {
    id: 4,
    title: "Frontend Mentor Challenge",
    slug: "frontend-mentor-challenge",
    category: "frontend",
    tech: ["HTML", "CSS"],
    img: "frontend_mentor_challenge.webp",
    link: "https://pritishraj04.github.io/frontent-mentor-card-purple/",
    desc: "This frontend project is a solution for the frontendmentor.io stats preview card component challenge made using plain HTML, CSS. This project focuses on reponsive mobile first development techniques.",
    orderByNew: 4
  },
  {
    id: 3,
    title: "MERN TODO",
    slug: "mern-todo",
    category: "fullstack",
    tech: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
    img: "mern_todo.webp",
    link: "https://pritishmernapp.herokuapp.com/login",
    desc: "Full Stack project MERN TODO made using MongoDB, ExpressJs, ReactJs & NodeJs. This project made during the learning process of MERN stack app. This app is hosted using HEROKU.",
    orderByNew: 7
  },
  {
    id: 2,
    title: "React Menu",
    slug: "react-menu",
    category: "frontend",
    tech: ["ReactJs", "CSS"],
    img: "react_menu.webp",
    link: "https://pritishraj04.github.io/react-menu/",
    desc: "Frontend project React Menu made using ReactJs, CSS. This project focuses on reponsive web design techniques. This project also features numeric entry based reactive bill calculator. Add a product to see the total bill amount.",
    orderByNew: 2
  },
  {
    id: 1,
    title: "Resposnsive homepage",
    slug: "responsive-homepage",
    category: "frontend",
    tech: ["HTML", "CSS"],
    img: "frontend_homepage.webp",
    link: "https://pritishraj04.github.io/frontent-homepage-responsive/",
    desc: "Frontend project Resposnsive homepage made using plain HTML, CSS. This project focuses on reponsive mobile first development techniques.",
    orderByNew: 3
  }
];
export {
  ProjectCard as P,
  works as w
};
