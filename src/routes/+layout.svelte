<script>
  	import NavMobile from "$lib/components/navMobile.svelte";
	import Nav from "$lib/components/nav.svelte";
    import "../app.css";
	import MediaQuery from "$lib/components/mediaQuery.svelte";
	import Notifications from 'svelte-notifications';
	// import { SvelteToast } from '@zerodevx/svelte-toast'
	
</script>

<svelte:head>
	
	
</svelte:head>

<div>
		<!-- <SvelteToast {options} /> -->
		<MediaQuery query="(max-width: 480px)" let:matches>
			{#if matches}
				<NavMobile/>
			{:else}
				<Nav/>
			{/if}
		</MediaQuery>
	<main class="dark mt-24">
		<Notifications>
			<slot />
		</Notifications>
	</main>
</div>