<script lang='ts'>
   import "../app.css";
   import { onMount } from 'svelte';

   let darkMode = false;
   let appearance: "Light" | "Dark"; 
   //implement toggle for dark mode here
   
</script>

<nav class=
  "bg-gray-600 text-white w-full pt-4 pr-2 pb-4 pl-2 md:pt-4 md:pr-8 md:pb-4 md:pl-8 font-sans text-sm md:text-2xl text-center flex justify-evenly items-center gap-4 
   dark:bg-slate-950 dark:text-gray-300 dark:border-b dark:border-b-gray-500">
    <a href="/all" class="font-bold text-lg md:text-4xl">&#x2611 Todo</a>
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
      class="bg-gray-600 dark:bg-slate-950 text-sm focus:outline-none focus:border-transparent place-self-end"
      bind:value={appearance}
     >
     <option>Device</option> 
     <option>Light</option>
      <option>Dark</option>
    </select>
</nav>
  
  <slot/>