<script lang="ts">
	let timelineItems = [
		{
			date: '2023-08-01',
			company: 'Company 1',
			title: 'React.js Developer',
			description: "Making something niceaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
			logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/934px-Logo_of_Twitter.svg.png'
		},
		{
			date: '2023-08-10',
			company: 'Company 2',
			title: 'Title 2',
			description: 'Description 2',
			logo: ''
		},
		// {
		// 	date: '2023-08-20',
		// 	company: 'Company 3',
		// 	title: 'Title 3',
		// 	description: 'Description 3',
		// 	logo: ''
		// }
		// Add more timeline items as needed
	];
</script>

<section class="mt-12 relative">
	<div class="mt-20 flex flex-col">
		{#each timelineItems as item}
			<div class="relative w-full m-auto p-4 ">
				<div class="absolute top-0 h-full w-1 bg-white">
					<div class="relative m-2">
						<span class="absolute top-0 -left-[25px] w-[40px] h-[40px] rounded-full bg-white">
							<div class="flex justify-center items-center w-full h-full">
								<img src={item.logo} alt="" class="object-contain w-[70%]" />
							</div>
						</span>
					</div>
				</div>
				<div class="relative ml-[30px] rounded-xl bg-slate-800 p-4 animate__animated animate__bounceInRight">
					<h1 class="text-2xl font-bold flex justify-start">{item.title}</h1>
					<div class="flex gap-4 text-gray-500">
						<span>{item.company}</span>
						<span>{item.date}</span>
					</div>
					<p class="w-full break-all">
						{item.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
