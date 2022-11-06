<script>
  	import NavMobile from "$lib/components/navMobile.svelte";
	import Nav from "$lib/components/nav.svelte";
    import "../app.css";
	import MediaQuery from "$lib/components/mediaQuery.svelte";
	
</script>

<svelte:head>
	
	
</svelte:head>

<div>
		<MediaQuery query="(max-width: 480px)" let:matches>
			{#if matches}
				<NavMobile/>
			{:else}
				<Nav/>
			{/if}
		</MediaQuery>
	<main class="dark mt-24">
			<slot />
	</main>
</div>