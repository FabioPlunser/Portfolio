<script>
  import Nav from "$lib/components/navMobile.svelte";
//   import Footer from "$lib/components/footer.svelte";
    import "../app.css";
	import MediaQuery from "$lib/components/mediaQuery.svelte";
</script>

<div>
	<main class="">
		<MediaQuery query="(max-width: 480px)" let:matches>
			{#if matches}
				<Nav/>
			{/if}
		</MediaQuery>
		<slot />
		<!-- <Footer /> -->
	</main>
</div>