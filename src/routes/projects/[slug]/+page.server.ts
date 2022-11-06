import { client } from '$lib/helper/graphql-client';
import { projectQuery } from '$lib/helper/graphql-queries';
export const load = async ({ params }) => {
	const { slug } = params;
	const variables = { slug };
	const { project } = await client.request(projectQuery, variables);
	if(project === null){
		return {
			slug,
			project: {
				title: "404",
				description: "404",
				image: [{url: " "}],
				name: ""
			}
		};
	}
	else{
		return {
			project
		};
	}
	
};
