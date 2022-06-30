<script>
	export let dark;
	function toggleDarkMode() {
    dark = !dark;
  }
</script>

<section>
	<h1>Hallo There</h1>
	<p>
		This is a Svelte app.
	</p>
	<button on:click={toggleDarkMode} class="bg-blue-500 hover:bg-blue-700 dark:text-white text-black  font-bold py-2 px-4 rounded">Change Theme</button>
</section>




<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
  