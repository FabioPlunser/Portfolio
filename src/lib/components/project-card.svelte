<script>
	export let url = '';
	export let name = '';
	export let slug = '';
	export let description = '';
</script>

<center>
	<div class="container justify-center mx-2 my-2 card w-1/3 shadow-xl image-full">
		<img class="opacity-100" src={url} alt={name} />
		<div class="card-body text-white">
			<h2 class="card-title text-white font-extrabold">{name}</h2>
			<p>{description.slice(0, 80)}...</p>
			<div class="card-actions justify-end">
				<a href={`/projects/${slug}`}>
					<button type="button" class="btn btn-primary">Go to article</button>
				</a>
			</div>
		</div>
	</div>
</center>
