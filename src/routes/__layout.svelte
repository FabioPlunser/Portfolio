
<script lang="ts">
    let dark = true;
    import { toggleDarkMode } from "$lib/darkMode";
    $:if(dark){
        toggleDarkMode();
    }
   
    
    import Nav from "../lib/components/nav.svelte"
    import Footer from "../lib/components/footer.svelte"
</script>

<div> 
    <main class=""> 
        <Nav/>
        <slot/>
        <Footer/>
    </main>
</div>
<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
  