<script>
	import { toggleDarkMode } from '$lib/darkMode';
	import { page } from '$app/stores';
</script>

<div
	class="navbar bg-neutral mb-20 w-auto mx-5 shadow-xl text-primary-content rounded-box sticky top-0 z-10"
>
	<div class="flex-1">
		<a href="/"><span class="font-bold">Plunser Fabios Portfolio</span></a>
	</div>
	<div class="flex-none">
		<div class="flex">
			<a
				class:underline={$page.url.pathname === '/projects'}
				class="btn btn-ghost btn-sm rounded-btn"
				href="/projects"
			>
				Projects
			</a>
			<a
				class:underline={$page.url.pathname === '/posts'}
				class="btn btn-ghost btn-sm rounded-btn"
				href="/posts">Blog</a
			>
			<a
				class:underline={$page.url.pathname === '/about'}
				class="btn btn-ghost btn-sm rounded-btn"
				href="/about">About</a
			>
			<i
				class="bi bi-moon-fill text-3xl text-slate-800 dark:text-white hover:scale-110 ease-in-out duration-100 shadow-xl"
				on:click={toggleDarkMode}
			/>
		</div>
	</div>
</div>
