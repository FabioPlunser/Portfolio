import { client } from '$lib/helper/graphql-client';
import { projectsQuery } from '$lib/helper/graphql-queries';
import { getPosts, connectDB } from "$lib/helper/database"

export async function load() {
	connectDB();
	const [projectsReq] = await Promise.all([client.request(projectsQuery)]);
	const res = await getPosts();

	const { projects } = projectsReq;
	let data = {
		projects: projects,
		posts: res
	}
	return {
		data
	};
}
