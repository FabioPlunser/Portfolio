import { client } from '$lib/helper/graphql-client';
import { projectsQuery } from '$lib/helper/graphql-queries';
import { getallBlog } from "$lib/helper/db";

export async function load() {
	const data = await getallBlog();
	for (let res2 of res) {
		   res2._id = res2._id.toString();
	}
	return {
		data
	};
}
