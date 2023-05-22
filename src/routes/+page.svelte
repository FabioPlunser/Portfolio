<script lang="ts">
    import Test from '$lib/assets/Ich.png';
    import {fly} from "svelte/transition";
    import { onMount } from 'svelte';
    import Mobile from "$helper/Mobile.svelte"
    import Desktop from "$helper/Desktop.svelte"
    import { typewriter } from '$helper/typewriter';
    let rendered = false;
    onMount(()=>{
        rendered = true;
    })
</script>

{#if rendered}
<section>
 
</section>
{/if}
