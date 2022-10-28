<script lang="ts">
	import { toggleDarkMode } from '$lib/darkMode';
	import { page } from '$app/stores';
</script>

<div
	class="navbar bg-neutral mb-20 w-auto shadow-xl text-primary-content sticky top-0 z-10"
>
	<div class="flex-1">
		<a href="/"><span class="font-bold"  data-sveltekit-prefetch>Plunser Fabios Portfolio</span></a>
	</div>
	<div class="flex-none">
		<div class="flex">
			<a
				data-sveltekit-prefetch
				class:underline={$page.url.pathname === '/projects'}
				class="btn btn-ghost btn-sm rounded-btn"
				href="https://university.fabioplunser.com"
			>
				University
			</a>
			<a
				data-sveltekit-prefetch
				class:underline={$page.url.pathname === '/projects'}
				class="btn btn-ghost btn-sm rounded-btn"
				href="/projects"
			>
				Projects
			</a>
			<a
				data-sveltekit-prefetch
				class:underline={$page.url.pathname === '/posts'}
				class="btn btn-ghost btn-sm rounded-btn"
				href="/posts">Blog</a
			>
			<a
				data-sveltekit-prefetch
				class:underline={$page.url.pathname === '/about'}
				class="btn btn-ghost btn-sm rounded-btn"
				href="/about">About</a
			>
		</div>
	</div>
</div>
