<script>
    export let dark=true;
    function toggleDarkMode() {
		dark = !dark;
	}
</script>

<nav class="flex flex-grow">
    <ul class="flex flex-grow justify-end flex-wrap items-center">
      <li>
        <button type="button" on:click={toggleDarkMode} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-5">
        Dark Mode
        </button>
      </li>
    </ul>
</nav>