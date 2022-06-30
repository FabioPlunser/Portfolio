
<script>
    let dark = true;
    import Index from "./index.svelte"
</script>

<div class:dark>
    <main class="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
        <Index bind:dark/>
        <!-- <button on:click={dark} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Change Theme</button> -->
        <!-- <slot/> -->
    </main>
</div>


<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
  