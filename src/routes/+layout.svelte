<script lang='ts'>
   import "../app.css";
   import { onMount } from 'svelte';
   import { theme } from '../lib/stores/darkMode'

   $: colorScheme = $theme;

   onMount(() => {
      if (colorScheme === "dark"){
        document.body.classList.add("dark")
      }
   });
   
</script>

<nav class=
  "bg-gray-600 text-white w-full pt-4 pr-2 pb-4 pl-2 md:pt-4 md:pr-8 md:pb-4 md:pl-8 font-sans text-sm md:text-2xl text-center flex justify-evenly items-center gap-4 
   dark:bg-slate-950 dark:text-gray-300 dark:border-b dark:border-b-gray-500">
    <div class="flex flex-col sm:flex-row items-center gap-2">
      <img src="../../todo-list-favicon.png" alt="todo logo"
      class="size-12"
      />
      <p class="font-bold text-lg md:text-4xl" >Todo</p>
    </div>
    <a href='/' 
       class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >All Todo Items</a>
    <a href='/active'
       class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >Active Todo Items</a>
    <a href='/complete'
       class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
    >Completed Todo Items</a>
    <select 
      class="bg-gray-600 dark:bg-slate-950 text-sm 2xl:text-xl focus:outline-none focus:border-transparent place-self-end"
      bind:value={colorScheme}
      on:change={() => {
         theme.set(colorScheme)
         window.location.reload()
        }}
     > 
     <option>light</option>
      <option>dark</option>
    </select>
</nav>
  
  <slot/>