<script context="module">
	import { client } from '$lib/graphql-client';
	import { authorsQuery } from '$lib/graphql-queries';
	import { marked } from 'marked';

	export const load = async () => {
		const { authors } = await client.request(authorsQuery);

		return {
			props: {
				authors
			}
		};
	};
</script>

<script>
	export let authors;
	const {
		name,
		intro,
		bio,
		picture: { url }
	} = authors[0];
</script>

<svelte:head>
	<title>My Portfolio project | About {name}</title>
</svelte:head>

<section
	class="pb-60 prose prose-red prose-stone prose-headings:underline dark:prose-invert"
>
	<!-- <h1 class="font-bold text-center mb-20 text-5xl text-white dar:text-black underline">About Me</h1> -->
	<div class="flex justify-center">
		<div class="w-60">
			<img class="rounded-full shadow-2xl" src={url} alt="Profile picture" />
		</div>
	</div>
	<div class="container mx-auto justify-center mb-40 items-end">
		<div class="">
			<h2 class="text-5xl mb-4 font-bold tracking-wider">{name}</h2>
			<p class="">{@html marked(intro)}</p>
		</div>
		{#if bio}
			<article class="">
				{@html marked(bio)}
			</article>
		{/if}
	</div>
</section>
