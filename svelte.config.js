/** @type {import('@sveltejs/kit').Config} */
import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess';
// import adapter from 'svelte-adapter-deno';
const config = {
	// options passed to svelte.compile (https://svelte.dev/docs#compile-time-svelte-compile)
	compilerOptions: {},

	// an array of file extensions that should be treated as Svelte components
	extensions: ['.svelte'],
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter(),
		alias: {},
		appDir: '_app',
		browser: {
			hydrate: true,
			router: true
		},
		csp: {
			mode: 'auto',
			directives: {
				'default-src': undefined
				// ...
			}
		},
		moduleExtensions: ['.js', '.ts'],
		files: {
			assets: 'static',
			hooks: 'src/hooks',
			lib: 'src/lib',
			params: 'src/params',
			routes: 'src/routes',
			serviceWorker: 'src/service-worker',
			template: 'src/app.html'
		},
		floc: false,
		inlineStyleThreshold: 0,
		methodOverride: {
			parameter: '_method',
			allowed: []
		},
		outDir: '.svelte-kit',
		package: {
			dir: 'package',
			emitTypes: true,
			// excludes all .d.ts and files starting with _ as the name
			exports: (filepath) => !/^_|\/_|\.d\.ts$/.test(filepath),
			files: () => true
		},
		paths: {
			assets: '',
			base: ''
		},
		prerender: {
			concurrency: 1,
			crawl: true,
			default: false,
			enabled: true,
			entries: ['*'],
			onError: 'fail'
		},
		routes: (filepath) => !/(?:(?:^_|\/_)|(?:^\.|\/\.)(?!well-known))/.test(filepath),
		serviceWorker: {
			register: true,
			files: (filepath) => !/\.DS_Store/.test(filepath)
		},
		trailingSlash: 'never',
		version: {
			name: Date.now().toString(),
			pollInterval: 0
		}
	}
};

export default config;
