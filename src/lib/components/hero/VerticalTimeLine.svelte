<script lang="ts">
	import { marked } from 'marked';
	import { fly, scale } from 'svelte/transition';
	import { quintIn, quintInOut, cubicInOut, bounceIn } from 'svelte/easing';
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
		<div
			use:inview={options}
			on:inview_enter={(detail) => handleChange(detail, item)}
			on:inview_leave={(detail) => {
				console.log('inview_leave');
				handleChange(detail, item);
			}}
		>
			<div class="flex justify-center mx-auto relative w-auto m-auto p-4">
				{#key item.inView}
					<div class="absolute top-0 h-full w-2 bg-white">
						<div class="relative m-2 {item.inView ? "block" : "hidden"}">
							<span
								in:maybe={{
									inView: item.inView,
									fn: scale,
									duration: 500,
									easing: quintInOut
								}}
								class="absolute mt-2 -left-[32px] w-[60px] h-[60px] rounded-full bg-white"
							>
								<div class="flex justify-center items-center w-full h-full">
									<img
										in:maybe={{
											inView: item.inView,
											fn: scale,
											duration: 500,
											delay: 400
										}}
										src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/934px-Logo_of_Twitter.svg.png"
										alt=""
										class="object-contain w-[70%]"
									/>
								</div>
							</span>
						</div>
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
								duration: 800,
								x: -100,
								easing: cubicInOut
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
								duration: 800,
								x: 500,
								easing: cubicInOut
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
	<!-- Mobile timeline -->®®
	<!-- <div class="mt-48 flex flex-col">
		{#each timelineItems as item, i (item.id)}
			<div>
				<div
					use:inview={options}
					on:inview_enter={(detail) => handleChange(detail, item)}
					on:inview_leave={(detail) => {
						console.log('inview_leave');
						handleChange(detail, item);
					}}
				>
					{#key item.inView}
						<div class="relative w-full m-auto p-4">
							<div
								in:maybe={{ inView: item.inView, fn: fly, delay: 200, y: -30, duration: 200 }}
								class="{item.inView ? 'block' : 'hidden'} absolute top-0 h-full w-1 bg-white"
							>
								<div class="relative m-2">
									<span class="absolute top-0 -left-[25px] w-[40px] h-[40px] rounded-full bg-white">
										<div class="flex justify-center items-center w-full h-full">
											<img src={item.logo} alt="" class="object-contain w-[70%]" />
										</div>
									</span>
								</div>
							</div>
							<div class={item.inView ? 'block' : 'hidden'}>
								<div
									in:maybe={{ inView: item.inView, fn: fly, delay: 200, x: 50 }}
									class="relative ml-[30px] rounded-xl bg-slate-800 p-4"
								>
									<h1 class="text-2xl font-bold flex justify-start">{item.title}</h1>
									<div class="flex gap-4 text-gray-500">
										<span>{item.company}</span>
										<span>{item.date}</span>
									</div>
									<p class="w-full break-all prose prose-custom">
										{@html marked(item.description)}
									</p>
								</div>
							</div>
						</div>
					{/key}
				</div>
			</div>
		{/each}
	</div> -->
</section>
