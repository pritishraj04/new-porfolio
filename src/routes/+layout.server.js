export const prerender = true;

export async function load({ locals }) {
	return {
		theme: locals.theme
	};
}
