<script lang='ts'>
    import "../app.css";

    const name: string = "SvelteKit Todo App";
</script>

<nav class="grid grid-cols-4 row-end-auto gap-4 mt-4 ml-8 mb-4 font-sans text-2xl">
    <a href='/' class="font-bold">{name}</a>
    <a href='/all'>All Todo Items</a>
    <a href='/active'>Active Todo Items</a>
    <a href='/complete'>Completed Todo Items</a>
</nav>
  
  <slot />