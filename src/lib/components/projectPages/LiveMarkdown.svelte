<script>
	import { browser } from '$app/environment';
    import '@fontsource/ibm-plex-mono';
	import hljs from 'highlight.js';
	import { marked } from 'marked';
	marked.setOptions({
		highlight: function (code, lang, _callback) {
			if (typeof lang === 'undefined') {
				return hljs.highlightAuto(code).value;
			} else if (lang === 'nohighlight') {
				return code;
			} else {
				return hljs.highlight(lang, code).value;
			}
		}
	});

	let source = "";
	if(browser){
		source = localStorage.getItem("source");
		if(source === null){
			source = "";
		}
	}

	$: markdown = marked.parse(source);
	$: { if(browser){ localStorage.setItem("source", source); } }
	let filename="";
	function download(content, mimeType){
		const a = document.createElement('a') // Create "a" element
		const blob = new Blob([source], {type: "text/md"}) // Create a blob (file-like object)
		const url = URL.createObjectURL(blob) // Create an object URL from blob
		a.setAttribute('href', url) // Set "a" element link
		if(filename === ""){
			a.setAttribute('download', "untitled.md") // Set "a" element download attribute
		}else{
			a.setAttribute('download', filename) // Set "a" element download attribute
		}
		a.click() // Start downloading
	}
	function clear(){
		source = "";
	}
</script>


<main class="c">
    <h1 class="mx-auto flex justify-center text-4xl underline text-shadow-lg">Svelte markdown editor</h1>
    
    <div class="flex w-full flex-start">
        <div class="w-1/2 border-2 border-gray-700 min-h-1/2 background-grey-900 m-10 rounded-xl">
            <textarea  bind:value={source} class="bg-slate-800 w-full h-full text-white p-10 rounded-xl" ></textarea>
        </div>
		
        <div class="w-1/2 border-2 border-gray-700 min-h-1/2 m-10 text-white rounded-xl">
            <div class="text-white p-10 bg-slate-800 w-full h-full rounded-xl prose">{@html markdown}</div>
        </div>
    </div>
	<div class="mx-auto flex justify-center">
		<input placeholder="filename" type="text" class="input m-2" bind:value={filename}/>
		<button class="btn btn-primary m-2" on:click={()=>download()}>Download text as md</button>
		<button class="btn btn-primary m-2" on:click={()=>clear()}>Clear</button>
	</div>
</main>

<style>
	@import 'https://unpkg.com/@highlightjs/cdn-assets@10.6.0/styles/night-owl.min.css';
</style>

