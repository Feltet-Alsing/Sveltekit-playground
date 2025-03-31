import { redirect } from '@sveltejs/kit';

export async function load({ fetch }) {
	const response = await fetch('/pass', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	const data = await response.json();

	if (!data.pass) {
		// Redirect to "/" if not logged in
		throw redirect(302, '/');
	}

	return {
		loggedIn: data.pass
	};
}
