<script lang="ts">
	let page_views = 0;

	// export let dark = false;
</script>

<section>
	<div class="hero min-h-screen bg-white dark:bg-base-200">
		<div class="hero-content flex-col lg:flex-row-reverse">
		  <img src="https://placeimg.com/260/400/arch" class="hover:scale-110 ease-in duration-100 max-w-sm rounded-lg shadow-2xl" alt="some"/>
		  <div>
			<h1 class="text-5xl font-bold">Hi!</h1>
			<p class="py-6">Welcome to my Portfolio Site. <br/> On this site i present alle the projects and other things I've done so far in my life</p>
			<a href="/blog"><button class="btn btn-primary">Blog</button></a>
			<a href="/projects"><button class="btn btn-primary">Projects</button></a>
			<div class="stats shadow">
				<div class="stat">
				<div class="stat-title item-center justify-center">Counter for something</div>
				<div class="stat-value">{page_views}</div>
				<button on:click={()=>{page_views++}} class="stat-desc btn btn-secondary">+</button>
			  </div>
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
