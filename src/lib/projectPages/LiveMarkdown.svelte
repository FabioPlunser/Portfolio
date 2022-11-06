<script>
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
	$: markdown = marked.parse(source);
</script>


<main class="c">
    <h1 class="mx-auto flex justify-center text-4xl underline text-shadow-lg">Svelte markdown editor</h1>
    
    <div class="flex w-full flex-start">
        <div class="w-1/2 border-2 border-gray-700 min-h-screen background-grey-900 m-10 rounded-xl">
            <textarea  bind:value={source} class="bg-slate-800 w-full h-full text-white p-10 rounded-xl" ></textarea>
        </div>
    
        <div class="w-1/2 border-2 border-gray-700 min-h-screen m-10 text-white rounded-xl">
            <div class="text-white p-10 bg-slate-800 w-full h-full rounded-xl prose">{@html markdown}</div>
        </div>
    </div>
</main>

<style>
	@import 'https://unpkg.com/@highlightjs/cdn-assets@10.6.0/styles/night-owl.min.css';
</style>

