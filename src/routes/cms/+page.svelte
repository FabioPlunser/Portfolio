<script lang="ts">
    import { enhance } from "$app/forms";
    import { invalidateAll } from "$app/navigation";

    import type {PageData} from "./$types"
    export let data: PageData;
    $: data = data.data;
    $: console.log(data);

    const Username = import.meta.env.VITE_USERNAME 
    const Password = import.meta.env.VITE_PASSWORD 
    let Username_Input = "admin";
    let Password_Input = "admin";

    let loggedIn = false;
    $:{
        if(Username == Username_Input && Password == Password_Input){
            console.log("Login Success")
            loggedIn = true;
        }
    } 
</script>


<svelte:head>
    <title>CMS</title>
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
    <h1 class="mx-auto flex justify-center underline text-shadow-xl text-4xl">Logged In</h1>
    <br/>
    <center>
        <div class="mx-auto justify-center">
            <div class="">
                <form method="POST" action="?/addDB" use:enhance>
                    <input type="text" placeholder="title" class="input w-full max-w-fit shadow-xl" name="title" />
                    <input type="text" placeholder="description" class="input w-full max-w-fit shadow-xl" name="description" />
                    <input type="text" placeholder="path" class="input w-full max-w-fit shadow-xl" name="path" />
                    <input type="text" placeholder="icon" class="input w-full max-w-fit shadow-xl" name="icon" />
                    <input type="text" placeholder="date" class="input w-full max-w-fit shadow-xl" name="date" />
                    <button class="btn btn-primary shadow-xl">Add to DB</button>
                </form>
            </div>
        </div>
    </center>

    <br class="mt-24"/>
    <div class="divider"></div>
    {#each data as page}
        <center>
            <div class="mx-auto justify-center w-full">
                <div class="">
                    <form id="form" method="POST" action="?/update"  use:enhance={() => {invalidateAll()}}/>
                        <div class="flex mx-auto justify-center">
                            <h1 class="text-xl m-2 align-center" name="id">ID: {page.id}</h1>
                            <input type="hidden" name="id" value={page.id} form="form"/>
                            <input type="text" placeholder="title" class="input w-full max-w-fit shadow-xl m-1" name="title" value={page.title} form="form" />
                            <input type="text" placeholder="description" class="input w-full max-w-fit shadow-xl m-1" name="description" value={page.description} form="form"/>
                            <input type="text" placeholder="path" class="input w-full max-w-fit shadow-xl m-1" name="path" value={page.path} form="form"/>
                            <input type="text" placeholder="icon" class="input w-full max-w-fit shadow-xl m-1" name="icon" value={page.icon} form="form"/>
                            <input type="text" placeholder="date" class="input w-full max-w-fit shadow-xl m-1" name="date" value={page.date} form="form"/>
                            <button class="btn btn-primary shadow-xl m-1" value="update" name="button" form="form">update</button>
                            <button class="btn btn-primary shadow-xl m-1" value="delete" name="button" form="form">Delete</button>
                        </div>
                </div>
            </div>
        </center>
    {/each}
    <form method="POST" action="?/destroyDB">
        <button class="btn btn-primary shadow-xl">Destroy DB</button>
    </form>
{/if}