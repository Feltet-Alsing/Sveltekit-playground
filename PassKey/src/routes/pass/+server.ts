let pass = false;

import { CODE } from '$env/static/private';

export function GET() {
	return new Response(JSON.stringify({ pass }), {
		headers: { 'Content-Type': 'application/json' }
	});
}

export async function POST({ request }) {
	try {
		const { passKey } = await request.json();

		if (passKey == CODE) {
			pass = true;
			return new Response(JSON.stringify({ success: true, message: 'Passkey valid.' }), {
				headers: { 'Content-Type': 'application/json' }
			});
		} else if (passKey != CODE || passKey === 'logout') {
			pass = false;
			return new Response(JSON.stringify({ success: false, message: 'Passkey invalid.' }), {
				headers: { 'Content-Type': 'application/json' }
			});
		}
	} catch {
		// Handle errors and return a response
		return new Response(JSON.stringify({ success: false, message: 'Invalid request format.' }), {
			status: 400,
			headers: { 'Content-Type': 'application/json' }
		});
	}
}
