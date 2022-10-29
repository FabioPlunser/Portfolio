<script>
    let openUniDropdown = false;
    import {fly} from "svelte/transition"
</script>

<div in:fly="{{ y: -200, duration: 200}}" out:fly="{{ y: -200, duration: 200 }}" class="fixed z-10 inset-x-0 bg-gray-800 w-3/4 h-auto rounded-xl mx-auto text-white p-4 shadow-2xl">
    <div class="bg-transparent hover:bg-purple-800 p-1 rounded-md">
        <a href="/">Projects</a>
    </div>
    <div class="bg-transparent hover:bg-purple-800 p-1 rounded-md">
        <a href="/">Blog</a>
    </div>
    <div class="bg-transparent hover:bg-purple-800 p-1 rounded-md">
        <button on:click={()=>openUniDropdown = !openUniDropdown}>Uni</button>
    </div>
        <!-- Dropdown menu -->
        <div class="{openUniDropdown ? "visible animate__animated animate__lightSpeedInLeft animate__faster" : "hidden"} mt-2 w-auto  rounded-md divide-y bg-purple-800 shadow-2xl text-white">
            <ul class="py-1 text-sm">
            <li>
                <a href="/" class="block py-2 px-4 hover:text-gray-600 hover:underline">CourseSelector</a>
            </li>
            <li>
                <a href="/" class="block py-2 px-4 hover:text-gray-600 hover:underline">BetterOlat</a>
            </li>
            <li>
                <a href="/" class="block py-2 px-4 hover:text-gray-600 hover:underline">MyFiles</a>
            </li>
            <li>
                <a href="/" class="block py-2 px-4 hover:text-gray-600 hover:underline">LateX</a>
            </li>
            </ul>
        </div>
</div>