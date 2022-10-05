<script>
  import Nav from "$lib/components/nav.svelte";
  import Footer from "$lib/components/footer.svelte";
    import "../app.css";
</script>

<div>
	<main class="">
		<Nav />
		<slot />
		<Footer />
	</main>
</div>