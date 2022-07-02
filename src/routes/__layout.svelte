<script lang="ts">
	import Nav from '../lib/components/nav.svelte';
	import Footer from '../lib/components/footer.svelte';
	import '../input.css';
</script>

<div>
	<main class="">
		<Nav />
		<slot />
		<Footer />
	</main>
</div>
