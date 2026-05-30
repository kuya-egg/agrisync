import { env } from '$env/dynamic/private';
import PocketBase from 'pocketbase';

export const pocketbaseUrl = env.POCKETBASE_URL || 'https://api.agrisync.online';

export const createPocketBase = () => {
	const pb = new PocketBase(pocketbaseUrl);
	pb.autoCancellation(false);
	return pb;
};
