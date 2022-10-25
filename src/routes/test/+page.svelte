<script>
    async function loadComponent(name) {
		console.log(`../../lib/blogPages/${name}.svelte`);
        let component = await import(`../../lib/blogPages/${name}.svelte`);
        console.log(component.default)
        return component;
    }

	const components = [
		{name: 'rieser'},
		{name: 'hallo'}
	];

    let title = "";
</script>


{#each components as component}
    {#await loadComponent(component.name) then myComponent}
        <svelte:component this={myComponent.default} bind:title={title}/>
        {title}
    {/await}
{/each}

