<script context="module" lang="ts">
	import { client } from '$lib/graphql-client';
	import { postQuery } from '$lib/graphql-queries';
	import { marked } from 'marked';

	export const load = async ({ params }) => {
		const { slug } = params;
		const variables = { slug };
		const { post } = await client.request(postQuery, variables);

		return {
			props: {
				post
			}
		};
	};
</script>

<script>
	export let post;

	const { title, date, tags, content, coverImage } = post;
</script>

<svelte:head>
	<title>Blog | {title}</title>
</svelte:head>

<section class="container mx-auto max-w-5xl justify-center text-black dark:text-primary-content">
	<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
		<center>
			<img
				class="rounded-xl"
				src={coverImage.url}
				alt={`Cover image for ${title}`}
			/>
		</center>
	</div>

	<div class="prose prose-xl flex">
		<a href="/posts" class="hover:scale-125 ease-in-out duration-200" alt="back"
			><i class="bi bi-arrow-90deg-left text-4xl pr-10" /></a
		>
		<h1>{title}</h1>
	</div>

	<p class="text-secondary text-xs tracking-widest font-semibold">
		{new Date(date).toDateString()}
	</p>

	<div class="mb-5 flex justify-between">
		<div>
			{#if tags}
				<div class="mt-5 space-x-2">
					{#each tags as tag}
						<span class="badge badge-primary">{tag}</span>
					{/each}
				</div>
			{/if}
		</div>
	</div>

	<article class="text-black dark:text-primary-content prose prose-lg pb-96">
		{@html marked(content)}
		<a href="/posts" class="hover:scale-125 ease-in-out duration-200"
			><i class="bi bi-arrow-90deg-left text-4xl pr-10" /></a
		>
	</article>
</section>
