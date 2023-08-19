<script lang="ts">
	import tilt from '$lib/animations/tilt';
</script>

<div
	use:tilt={{ max: 7, reverse: true }}
	class="card shadow-xl rounded-3xl h-96 backdrop-blur-2xl bg-gray-800/70"
>
	<img
		src="https://picsum.photos/700/300"
		alt=""
		class="rounded-3xl m-2 shadow-2xl backdrop-blur-2xl"
	/>
	<div class=" ml-4">
		<h1 class="card-title font-bold">Project</h1>
		<p>Describing the project in a few words</p>
	</div>
	<div class="absolute bottom-0 right-0 mr-4 mb-4">
		<button class="btn btn-accent rounded-2xl font-bold text-white text-xl">Detail</button>
	</div>
</div>
