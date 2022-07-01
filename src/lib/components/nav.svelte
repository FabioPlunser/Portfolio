<script>
  import {toggleDarkMode} from "$lib/darkMode";
</script>

<nav class="flex flex-grow">
    <ul class="flex flex-grow justify-end flex-wrap items-center mt-2 mr-5">
      <li>
        <button type="button" on:click={toggleDarkMode} class="btn btn-primary dark:btn-secondary">
        Dark Mode
        </button>
      </li>
    </ul>
</nav>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>