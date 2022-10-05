import { client } from '$lib/graphql-client';
import { projectsQuery } from '$lib/graphql-queries';
export async function load() {
	const [projectsReq] = await Promise.all([client.request(projectsQuery)]);

	const { projects } = projectsReq;
	return {
		projects
	};
}
