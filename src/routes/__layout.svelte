
<script lang="ts">
    let dark = true;
    import {toggleDarkMode} from "$lib/darkMode"
    import Nav from "../components/nav.svelte"
    import Footer from "../components/footer.svelte"
    $:if(dark) {
        toggleDarkMode();
    }
</script>

<div> 
    <main class=" h-screen flex-grow"> 
        <Nav bind:dark/>
        <slot/>
        <Footer/>
    </main>
</div>
<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
  