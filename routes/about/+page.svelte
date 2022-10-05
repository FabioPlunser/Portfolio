<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$types';
	export let data: PageData;
	$: author = data.authors[0]

</script>

<svelte:head>
	<title>My Portfolio project | About {author.name}</title>
</svelte:head>

<section class="pb-60 prose prose-red prose-stone prose-headings:underline dark:prose-invert">
	<div class="flex justify-center">
		<div class="w-60">
			<img class="rounded-full shadow-2xl" src={author.picture.url} alt="Profile picture" />
		</div>
	</div>
	<div class="container mx-auto justify-center mb-40 items-end">
		<div class="">
			<h2 class="text-5xl mb-4 font-bold tracking-wider">{author.name}</h2>
			<p class="">{@html marked(author.intro)}</p>
		</div>
		{#if author.bio}
			<article class="">
				{@html marked(author.bio)}
			</article>
		{/if}
	</div>
</section>
