<script>
    import {page} from "$app/stores";
    const Username = import.meta.env.VITE_USERNAME 
    const Password = import.meta.env.VITE_PASSWORD 

    let Username_Input = "";
    let Password_Input = "";

    let loggedIn = false;
    $:{
        if(Username == Username_Input && Password == Password_Input){
            console.log("Login Success")
            loggedIn = true;
        }
    }
</script>


<svelte:head>
    <title>{page.title}</title>
</svelte:head>

{#if !loggedIn}
    <div class="mx-auto flex justify-center">
        <div>
            <h1 class="text-3xl text-bold underline mx-auto justify-center flex">Login for cms</h1>
            <input type="text" placeholder="Username" class="input w-full mx-auto justify-center m-2" bind:value={Username_Input}/>
            <input type="text" placeholder="Passowrd" class="input w-full mx-auto justify-center m-2" bind:value={Password_Input}/>
        </div>
    </div>
{:else}
    <di class="mx-auto justify-center flex">
        <h1>Logged In</h1>
    </di>
{/if}