import PocketBase from 'pocketbase';

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

export async function getAllSessions() {
	const pb = new PocketBase('http://127.0.0.1:8090');

	const sessions = await pb.collection('sessions').getFullList();

	return sessions;
}
