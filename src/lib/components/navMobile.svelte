<script lang="ts">
	import Navexpension from './navexpension.svelte';
	import { page } from '$app/stores';
	let openNav = false;
</script>

<nav class="md:bg-gray-800 sticky top-0 z-10">
	<!-- Mobile Nav -->
	<div class="flex items-center m-2  md:hidden">
		<button on:click={()=>openNav=!openNav}>
			<svg class="w-10 h-10 text-white transition duration-300 ease-in-out {openNav ? "rotate-90 " : "rotate-0"} " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
			<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
			</svg>	
		</button>	  
	</div>
	<div class="md:hidden">
	{#if openNav}
		<Navexpension/>
	{/if}
	</div>

</nav>1