<script lang="ts">
    import { tick } from 'svelte';
	import { browser } from '$app/environment';
    import { enhance } from "$app/forms";
    import { invalidateAll } from "$app/navigation";
    import { onMount } from 'svelte';


    //
    import '@fontsource/ibm-plex-mono';
    import hljs from 'highlight.js';
	import { marked } from 'marked';

    onMount(()=>{
        marked.setOptions({
		highlight(code, {lang}) {
			if (typeof lang === 'undefined') {
				return hljs.highlightAuto(code).value;
			} else if (lang === 'nohighlight') {
				return code;
			} else {
				return hljs.highlight(lang, code).value;
			}
		}
	    });
    })
    //
    

    import type {PageData} from "./$types"
    export let data: PageData;
    $: data = data.data;
    // $: console.log(data);

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

    // Selected page
    let page = "blog";

    let description = "";
    // -------------------------------------------------------------------------- //
    // Blog Post
    let blogContent = "";
    if(browser){
        blogContent = localStorage.getItem("blogContent");
        if(blogContent === null){
            blogContent = "";
        }
    
    }
    let Blogmarkdown = "";
	$: Blogmarkdown = marked.parse(blogContent);
    $: { if(browser){ localStorage.setItem("blogContent", blogContent); } }
    // -------------------------------------------------------------------------- //

    async function handleKeydown(event: any) {
        if (event.key == 'Tab') {
            event.preventDefault();
            var start = this.selectionStart;
            var end = this.selectionEnd;

            // set textarea value to: text before caret + tab + text after caret
            this.value = this.value.substring(0, start) +
            "\t" + this.value.substring(end);

            // put caret at right position again
            // await tick();
            
            this.selectionStart =
            this.selectionEnd = start + 1;
        }
	}
</script>

<!-- Idea is for complete CSS no page change -->

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
{/if}

{#if loggedIn} 
    <center>
        <div class="btn-group shadow-xl">
            <button on:click={()=>{page="blog"}} class="btn btn-secondary {page == "blog" ? "btn-active": ""}">Blog</button>
            <button on:click={()=>{page="Projects"}} class="btn btn-secondary {page == "Projects" ? "btn-active": ""}">Projects</button>
            <button on:click={()=>{page="Pages"}} class="btn btn-secondary {page == "Pages" ? "btn-active": ""}">Pages</button>
        </div>
    </center>
    
    {#if page=="blog"}
        <div class="mx-auto justify-center">
            <div class="flex flex-row">
                <form class="w-full h-full mx-auto justify-center" method="POST" action="?/addDB" use:enhance>
                        <input type="text" placeholder="title" class="input w-full max-w-fit shadow-xl m-2 flex mx-auto justify-center" name="title" required />
                        <div class="flex w-full flex-start mx-auto justify-center m-10">
                            <div class="w-1/2 min-h-full m-2">
                                <textarea placeholder="content" class="w-full h-full input shadow-xl background-grey-900 border-2 border-gray-700 focus:border-gray-600 rounded-xl p-2"  name="content" bind:value={blogContent} on:keydown={handleKeydown} required></textarea>
                            </div>
                            
                            <div class="w-1/2 min-w-1/2 min-h-full m-2">
                                <div class="w-full h-full  text-white input border-2 border-slate-700 focus:border-gray-600 rounded-xl shadow-xl prose prose-slate dark:prose-invert p-2">{@html Blogmarkdown}</div>
                            </div>
                        </div>
                        <center>
                            <input type="hidden" placeholder="content" value={description} class="input w-full max-w-fit shadow-xl" name="description" required/>
                            <input type="text" placeholder="icon" class="input w-full max-w-fit shadow-xl" name="icon" required/>
                            <input type="date" placeholder="date" class="input w-full max-w-fit shadow-xl" name="date" required/>
                            <button class="btn btn-primary shadow-xl">Add to DB</button>
                        </center>
                </form>
            </div>
        </div>
    {/if}
    {#if page=="Projects"}
        <h1 class="text-xl">Projects CMS</h1>
    {/if}
    {#if page=="Pages"}
        <h1 class="text-xl">Pages CMS</h1>
    {/if}
{/if}


<style>
	@import 'https://unpkg.com/@highlightjs/cdn-assets@10.6.0/styles/atom-one-dark.min.css';
</style>



<!-- {:else}
    <h1 class="mx-auto flex justify-center underline text-shadow-xl text-4xl">Logged In</h1>
    <br/>
    <center>
        <div class="mx-auto justify-center">
            <div class="">
                <form method="POST" action="?/addDB" use:enhance>
                    <input type="text" placeholder="title" class="input w-full max-w-fit shadow-xl" name="title" />
                    <input type="text" placeholder="description" value={description} class="input w-full max-w-fit shadow-xl" name="description" />
                    <input type="text" placeholder="path" class="input w-full max-w-fit shadow-xl" name="path" />
                    <input type="text" placeholder="icon" class="input w-full max-w-fit shadow-xl" name="icon" />
                    <input type="date" placeholder="date" class="input w-full max-w-fit shadow-xl" name="date" />
                    <button class="btn btn-primary shadow-xl">Add to DB</button>
                </form>
            </div>
        </div>
    </center>

    <br class="mt-24"/>
    <div class="divider"></div>
    {#each data as page, i}
        <center>
            <div class="mx-auto justify-center w-full">
                <div class="">
                    <h1 class="text-sm m-2 align-center" name="id">ID: {page._id}</h1>

                    <form id={page._id} method="POST" action="?/update"  use:enhance={() => {invalidateAll()}}>
                        <div class="flex mx-auto justify-center">
                            <input type="hidden" name="id" value={page._id}/>
                            <input type="text" placeholder="title" class="input w-full max-w-fit shadow-xl m-1" name="title" value={page.title}/>
                            <input type="hidden" placeholder="description" class="input w-full max-w-fit shadow-xl m-1" name="description" value={page.description}/>
                            <input type="text" placeholder="path" class="input w-full max-w-fit shadow-xl m-1" name="path" value={page.path}/>
                            <input type="text" placeholder="icon" class="input w-full max-w-fit shadow-xl m-1" name="icon" value={page.icon}/>
                            <input type="date" placeholder="date" class="input w-full max-w-fit shadow-xl m-1" name="date" value={page.date}>
                            <button class="btn btn-primary shadow-xl m-1" value="update" name="button" form={page._id}>update</button>
                            <button class="btn btn-primary shadow-xl m-1" value="delete" name="button" form={page._id}>Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </center>
    {/each}
    <form method="POST" action="?/destroyDB">
        <button class="btn btn-primary shadow-xl">Destroy DB</button>
    </form>
{/if} -->