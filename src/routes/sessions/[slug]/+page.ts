import { getSession } from '../../../lib/pocketbase.js';

export async function load({ params }) {
	const session = await getSession(params.slug);

	return {
		session: session
	};
}
