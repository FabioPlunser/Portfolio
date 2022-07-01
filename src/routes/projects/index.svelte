<script context="module">
	import ProjectCard from "$lib/components/project-card.svelte";
	import { client } from "$lib/graphql-client"
	import {authorsQuery, projectsQuery} from "$lib/graphql-queries";
	export async function load(){	
		const [projectsReq] = await Promise.all([
			client.request(projectsQuery)
		])
		
    const { projects } = projectsReq;
		return {
			props: {
				projects,
			},
		}
	}
</script>
<script >
	export let projects;
</script>
<svelte:head>
  <title>My Portfolio projects</title>
</svelte:head>

<div class="flex flex-wrap">
  {#each projects as { name, slug, description, image }}
    <ProjectCard {name} {description} url={image[0].url} {slug} />
  {/each}
</div>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>