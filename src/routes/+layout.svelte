<script lang='ts'>
    import "../app.css";

    // const name: string = "U+2713 Todo App";
</script>

<nav class="bg-gray-600 text-white pt-4 pl-8 pb-4 font-sans text-2xl grid grid-cols-4 row-end-auto items-center gap-4 ">
    <p class="font-bold text-4xl">&#x2611 Todo</p>
    <a href='/'>All Todo Items</a>
    <a href='/active'>Active Todo Items</a>
    <a href='/complete'>Completed Todo Items</a>
</nav>
  
  <slot />