import { getAllSessions } from '../../lib/pocketbase.js';

export async function load({ params }) {
	const sessions = await getAllSessions();

	return {
		sessions: sessions
	};
}
