<script lang="ts">
	import {marked} from 'marked';
  	import {onMount} from 'svelte';
	import type { PageData } from './$types';
	export let data: PageData
	let project;
	if(data.project){
		$: project = data.project;
	}
	let Component: any;
	if(data.slug){
		let path = `../../../lib/projectPages/${data.slug}.svelte`;
		onMount(async ()=>{
			try{
				Component = (await import(path)).default;
			}catch(e){
				console.log(e);
			}
		});
	}
	let component = false;
	$:{
		if(Component === undefined) component=false;
	}
	$: if(Component !== undefined) component=true;
</script>

<svelte:head>
		<title>My Portfolio | {data.slug}</title>
</svelte:head>

{#if component}
	<svelte:component this={Component} />
{/if}
{#if !component}
	<section class="w-auto mx-10 md:mx-20 text-black dark:text-primary-content">
		<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
			<center>
				<img class="rounded-lg w-1/4 shadow-xl" src={project.image[0].url} alt={project.title} />
			</center>
		</div>

		<div class="prose prose-xl flex">
			<a href="/projects" class="hover:scale-125 ease-in-out duration-200" alt="back"
				><i class="bi bi-arrow-90deg-left md:text-4xl pr-10" /></a
			>
			<h1 class="text-xl md:text-4xl">{project.name}</h1>
		</div>
		<div class="mb-5 flex justify-between">
			<div>
				{#if project.tags}
					{#each project.tags as tag}
						<span
							class="badge border-none text-xl text-white bg-slate-400 mr-2 mt-4 hover:bg-slate-700 cursor-pointer p-4"
							>{tag}</span
						>
					{/each}
				{/if}
			</div>
		</div>

		<div
			class="mb-5 prose flex prose-a:text-slate-500 hover:prose-a:text-slate-900 dark:prose-a:text-white dark:hover:prose-a:text-slate-400"
		>
			{#if project.demo}
				<a class="mr-5" href={project.demo} rel="noopener noreferrer">Demo</a>
			{/if}
			{#if project.sourceCode}
				<a href={project.sourceCode} rel="noopener noreferrer">Source Code</a>
			{/if}
		</div>

		<article class="prose prose-2xl">
			{@html marked(project.description)}
		</article>
	</section>
{/if}
