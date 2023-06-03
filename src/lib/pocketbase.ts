import PocketBase from 'pocketbase';

export async function newSession() {
	const pb = new PocketBase('http://localhost:8090');

	const initialData = {
		accuracy: 0,
		complete: false
	};

	const session = await pb.collection('sessions').create(initialData);

	return session;
}

export async function getSession(id: string) {
	const pb = new PocketBase('http://localhost:8090');

	const session = await pb.collection('sessions').getOne(id);

	return session;
}
