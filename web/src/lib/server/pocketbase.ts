import { env } from '$env/dynamic/private';
import PocketBase from 'pocketbase';

export const pocketbaseUrl = env.POCKETBASE_URL || 'http://127.0.0.1:8090';

export const createPocketBase = () => {
	const pb = new PocketBase(pocketbaseUrl);
	pb.autoCancellation(false);
	return pb;
};
