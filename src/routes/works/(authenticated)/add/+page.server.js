// import { fail, redirect } from '@sveltejs/kit';

// const validUsers = ['ADMIN'];

export const actions = {
	addWork: async ({ request }) => {
		// if (!validUsers.includes(locals.user.role)) {
		// 	return fail(400, { error: 'Access Denied! Contact Administrator' });
		// }
		const data = await request.formData();
		const workDetails = {};

		data.forEach((value, key) => {
			workDetails[key] = value;
		});
		console.log(workDetails);
	}
};
