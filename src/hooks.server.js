import { db } from '$lib/database';

export const handle = async ({ event, resolve }) => {
	const theme = event.cookies.get('colortheme');
	if (theme) {
		await resolve(event, {
			transformPageChunk: ({ html }) => html.replace('data-theme=""', `data-theme="${theme}"`)
		});
	}

	const session = event.cookies.get('session');
	if (!session) {
		return resolve(event);
	}
	const user = await db.User.findUnique({
		where: { authToken: session },
		select: { id: true, phone: true, Role: true, email: true }
	});
	if (user) {
		event.locals.user = {
			id: user.id,
			username: user.username,
			role: user.Role.name
		};
	}
	return await resolve(event);
};
