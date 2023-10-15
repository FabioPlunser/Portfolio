<script lang="ts">
	import { marked } from 'marked';
	import { fly, scale } from 'svelte/transition';
	import {
		quintIn,
		quintInOut,
		cubicInOut,
		bounceIn,
		elasticOut,
		elasticIn,
		bounceOut
	} from 'svelte/easing';
	import { inview } from 'svelte-inview';

	let timelineItems = [
		{
			id: 1,
			date: '2023-08-01',
			company: 'Company 1',
			title: 'React.js Developer',
			description: '# Hallo\n# Test\n - Hallo',
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/934px-Logo_of_Twitter.svg.png',
			inView: false
		},
		{
			id: 2,
			date: '2023-08-10',
			company: 'Company 2',
			title: 'Title 2',
			description: 'Description 2',
			logo: '',
			inView: false
		},
		{
			id: 3,
			date: '2023-08-10',
			company: 'Company 2',
			title: 'Title 3',
			description: 'Description 2',
			logo: '',
			inView: false
		},
		{
			id: 4,
			date: '2023-08-10',
			company: 'Company 2',
			title: 'Title 4',
			description: 'Description 2',
			logo: '',
			inView: false
		},
		{
			id: 5,
			date: '2023-08-10',
			company: 'Company 2',
			title: 'Title 5',
			description: 'Description 2',
			logo: '',
			inView: false
		}
	];

	const options = {
		rootMargin: '-50px'
		// unobserveOnEnter: true
	};

	const handleChange = ({ detail }: any, item: any) => {
		item.inView = detail.inView;
		timelineItems = [...timelineItems];
	};

	function maybe(node: any, options: any, inView: any) {
		if (inView) {
			return options.fn(node, options);
		}
	}

	function maybeOut(node: any, options: any, inView: any) {
		if (!inView) {
			return options.fn(node, options);
		}
	}
	// in:maybe={{ inView: item.inView, fn: fly, delay: 200, x: 50 }}
	$: console.log('timelineItems', timelineItems);
</script>

<section class="mt-12 relative">
	{#each timelineItems as item, i (item.id)}
		<div use:inview={options} on:inview_enter={(detail) => handleChange(detail, item)}>
			<div class="flex justify-center mx-auto relative w-auto m-auto p-4">
				{#key item.inView}
					<div class="absolute top-0 h-full w-2 bg-white">
						{#if i == 0}
							<div
								class="w-[30px] h-[30px] -left-[10px] -mt-[20px] rounded-full absolute bg-white"
							/>
						{/if}
						<div class="relative m-2 {item.inView ? 'block' : 'hidden'} w-full">
							<div class="flex w-full">
								<span
									in:maybe={{
										inView: item.inView,
										fn: scale,
										duration: 500,
										easing: quintInOut
									}}
									class="absolute mt-2 -left-[32px] w-[60px] h-[60px] rounded-full bg-white"
								>
									<div class="flex items-center w-full h-full">
										<img
											in:maybe={{
												inView: item.inView,
												fn: scale,
												duration: 500
											}}
											src="https://keyplus.co.uk/wp-content/uploads/2015/04/mk-illumintations.png"
											alt=""
											class="w-full object-contain"
										/>
									</div>
								</span>
								<div
									in:maybe={{
										inView: item.inView && i % 2 == 0,
										fn: fly,
										duration: 200,
										x: -50,
										delay: 500,
										easing: cubicInOut
									}}
									class="ml-9 w-48 mt-7 {item.inView && i % 2 == 0 ? 'block' : 'hidden'}"
								>
									<h1 class="w-48">{item.date}</h1>
								</div>
								<div
									in:maybe={{
										inView: item.inView && i % 2 == 0,
										fn: fly,
										duration: 200,
										x: 50,
										delay: 500
									}}
									class="-ml-32 w-48 mt-7 {item.inView && i % 2 == 1 ? 'block' : 'hidden'}"
								>
									<h1 class="w-48">{item.date}</h1>
								</div>
							</div>
						</div>
						{#if i == timelineItems.length - 1}
							<div
								class="w-[30px] h-[30px] -left-[10px] mt-[45px] rounded-full absolute bg-white"
							/>
						{/if}
					</div>
				{/key}
				<br class="mt-8 pt-8" />
				<!-- Data -->
				<!-- Right side -->
				{#key item.inView}
					<div class={item.inView && i % 2 == 0 ? 'block ml-[-300px]' : 'hidden'}>
						<div
							in:maybe={{
								inView: item.inView,
								fn: fly,
								duration: 1000,
								x: -100,
								easing: elasticOut
							}}
							class="relative rounded-xl bg-slate-800 p-4 w-full"
						>
							<h1>{item.title}</h1>
							<div>
								<span>{item.company}</span>
								<span>{item.date}</span>
							</div>
							<p class="w-full break-all prose prose-custom">
								{@html marked(item.description)}
							</p>
						</div>
					</div>
				{/key}
				<!-- Left Side -->
				{#key item.inView}
					<div class={item.inView && i % 2 != 0 ? 'block ml-[300px]' : 'hidden'}>
						<div
							in:maybe={{
								inView: item.inView,
								fn: fly,
								duration: 1000,
								x: 25,
								easing: elasticOut
							}}
							class="relative rounded-xl bg-slate-800 p-4 w-full"
						>
							<h1>{item.title}</h1>
							<div>
								<span>{item.company}</span>
								<span>{item.date}</span>
							</div>
							<p class="w-full break-all prose prose-custom">
								{@html marked(item.description)}
							</p>
						</div>
					</div>
				{/key}
			</div>
		</div>
	{/each}
</section>
