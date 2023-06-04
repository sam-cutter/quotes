import { getSession, getSessionAttempts } from '../../../lib/pocketbase.js';

export async function load({ params }) {
	const session = await getSession(params.slug);
	const attempts = await getSessionAttempts(session);

	return {
		session: session,
		attempts: attempts
	};
}
