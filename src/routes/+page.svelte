<script lang="ts">
	import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
	import { fly, fade } from 'svelte/transition';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';

	let isInView = false;
	let pageLoad = false;
	onMount(() => {
		pageLoad = true;
	});
	$: console.log(isInView);

	const spring = {
		type: 'spring',
		stiffness: 700,
		damping: 30
	};
</script>

<Motion
	initial={{ y: -600 }}
	animate={{ y: 0 }}
	transition={{ ype: 'fly', duration: 0.5 }}
	let:motion
>
	<section id="Hero" class="mt-32 mx-16">
		<div use:motion class="flex justify-center font-bold w-1/3 text-5xl relative z-10">
			<p>
				Hi, <br /> <br /> I'm Fabio Plunser a computer science student with a passion for
				<span class="text-primary">software,</span>
				<span class="text-accent">hardware</span> and
				<span class="text-secondary">network</span>
			</p>
		</div>
	</section>
</Motion>

<div
	use:inview={{ unobserveOnEnter: true, rootMargin: '-30%' }}
	on:inview_change={(event) => {
		isInView = event.detail.inView;
	}}
	id="Projects"
	class="mx-16 mt-32"
>
	{#if isInView}
		<div class="flex justiy-center mx-auto">
			<Motion
				initial={{ y: -50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ type: 'spring', duration: 1.25, delay: 0.25 }}
				let:motion
			>
				<div use:motion class="mx-auto">
					<h1 class="text-5xl font-bold flex justify-center mb-6">Best Projects</h1>

					<div class="relative w-full grid grid-cols-2 gap-8 justify-center mx-auto">
						{#each [1, 2, 3, 4] as i}
							<Motion
								initial={{ x: -100, opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ type: 'spring', duration: 1.25, delay: 0.25 * i }}
								let:motion
							>
								<div use:motion>
									<ProjectCard />
								</div>
							</Motion>
						{/each}
					</div>

					<div class="flex justify-center mt-8">
						<a href="/projects" class="btn btn-primary text-3xl text-white rounded-2xl">View All</a>
					</div>
				</div>
			</Motion>
		</div>
	{/if}
</div>
