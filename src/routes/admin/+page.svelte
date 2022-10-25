<script lang="ts">
  import { ClientError } from "graphql-request";

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
{/if}

</center>