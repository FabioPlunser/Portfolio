import { client } from '$lib/graphql-client';
import { postsQuery } from '$lib/graphql-queries';

export async function load() {
	const [postsReq] = await Promise.all([client.request(postsQuery)]);
	const { posts } = postsReq;
	return {
		posts
	};
}
