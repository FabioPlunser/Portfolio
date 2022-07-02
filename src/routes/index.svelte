<script>
	class Projects {}
	let page_views = 0;
	export let projects;
	export let authors;
</script>

<svelte:head>
	<title>My Portfolio project</title>
</svelte:head>

<section
	class="flex justify-center text-primary-content text-black dark:text-primary-content text-2xl"
>
	<div class="hero bg-white dark:bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse">
			<img
				src="https://placeimg.com/260/400/arch"
				class="hover:scale-110 ease-in duration-100 max-w-sm rounded-lg shadow-2xl"
				alt="some"
			/>
			<div>
				<h1 class="text-5xl font-bold">Hi!</h1>
				<p class="py-6">
					Welcome to my Portfolio Site. <br /> On this site i present alle the projects and other things
					I've done so far in my life
				</p>
				<a href="/posts"><button class="btn btn-primary text-xl">Blog</button></a>
				<a href="/projects"><button class="btn btn-primary text-xl">Projects</button></a>
			</div>
		</div>
	</div>
</section>
