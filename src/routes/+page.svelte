<script lang="ts">
    import Test from '$lib/assets/Ich.png';
    import {fly} from "svelte/transition";
    import { onMount } from 'svelte';
    import Mobile from "$helper/Mobile.svelte"
    import Desktop from "$helper/Desktop.svelte"

    let visible = false;
    onMount(()=>{
        visible = true;
    })
</script>

{#if visible}
<section>
    <Mobile>
        <div transition:fly={{x: -200, duration: 300}} class="mt-24">
            <h1 class="flex-none text-3xl font-bold">Hello, </h1>
            <h1 class="flex-none text-3xl font-bold">I'm Fabio Plunser</h1>
            <h1 class="flex-none text-3xl font-bold">Student for computer science</h1>
            <h1 class="flex-none text-2xl text-primary">From Innsbruck</h1>
        </div>
        <img transition:fly={{y: 200, duration:300}} src={Test} alt="Hero" class="fixed max-w-xl"/>
    </Mobile>

    <Desktop>
        <div class="mt-20 flex justify-center">
            <div class="flex">
                <div class="items-center my-auto relative">
                    <h1 class="text-5xl font-bold">Hello, </h1>
                    <h1 class="text-5xl font-bold">I'm Fabio Plunser</h1>
                    <h1 class="text-5xl font-bold">Student for computer science</h1>
                    <h1 class="text-5xl text-primary">From Innsbruck</h1>
                    <div>
                        <button class="btn btn-primary mt-10 text-3xl">Skills</button>
                        <button class="btn btn-primary mt-10 text-3xl">Projects</button>
                        <button class="btn btn-primary mt-10 text-3xl">Blog</button>
                    </div>
                    <i class="bi bi-envelope text-2xl"></i> <a class="text-2xl" href="mailto:f.plunser@outlook.com">f.plunser@outlook.com</a>
                </div>
                <img src={Test} alt="Hero" class="fixed max-w-xl" />
            </div>
        </div>
    </Desktop>
    
  
</section>
{/if}