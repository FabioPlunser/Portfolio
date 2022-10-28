<script>
	export let url = '';
	export let name = '';
	export let slug = '';
	export let description = '';
</script>

<center>
	<div class="container justify-center mx-2 my-2 card w-auto md:w-1/3 shadow-xl z-0 bg-neutral">
		<img class="opacity-100" src={url} alt={name} />
		<div class="card-body dark:text-white">
			<h2 class="card-title dark:text-white font-extrabold underline">{name}</h2>
			<p>{description.slice(0, 80)}...</p>
			<div class="card-actions justify-end">
				<a href={`/projects/${slug}`}>
					<button type="button" class="btn btn-primary">Go to article</button>
				</a>
			</div>
		</div>
	</div>
</center>
