<script lang="ts">
	import { marked } from 'marked';
	import type { PageData } from './$types';
	export let data: PageData;
	$: posts = data.posts;
</script>

<svelte:head>
	<title>Portfolio | Blog</title>
</svelte:head>

<center>
	<h1 class="text-4xl mb-10 font-extrabold text-6xl text-black dark:text-white underline">
		Blog posts
	</h1>
</center>
<center>
	<section id="blog-posts" class="pb-96">
		{#each posts as { title, slug, content, coverImage, tags }}
			<div class="card text-center w-auto md:w-1/2 mx-10 md:mx-0  shadow-2xl mb-20 bg-slate-900">
				<figure class="">
					<img class="" src={coverImage.url} alt={`Cover image for ${title}`} />
				</figure>
				<div class="card-body prose">
					<h2 class="title">{title}</h2>
					{@html marked(content).slice(0, 150)}
					<div class="flex justify-center mt-5 space-x-2">
						{#each tags as tag}
							<span class="badge badge-primary">{tag}</span>
						{/each}
					</div>
					<div class="justify-center card-actions">
						<a href={`/posts/${slug}`} class="btn bg-blue-700 text-white" >Read &rArr;</a>
					</div>
				</div>
			</div>
		{/each}
	</section>
</center>
