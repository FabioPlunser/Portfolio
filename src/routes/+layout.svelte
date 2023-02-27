<script lang="ts">
    import '../app.css';
    import Nav from '$components/ui/Nav.svelte';
    import MediaQuery from '$helper/MediaQuery.svelte';
</script>


<MediaQuery query="(min-width: 590px)" let:matches> 
    {#if matches}
            <main class="mx-10 mt-4">
                <Nav/>

                <slot/>
            </main>
    {:else}
        <main class="m-2">        
            <Nav/>
            <slot/>
        </main>
    {/if}
</MediaQuery>