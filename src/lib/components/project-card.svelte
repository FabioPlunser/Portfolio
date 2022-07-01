<script>
    export let url = ''
    export let name = ''
    export let slug = ''
    export let description = ''
  </script>
  


<div class="mx-2 my-2 card w-96 shadow-xl image-full">
    <figure><img src={url} alt={name} /></figure>
    <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>{description.slice(0, 80)}...</p>
        <div class="card-actions justify-end">
            <a href={`/projects/${slug}`}>
                <button type="button" class="btn btn-primary">Go to article</button>
            </a>
        </div>
    </div>
</div>