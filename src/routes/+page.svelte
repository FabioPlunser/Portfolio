
<script>
 	import Carousel from "$lib/components/Carousel.svelte";

	let Projects = [
		{title: "Project 1", description: "This is a description of project 1", image: "https://picsum.photos/400/400", path: "/project1"},
		{title: "Project 2", description: "This is a description of project 2", image: "https://picsum.photos/400/300", path: "/project2"},
		{title: "Project 3", description: "This is a description of project 3", image: "https://picsum.photos/400/500", path: "/project3"},
		{title: "Project 4", description: "This is a description of project 3", image: "https://picsum.photos/400/200", path: "/project4"},

	]
</script>
<svelte:head>
	<title>My Portfolio project</title>
</svelte:head>

<!-- Hero -->
<section class="bg-transparent">
	<!-- svelte-ignore a11y-img-redundant-alt -->
	<div class="content flex " >
		<div class="m-2">
			<h1 class="text-bold text-shadow-lg text-4xl">Hi I'm Fabio Plunser</h1>
			<p class="text-shadow-lg">A student for computer science in Innsbruck.</p>
			<p>On this side you find my Projects, Idead ad things to help students in university</p>
		</div>
		<div class="w-full m-2">
			<img class="shadow-xl rounded-xl" alt="hero" src="img/picture.webp"/>
		</div>
	</div>
	<div class="z-0">
		<div>
			<h2 class="text-2xl text-shadow-lg p-2">Projects</h2>
			<div class="mx-2">
			<Carousel Projects={Projects}/>
			</div>
		</div >		
		<div>
			<h2 class="text-2xl text-shadow-lg p-2">Blog</h2>
			<div class="mx-2">
			<Carousel Projects={Projects}/>
			</div>
		</div >		
		<div>
			<h2 class="text-2xl text-shadow-lg p-2">Uni</h2>
			<div class="mx-2">
			<Carousel Projects={Projects}/>
			</div>
		</div>	
	</div>
</section>