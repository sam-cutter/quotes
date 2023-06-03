import PocketBase from 'pocketbase';

export async function newSession() {
	const pb = new PocketBase('http://localhost:8090');

	const initialData = {
		accuracy: 0,
		complete: false
	};

	const record = await pb.collection('sessions').create(initialData);

	return record;
}
