<script>
	import { toggleDarkMode } from '$lib/darkMode';
</script>

<div
	class="navbar bg-slate-600 dark:bg-neutral mb-20 w-auto mx-5 shadow-xl text-primary-content rounded-box sticky top-0 z-10"
>
	<div class="flex-1 px-2 mx-2">
		<a href="/"><span class="text-lg font-bold text-4xl">Plunser Fabios Portfolio</span></a>
	</div>
	<div class="flex-none px-2 mx-2">
		<div class="flex">
			<a class="btn btn-ghost btn-sm rounded-btn text-2xl" href="/projects"> Projects </a>
			<a class="btn btn-ghost btn-sm rounded-btn text-2xl" href="/posts">Blog</a>
			<a class="btn btn-ghost btn-sm rounded-btn text-2xl" href="/about">About</a>
			<a><button /></a>
			<i
				class="bi bi-moon-fill text-3xl text-slate-800 dark:text-white hover:scale-110 ease-in-out duration-100 shadow-xl"
				on:click={toggleDarkMode}
			/>
		</div>
	</div>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
