<script lang="ts">
	import cardTop from '../img/card-top.jpeg';
	let username = '';
	let password = '';	
	export let dark = false;
</script>

<section class="text-center flex justify-center" class:dark>
	<div class="text-black dark:text-white">
		<h1 class="text-6xl">Welcome to my Portfolio Site</h1>
		<h2>Currently I'm a student at the Innsbruck University for computer science in the first semester</h2>
		<br/>
		<h2>You can find some of my Notes and Projects while I'm studying and also a Blog with some tutorials</h2>

		<div class="flex">
			<div class="mt-10 mx-2 text-slate-600 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 max-w-sm rounded-xl overflow-hidden shadow-lg">
				<img class="w-full" src={cardTop} alt="Sunset in the mountains">
				<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">My University Content</div>
				<p>Some content i produced while in University some latex pdfs and stuff</p>
					<a href="/university">
						<button type="button" class="mt-20 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-5">
						Go to Content
						</button>
					</a>
				</div>
			</div>

			<div class="mt-10 mx-2 text-slate-600 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 max-w-sm rounded-xl overflow-hidden shadow-lg">
				<img class="w-full" src={cardTop} alt="Sunset in the mountains">
				<div class="px-6 py-4">
				<div class="font-bold text-xl mb-2">Projects</div>
				<p>Some content i produced while in University some latex pdfs and stuff</p>
					<a href="/university">
						<button type="button" class="mt-20 bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded mr-5">
						Go to Content
						</button>
					</a>
				</div>
			</div>
		</div>

	</div>
</section>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
