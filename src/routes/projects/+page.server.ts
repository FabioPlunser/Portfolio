import { client } from '$lib/helper/graphql-client';
import { projectsQuery } from '$lib/helper/graphql-queries';
import { getPages } from "$lib/helper/db";

export async function load() {
	const [projectsReq] = await Promise.all([client.request(projectsQuery)]);
	const res = await getPages();
	// console.log(res);
	for (let res2 of res) {
		   res2._id = res2._id.toString();
	}
	const { projects } = projectsReq;
	let data = {
		projects: projects,
		posts: res
	}
	return {
		data
	};
}
