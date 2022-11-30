<script lang="ts">
	import { enhance } from '$app/forms';
    let KVSize = 1;
    import TruthTable from "$lib/components/kv/TruthTable.svelte";
</script>



<center>
    <h1 class="text-4xl underline">Karnoug Map Solver</h1>
    <h1 class="text-xl underline">Number Inputs</h1>
    <input type="number" min=1 max=20 placeholder="Type here" class="input w-full max-w-xs" bind:value={KVSize}/>
</center>


<TruthTable Inputlength={KVSize}/>