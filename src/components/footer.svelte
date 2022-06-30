<script>
    export let dark = false;
</script>

<div class="pt-12 sticky top-[100vh]" class:dark>
    <footer id="footer" class="relative z-50 text-slate-800 dark:text-white">
    <div class="max-w-6xl mx-auto px-2 sm:px-2">
      <div class="grid sm:grid-cols-12 gap-8 py-2 md:py-2 border-t border-slate-700 dark:border-gray-400">
        <div class="sm:col-span-6 md:col-span-3 lg:col-span-2">
          <!-- <h6 class="text-gray-800 dark:text-white font-medium mb-2">Products</h6> -->
          <ul class="text-sm">
            <li class="mb-2">
              <a href="/blog" class="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 transition duration-150 ease-in-out">Blog</a>
            </li>
            <li class="mb-2">
              <a href="/github" class="text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-gray-300 transition duration-150 ease-in-out">Github</a>
            </li>         
          </ul>
        </div>    
      </div>
      <!-- // Social Media -->
      <div class="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-slate-700 dark:border-gray-400">
        <ul class="flex mb-4 md:order-1 md:ml-4 md:mb-0">
          <li class="">
            <a href="https://github.com/" target="_blank" class="flex justify-center items-center text-white hover:text-gray-300 bg-slate-700 hover:bg-slate-900 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
              <svg class="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
              </svg>
            </a>
          </li>
        </ul>

      </div>

    </div>
  </footer>
</div>


<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

