<svelte:head>
  <title>Blog</title>
</svelte:head>

<script context="module">
  export const load = async ({ fetch }) => {
       const res = await fetch("https://jsonplaceholder.typicode.com/posts");
       const blogposts = await res.json();
       return {
           props: {
               blogposts,
           }
       }
  }
</script>

<script>
  export let blogposts;
  $: filteredItems = blogposts;
</script>

<div class="flex justify-center">
  <h1 class="text-black dark:text-slate-300 text-6xl">My Articles</h1>
</div>
<div class="flex justify-center">
  <div class="flex flex-wrap justify-center">
  {#each filteredItems as post}
  <div class="mt-4 mx-2 card w-96 bg-base-100 shadow-xl">
    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">{post.title.substring(0, 20)}</h2>
      <p>{post.body.substring(0, 20)}</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Read More</button>
      </div>
    </div>
  </div>
  {/each}
</div>

</div>


<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
  </style>