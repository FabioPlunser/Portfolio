<script lang="ts">
    import Test from '$lib/assets/Test.png';
    import {fly} from "svelte/transition";
    import { onMount } from 'svelte';
    import Mobile from "$helper/Mobile.svelte"
    import Desktop from "$helper/Desktop.svelte"
    import Typewriter from 'svelte-typewriter'
    import { M } from 'svelte-motion'
    let visible = false;
    onMount(()=>{
        visible = true;
    })
</script>


<section>
    {#if visible}
        <Mobile>
            <div transition:fly={{x: -200, duration: 300}} class="mt-24">
                <h1 class="flex-none text-3xl font-bold">Hello, </h1>
                <h1 class="flex-none text-3xl font-bold">I'm Fabio Plunser</h1>
                <div class="absolute">
                    <Typewriter mode="loop" cursor={false}>
                        <h1 class="text-2xl text-primary font-bold">Computer Science Student</h1>
                        <h1 class="text-2xl text-primary font-bold">From Innsbruck</h1>
                        <h1 class="text-2xl text-primary font-bold">Passionate programmer</h1>
                    </Typewriter>
                </div>
                <!-- <div class="mt-10">
                    <a href="#skills" class="btn btn-primary">Skills</a>
                    <a href="#projects" class="btn btn-primary">Projects</a>
                    <a href="/blog" class="btn btn-primary">Blog</a>
                </div> -->
                <!-- <i class="bi bi-envelope text-primary font-bold"></i> <a class="text-primary font-bold" href="mailto:f.plunser@outlook.com">f.plunser@outlook.com</a> -->
            </div>
            <!-- <div class="overflow-hidden  bg-base-300 rounded-full p-4 flex justify-center items-center max-w-sm">
                <img transition:fly={{y: 200, duration:300}} src={Test} alt="Hero" class="rounded-full" />
            </div> -->


            <!-- <div class="mt-96 font-bold text-3xl">
                <h1>Most recent Project</h1>
                <h1>Most recent Blog Post</h1>
            </div> -->
        </Mobile>
    {/if}

    <Desktop>
        <div class="mt-20 flex justify-center">
            <div class="flex">
                <div class="items-center my-auto relative">
                    <h1 class="text-5xl font-bold">Hello, </h1>
                    <h1 class="text-5xl font-bold">I'm Fabio Plunser</h1>
                    <div class="absolute">
                        <Typewriter mode="loop" cursor={false}>
                            <h1 class="text-3xl text-primary font-bold">Computer Science Student</h1>
                            <h1 class="text-3xl text-primary font-bold">From Innsbruck</h1>
                            <h1 class="text-3xl text-primary font-bold">Passionate programmer</h1>
                        </Typewriter>
                    </div>
                    <div class="mt-20">
                        <button class="btn btn-primary text-3xl">Skills</button>
                        <button class="btn btn-primary text-3xl">Projects</button>
                        <button class="btn btn-primary text-3xl">Blog</button>
                    </div>
                    <i class="bi bi-envelope text-2xl"></i> <a class="text-2xl" href="mailto:f.plunser@outlook.com">f.plunser@outlook.com</a>
                </div>
                <img src={Test} alt="Hero" class="max-w-xl" />
            </div>
        </div>
    </Desktop>
    
  
</section>
