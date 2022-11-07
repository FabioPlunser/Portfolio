import { sveltekit } from "@sveltejs/kit/vite";
import dynamicImportVars from '@rollup/plugin-dynamic-import-vars';

/** @type {import('vite').UserConfig} */
const config = {
  optimizeDeps: {
    include: ["lodash.get", "lodash.isequal", "lodash.clonedeep"],
  },
  plugins: [
    sveltekit(),
    dynamicImportVars({
      include: ["**/*.svelte"],
      exclude: ["node_modules/**", "**/node_modules/**"],
    }),
  ],
};

export default config;
