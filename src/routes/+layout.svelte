<script lang="ts">
    import '../app.css';
    import Nav from '$components/ui/Nav.svelte';
    import Mobile from "$helper/Mobile.svelte"
    import Desktop from "$helper/Desktop.svelte"
    import Footer from '$components/ui/Footer.svelte';
</script>


<Mobile>
    <main class="m-2">        
        <Nav/>
        <slot/>
        
    </main>
    <div class="mt-48 bottom-0 m-none">
        <Footer/>
    </div>
    
</Mobile>

<Desktop>
    <main class="mx-10 mt-4 h-screen">
        <Nav/>
        <slot/>
        
    </main>
    <div class="fixed bottom-0 w-full">
        <Footer/>
    </div>
</Desktop>

