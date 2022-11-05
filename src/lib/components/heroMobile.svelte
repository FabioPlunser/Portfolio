<script lang="ts">
    import Carousel from "./Carousel.svelte";
    export let Projects;
</script>

<section class="bg-transparent">
    <!-- svelte-ignore a11y-img-redundant-alt -->
    <div class="content flex " >
        <div class="m-2">
            <h1 class="text-bold text-shadow-lg text-4xl">Hi I'm Fabio Plunser</h1>
            <p class="text-shadow-lg">A student for computer science in Innsbruck.</p>
            <p>On this side you find my Projects, Idead ad things to help students in university</p>
        </div>
        <div class="w-full m-2">
            <img class="shadow-xl rounded-xl" alt="hero" src="/img/picture.webp"/>
        </div>
    </div>
    <div class="z-0">
        <div>
            <h2 class="text-2xl text-shadow-lg p-2">Projects</h2>
            <div class="mx-2">
            <Carousel Projects={Projects}/>
            </div>
        </div >		
        <div>
            <h2 class="text-2xl text-shadow-lg p-2">Blog</h2>
            <div class="mx-2">
            <Carousel Projects={Projects}/>
            </div>
        </div >		
        <div>
            <h2 class="text-2xl text-shadow-lg p-2">Uni</h2>
            <div class="mx-2">
            <Carousel Projects={Projects}/>
            </div>
        </div>	
    </div>
</section>