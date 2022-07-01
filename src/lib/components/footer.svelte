<footer
	class="p-2 footer fixed bottom-0 mt-20 bg-white text-black dark:bg-neutral dark:text-primary-content footer-center text-2xl"
>
	<div class="grid grid-flow-col gap-4">
		<a class="link link-hover" href="/projects">Portfolio</a>
		<a class="link link-hover" href="/posts">Blog</a>
		<a class="link link-hover" href="/about">About</a>
	</div>
	<div>
		<div class="grid grid-flow-col gap-4">
			<a
				class="hover:scale-110 hover:text-slate-800 ease-in-out duration-100"
				href="https://www.youtube.com/channel/UCbzT1ByipJR_08pG3zGH2-Q"
				target="_blank"
			>
				<i class="bi bi-youtube" />
			</a>
			<a
				class="hover:scale-110 hover:text-slate-800 ease-in-out duration-100"
				href="https://github.com/FabioPlunser"
				target="_blank"
			>
				<i class="bi bi-github" />
			</a>
		</div>
	</div>
	<div>
		<p>
			Copyright &copy; {`${new Date().getFullYear()}`} - All right reserved by ME
		</p>
	</div>
</footer>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
