// import { db } from '$lib/database';

export async function load({ locals, url }) {
	// const works = async () => {
	// 	return await db.Works.findMany();
	// };
	// const technologies = async () => {
	// 	return await db.Technologies.findMany();
	// };
	// const categories = async () => {
	// 	return await db.Categories.findMany();
	// };
	return {
		theme: locals.theme,
		url: url.pathname
		// works: works(),
		// technologies: technologies(),
		// categories: categories()
	};
}
