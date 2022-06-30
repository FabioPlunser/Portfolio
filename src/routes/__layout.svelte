
<script lang="ts">
    let dark = true;
    import {toggleDarkMode} from "../lib/darkMode"
    import Index from "./index.svelte"
    import Nav from "../components/Nav.svelte"
    import Footer from "../components/footer.svelte"
    $:if(dark) {
        toggleDarkMode();
    }
</script>

<div class:dark class="flex flex-col h-screen bg-white dark:bg-gray-600"> 
    <main class="bg-white dark:bg-gray-600 h-screen flex-grow"> 
        <Nav bind:dark/>
        <slot />
        <Footer dark={dark}/>
    </main>
</div>

<!-- <Index dark={dark}/>
         -->

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
  