export async function load({ locals, url: { pathname } }) {
	return {
		theme: locals.theme,
		pathname
	};
}
