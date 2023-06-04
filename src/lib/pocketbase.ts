import PocketBase from 'pocketbase';

export async function getAllQuotes() {
	const pb = new PocketBase('http://127.0.0.1:8090');

	const quotes = await pb.collection('quotes').getFullList();

	return quotes;
}

export async function newSession() {
	const pb = new PocketBase('http://127.0.0.1:8090');

	const initialData = {
		accuracy: 0,
		complete: false
	};

	const session = await pb.collection('sessions').create(initialData);

	return session;
}

export async function getSession(id: string) {
	const pb = new PocketBase('http://127.0.0.1:8090');

	const session = await pb.collection('sessions').getOne(id);

	return session;
}

export async function getSessionAttempts(id: string) {
	const pb = new PocketBase('http://127.0.0.1:8090');

	const session = await getSession(id);

	const attempts = await pb.collection('attempts').getFullList({
		filter: `created >= "${session.created}" && session = "${id}"`
	});

	return attempts;
}

export async function getAllSessions() {
	const pb = new PocketBase('http://127.0.0.1:8090');

	const sessions = await pb.collection('sessions').getFullList();

	return sessions;
}
