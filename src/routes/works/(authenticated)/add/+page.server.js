import { fail, redirect } from '@sveltejs/kit';
import { db } from '$lib/database';

// const validUsers = ['ADMIN'];

export const actions = {
	addWork: async ({ request }) => {
		// if (!validUsers.includes(locals.user.role)) {
		// 	return fail(400, { error: 'Access Denied! Contact Administrator' });
		// }

		const data = await request.formData();

		const title = data.get('title');
		const slug = data.get('slug');
		const category = data.get('category');
		const technologies = data.getAll('technologies');
		const img = data.get('img');
		const link = data.get('link');
		const desc = data.get('desc');
		const defaultOrder = data.get('defaultOrder');

		console.log({
			title,
			slug,
			category,
			technologies,
			img,
			link,
			desc,
			defaultOrder
		});

		if (!title || typeof title !== String) {
			return fail(400, { error: 'Title is madatory and should only be type of string.' });
		}
		if (!slug || typeof slug !== String) {
			return fail(400, { error: 'Slug is madatory and should only be type of string.' });
		}
		if (!category || typeof category !== Number) {
			return fail(400, {
				error: 'Select a Category from the dropdown list. Category is madatory.'
			});
		}
		if (technologies.length === 0) {
			return fail(400, { error: 'Select at least one Technology from the list.' });
		}
		if (!img || typeof img !== String) {
			return fail(400, {
				error: 'Image name with their extention is madatory and should only be type of string.'
			});
		}
		if (!link || typeof link !== String) {
			return fail(400, { error: 'Project Link is madatory and should only be type of string.' });
		}
		if (!desc || typeof desc !== String) {
			return fail(400, {
				error: 'Description is madatory and should only be type of string.'
			});
		}
		if (!defaultOrder || typeof defaultOrder !== Number) {
			return fail(400, {
				error: 'Description is madatory and should only be type of string.'
			});
		}
		await db.Works.create({
			data: {
				title: title,
				slug: slug,
				category: { connect: { id: category } },
				tech: { connect: technologies.forEach((id) => ({ id })) },
				img: img,
				link: link,
				desc: desc,
				defaultOrder: defaultOrder
			}
		});
		throw redirect(302, '/works');
	}
};
