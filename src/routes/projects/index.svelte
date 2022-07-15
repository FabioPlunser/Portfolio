<script context="module">
	import ProjectCard from '$lib/components/project-card.svelte';
	import { client } from '$lib/graphql-client';
	import { authorsQuery, projectsQuery } from '$lib/graphql-queries';
	export async function load() {
		const [projectsReq] = await Promise.all([client.request(projectsQuery)]);

		const { projects } = projectsReq;
		return {
			props: {
				projects
			}
		};
	}
</script>

<script>
	export let projects;
</script>

<svelte:head>
	<title>My Portfolio projects</title>
</svelte:head>

<center>
	<h1 class="mb-10 font-extrabold md:text-4xl text-black dark:text-white underline">
		Projects
	</h1>
</center>

<section class="w-full text-black dark:text-white pb-96 z-0">
	{#if projects.length == 0}
		<center>
			<h1 class="mb-10 font-extrabold text-black dark:text-white underline">
				No Projects
			</h1>
		</center>
	{/if}
	{#each projects as { name, slug, description, image }}
		<ProjectCard {name} {description} url={image[0].url} {slug} />
	{/each}
</section>
