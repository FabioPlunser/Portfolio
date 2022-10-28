<script lang="ts">
    import {getData} from "./sql";
    import Spinner from "$ib/components/spinner.svelte";
    let input = "";
    let password = import.meta.env.VITE_ADMIN_PASSWORD

    let login = false;
    $:{
            if(input === password){
            login = true
        }
    }
</script>

<svelte:head>
    <title>Admin Page</title>
</svelte:head>

<center>
<h1 class="text-4xl underline text-white m-2">Admin Page</h1>

{#if !login}
    <input bind:value={input} type="text" placeholder="Type here" class="input w-full max-w-xs" />
{/if}

{#if login}
    <button class="btn btn-primary" on:click={()=>login=false}><a href="/">Log Out</a></button>
    <div>
        {#await getData()}
            <Spinner/>
        {:then data} 
            <table class="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Pciture</th>
                        <th>Description</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {#each data as row}
                        <tr>
                            <td>{row.title}</td>
                            <!-- svelte-ignore a11y-img-redundant-alt -->
                            <td><img src={row.picture} alt="picture of row"/></td>
                            <td>{row.Description}</td>
                            <td>{row.Link}</td>
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/await}
    </div>
{/if}

</center>