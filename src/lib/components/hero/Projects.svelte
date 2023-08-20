<script lang="ts">
	import ProjectCard from './ProjectCard.svelte';
</script>

<section class="mt-12 mx-4">
	<h1 class="text-3xl font-bold flex justify-center">Best Projects</h1>
	<button class="flex justify-center mx-auto btn btn-secondary rounded-2xl mt-8">View All</button>
	<div class="grid grid-rows gap-8 xl:grid-cols-2 mt-8 justify-center mx-auto">
		{#each [1, 2, 3, 4] as project}
			<div class="mx-auto flex gap-8 justify-center items-center">
				<ProjectCard />
			</div>
		{/each}
	</div>
</section>
