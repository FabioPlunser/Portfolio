<script>
    export let title = "";
    export let description = "";
    export let image = "";
    export let path = "";
</script>

<div class="card w-80 h-24 bg-base-100 shadow-xl image-full text-white z-0">
    <figure><img src={image} alt="Shoes" /></figure>
    <div class="card-body flex p-0 m-4">
      
      <h1 class="card-title text-white p-0">{title}</h1>
      <div class="flex">
        <p class="text-white">{description.slice(0,25)}</p>
        <div class="flex justify-end">
          <button class="bg-teal-600 rounded-xl p-1 text-white shadow-xl hover:bg-teal-700 hover:text-gray-500 "><a href={path}>Go to</a></button>
        </div>
      </div>
    </div>
</div>