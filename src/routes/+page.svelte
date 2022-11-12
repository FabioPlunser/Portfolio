
<script lang="ts">
	// import { PageData } from './$types';
	
	import HeroMobile from '$lib/components/heroMobile.svelte';
	import MediaQuery from '$lib/components/mediaQuery.svelte';
	import Hero from '$lib/components/hero.svelte';
  	import { onMount } from 'svelte';
	export let data: any;
	console.log(data);
	let Projects = [
		{title: "Project 1", description: "This is a description of project 1", image: "https://picsum.photos/400/400", path: "/project1"},
		{title: "Project 2", description: "This is a description of project 2", image: "https://picsum.photos/400/300", path: "/project2"},
		{title: "Project 3", description: "This is a description of project 3", image: "https://picsum.photos/400/500", path: "/project3"},
		{title: "Project 4", description: "This is a description of project 3", image: "https://picsum.photos/400/200", path: "/project4"},

	]
	

</script>
<svelte:head>
	<title>My Portfolio project</title>
</svelte:head>



<!-- Hero Smartphone -->
<MediaQuery query="(max-width: 480px)" let:matches>
	{#if matches}
	<HeroMobile Projects={data.projects}/>
	{/if}
</MediaQuery>

<MediaQuery query="(min-width: 480px)" let:matches> 
	{#if matches}
		<Hero Projects={data.projects}/>
	<h1>Hallo</h1>
	{/if}
</MediaQuery>
