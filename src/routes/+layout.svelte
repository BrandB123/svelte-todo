<script>
    import "../app.css";
</script>

<nav class="grid grid-cols-4 row-end-auto gap-4 mt-4 ml-8 mb-4 font-sans text-2xl">
    <a class="font-bold">SvelteKit Todo App</a>
    <a href='/'>All Todo Items</a>
    <a href='/'>Active Todo Items</a>
    <a href='/'>Completed Todo Items</a>
</nav>
  
  <slot />