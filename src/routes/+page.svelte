<script lang="ts">
	import HeroBackground from '$lib/images/yellow-bg.svg.svelte';
	import HeroImage from '$lib/images/me_denoised.png';
	import Testimonial from '$lib/components/Testimonial.svelte';
</script>

<section class="mt-24 mx-4">
	<div class="flex justify-center font-bold w-64 text-3xl relative z-10">
		<p>
			Hi, I'm Fabio Plunser a computer science student 
            <!-- with a passion for
			<span class="text-primary">software,</span>
			<span class="text-accent">hardware</span> and
			<span class="text-secondary">network</span> -->
		</p>
	</div>

	<button class="btn mt-4 rounded-2xl font-bold text-2xl text-white">Contact</button>
	<div class="relative overflow-hidden">
		<div class="absolute top-0 left-0 w-full h-full">
			<HeroBackground />
		</div>
	</div>
	<!-- ------------------------------------------------------------------- -->
	<br />
	<h1 class="text-3xl font-bold underline flex justify-center">Best Project</h1>
	<div class="flex justify-center mt-4">
		<div class="card w-full bg-slate-800 shadow-xl mx-4">
			<div class="rounded-2xl flex justify-center p-4">
				<img src="https://picsum.photos/400/400" alt="Placeholder" class="rounded-2xl" />
			</div>
		</div>
	</div>
	<!--  -->
	<br />
	<h1 class="text-3xl font-bold underline flex justify-center">Testimonials</h1>
	<Testimonial />
</section>
