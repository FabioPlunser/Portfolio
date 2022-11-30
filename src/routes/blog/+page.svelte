<script lang="ts">
	import { MediaQuery } from '$lib/components/mediaQuery.svelte';
    import BlogCard from "$lib/components/blogCard.svelte";
    export let data; 
</script>

<!-- Displa all Blogs -->


<MediaQuery query="(max-width: 480px)">
    <div class="blog-container">
        {#each data as blog}
            <BlogCard {blog} />
        {/each}
    </div>
</MediaQuery>