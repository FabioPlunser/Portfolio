<script>
  	import NavMobile from "$lib/components/navMobile.svelte";
	import Nav from "$lib/components/nav.svelte";
    import "../app.css";
	import MediaQuery from "$lib/components/mediaQuery.svelte";
	// import { SvelteToast } from '@zerodevx/svelte-toast'
	
</script>

<svelte:head>
	
	
</svelte:head>

<div>
	<main class="dark">
		<!-- <SvelteToast {options} /> -->
		<MediaQuery query="(max-width: 480px)" let:matches>
			{#if matches}
				<NavMobile/>
			{:else}
				<Nav/>
			{/if}
		</MediaQuery>
		<slot />
	</main>
</div>