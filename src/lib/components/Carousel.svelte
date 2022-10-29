<script lang="ts">
	import  Card from '$lib/components/cardphone.svelte';
  export let Projects: any[] = []; 

  export const getItemID = (index: number) =>`carousel-item-${index}`

</script>

<ul class="carousel slide flex overflow-x-auto gap-1 snap-x snap-mandatory">
  {#each Projects as project, index}
    <li id={getItemID(index) } class="shrink-0 snap-center">
      <div class="carousel-item active"> 
        <Card title={project.title} description={project.description} image={project.image} path={project.path}/>
      </div>
    </li>
  {/each}
</ul>


