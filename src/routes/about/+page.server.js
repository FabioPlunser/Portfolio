
import { client } from '$lib/helper/graphql-client';
import { authorsQuery } from '$lib/helper/graphql-queries';

export const load = async () => {
	const { authors } = await client.request(authorsQuery);

	return {
		authors
	};
};
