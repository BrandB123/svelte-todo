<script lang='ts'>
    import "../app.css";
</script>

<nav class="bg-gray-600 text-white min-w-full pt-4 pr-8 pb-4 pl-8 font-sans text-md md:text-2xl text-center flex justify-evenly items-center gap-4 ">
    <p class="font-bold text-2xl md:text-4xl">&#x2611 Todo</p>
    <a href='/' 
       class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >All Todo Items</a>
    <a href='/active'
       class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >Active Todo Items</a>
    <a href='/complete'
       class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >Completed Todo Items</a>
    <select class="bg-gray-600 text-sm focus:outline-none focus:border-transparent">
      <option>Light</option>
      <option>Dark</option>
    </select>
</nav>
  
  <slot />