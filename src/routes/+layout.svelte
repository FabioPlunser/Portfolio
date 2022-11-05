<script>
  	import NavMobile from "$lib/components/navMobile.svelte";
	import Nav from "$lib/components/nav.svelte";
//   import Footer from "$lib/components/footer.svelte";
    import "../app.css";
	import MediaQuery from "$lib/components/mediaQuery.svelte";
</script>

<div>
	<main class="dark">
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