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

    // Selected page
    let page: string = "Blog";
    let pageContent = "edit";
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

    let blogPicture = "/img/icon.png";

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
            <button on:click={()=>{page="Blog"}} class="btn btn-secondary {page == "Blog" ? "btn-active": ""}">Blog</button>
            <button on:click={()=>{page="Project"}} class="btn btn-secondary {page == "Project" ? "btn-active": ""}">Projects</button>
            <button on:click={()=>{page="Page"}} class="btn btn-secondary {page == "Page" ? "btn-active": ""}">Pages</button>
        </div>
    </center>

    <br/>
    
    {#if page=="Blog"}
        <center>
            <div class="btn-group shadow-xl">
                <button on:click={()=>{pageContent="create"}} class="btn btn-secondary {pageContent == "create" ? "btn-active": ""}">Create</button>
                <button on:click={()=>{pageContent="edit"}} class="btn btn-secondary {pageContent == "edit" ? "btn-active": ""}">Edit</button>
            </div>
        </center>
        <br/>
        {#if pageContent == "create"}
            <div class="m-5">
                <form class="w-full h-full mx-auto justify-center" method="POST" action="?/add{page}" use:enhance>
                        <input type="hidden" name="id"/>
                            <input type="text" placeholder="title" class="input w-full shadow-xl justify-center" name="title" required />
                            <div class="flex w-full flex-start mx-auto justify-center">
                                <div class="w-1/2 min-h-full m-2">
                                    <textarea bind:value={blogContent} placeholder="content" class="w-full h-full input shadow-xl background-grey-900 border-2 border-gray-700 focus:border-gray-600 rounded-xl p-2" name="content" on:keydown={handleKeydown} required ></textarea>
                                </div>
                                
                                <div class="w-1/2 min-w-1/2 min-h-full m-2">
                                    <div class="w-full h-full  text-white input border-2 border-slate-700 focus:border-gray-600 rounded-xl shadow-xl prose prose-slate dark:prose-invert p-2">{@html Blogmarkdown}</div>
                                </div>
                            </div>
                            <center>
                                <input bind:value={blogPicture} type="text" placeholder="icon" class="input w-full max-w-fit shadow-xl" name="icon" required/>
                                <img  class="avatar rounded-full w-24" src={blogPicture} alt="Blog Icon"/>
                                <div class="m-2">
                                    <input type="date" placeholder="date" class="input w-full max-w-fit shadow-xl" name="date" required/>
                                    <button class="btn btn-primary shadow-xl">Add to DB</button>
                                </div>
                            </center>
                </form>
            </div>
        {/if}

        {#if pageContent == "edit"}
        <div class="divider"></div> 
            {#each data.blog as content, i}
                    <div class="m-5">
                        <h1 class="flex mx-auto justify-center text-sm m-2 align-center" name="id">ID: {content._id}</h1>
                        <form id={content._id} method="POST" action="?/update{page}"  use:enhance={() => {invalidateAll()}}>
                            <input type="hidden" name="id" value={content._id}/>
                            <input value={content.title} type="text" placeholder="title" class="input w-full shadow-xl justify-center" name="title" required />
                            <div class="flex w-full flex-start mx-auto justify-center">
                                <div class="w-1/2 min-h-full m-2">
                                    <textarea value={content.content} placeholder="content" class="w-full h-full input shadow-xl background-grey-900 border-2 border-gray-700 focus:border-gray-600 rounded-xl p-2" name="content" on:keydown={handleKeydown} required ></textarea>
                                </div>
                                
                                <div class="w-1/2 min-w-1/2 min-h-full m-2">
                                    <div class="w-full h-full  text-white input border-2 border-slate-700 focus:border-gray-600 rounded-xl shadow-xl prose prose-slate dark:prose-invert p-2">{@html marked.parse(content.content)}</div>
                                </div>
                            </div>
                            <center>
                                <input value={content.icon} type="text" placeholder="icon" class="input w-full max-w-fit shadow-xl" name="icon" required/>
                                <img  class="avatar rounded-full w-24" src={content.icon} alt="{content.id} Icon"/>
                                <div>
                                     <input value={content.date} type="date" placeholder="date" class="input w-full max-w-fit shadow-xl" name="date" required/>
                                    <button class="btn btn-primary shadow-xl m-1" value="update" name="button" form={content._id}>update</button>
                                    <button class="btn btn-primary shadow-xl m-1" value="delete" name="button" form={content._id}>Delete</button>
                                </div>
                            </center>
                        </form>
                    </div>
                    <div class="divider"></div> 
            {/each}
        {/if}
        
    {/if}
    {#if page=="Project"}
        <h1 class="text-xl">Projects CMS</h1>
    {/if}
    {#if page=="Page"}
        <h1 class="text-xl">Pages CMS</h1>
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
        {#each data.pages as content, i}
            <center>
                <div class="mx-auto justify-center w-full">
                    <div class="">
                        <h1 class="text-sm m-2 align-center" name="id">ID: {content._id}</h1>
                        <form id={content._id} method="POST" action="?/update{page}"  use:enhance={() => {invalidateAll()}}>
                            <div class="flex mx-auto justify-center">
                                <input type="hidden" name="id" value={content._id}/>
                                <input type="text" placeholder="title" class="input w-full max-w-fit shadow-xl m-1" name="title" value={content.title}/>
                                <input type="hidden" placeholder="description" class="input w-full max-w-fit shadow-xl m-1" name="description" value={content.description}/>
                                <input type="text" placeholder="path" class="input w-full max-w-fit shadow-xl m-1" name="path" value={content.path}/>
                                <input type="text" placeholder="icon" class="input w-full max-w-fit shadow-xl m-1" name="icon" value={content.icon}/>
                                <input type="date" placeholder="date" class="input w-full max-w-fit shadow-xl m-1" name="date" value={content.date}>
                                <button class="btn btn-primary shadow-xl m-1" value="update" name="button" form={content._id}>update</button>
                                <button class="btn btn-primary shadow-xl m-1" value="delete" name="button" form={content._id}>Delete</button>
                            </div>
                        </form>
                    </div>
                </div>
            </center>
        {/each}
        <form method="POST" action="?/destroyDB">
            <button class="btn btn-primary shadow-xl">Destroy DB</button>
        </form>
    {/if}
{/if}


<style>
	@import 'https://unpkg.com/@highlightjs/cdn-assets@10.6.0/styles/atom-one-dark.min.css';
</style>



