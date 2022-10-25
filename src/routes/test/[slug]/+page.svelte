<script lang="ts">
    import {page} from "$app/stores";
    import { onMount } from "svelte";
    let url = $page.url.pathname.slice(1);

    let Component: any;
    let path = `$lib/blogPages/${url}.svelte`
    onMount(async () => {
        /* @vite-ignore */
        Component = (await import(path)).default;
    });
</script>


<svelte:component this={Component} />

