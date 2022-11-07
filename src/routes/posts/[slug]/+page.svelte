<script lang="ts">
	import '@fontsource/ibm-plex-mono';
	// import hljs from 'highlight.js';
	import { marked } from 'marked';
	import type { PageData } from './$types';

	// marked.setOptions({
	// 	highlight: function (code, lang, _callback) {
	// 		if (typeof lang === 'undefined') {
	// 			return hljs.highlightAuto(code).value;
	// 		} else if (lang === 'nohighlight') {
	// 			return code;
	// 		} else {
	// 			return hljs.highlight(lang, code).value;
	// 		}
	// 	}
	// });

	export let data: PageData;
	const { title, date, tags, content, coverImage } = data.post;
	$: markdown = marked.parse(content);
</script>

<svelte:head>
	<title>Blog | {title}</title>
</svelte:head>

<section class="w-auto mx-10 md:mx-auto max-w-5xl dark:text-primary-content">
	<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl:-mx-38 mb-5">
		<center>
			<img class="rounded-xl" src={coverImage.url} alt={`Cover image for ${title}`} />
		</center>
	</div>

	<div class="prose prose-xl flex">
		<a href="/posts" class="hover:scale-125 ease-in-out duration-200" alt="back"
			><i class="bi bi-arrow-90deg-left text-4xl pr-10" /></a
		>
		<h1>{@html marked.parse(title)}</h1>
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

	<article class="prose prose-lg pb-96">
		{@html markdown}
		<a href="/posts" class="hover:scale-125 ease-in-out duration-200"
			><i class="bi bi-arrow-90deg-left text-4xl pr-10" /></a
		>
	</article>
</section>

<style>
	@import 'https://unpkg.com/@highlightjs/cdn-assets@10.6.0/styles/night-owl.min.css';
</style>
