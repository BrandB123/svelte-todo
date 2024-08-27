<script lang="ts">
    import type { TodoObject } from '$lib/types';
    import CompleteButton from "./CompleteButton.svelte";
    import { deleteTodo } from "$lib/deleteTodo";

    export let todosList: TodoObject[] = [];
    export let title = "Title";
    export let description = "";
    export let completed = true;
</script>

<div class=" relative w-full min-w-72 md:w-screen md:max-w-4xl 2xl:w-4/5 2xl:max-w-7xl bg-white dark:bg-slate-900 border border-slate-400 dark:border-slate-600 rounded-xl p-5 flex flex-col gap-y-2">
    <h3 class="rounded-lg pl-2 w-1/2 font-bold dark:text-slate-300">
      {title}
    </h3>
    <button 
      class="text-sm dark:text-slate-300 pl-2 pr-2 absolute right-2 -translate-y-4 translate-x-1 hover:font-bold active:-translate-y-3"
      
      on:click={() => {
        deleteTodo(title)
        todosList = (JSON.parse(localStorage.getItem("todos")));
        console.log(todosList); 
      }}
    >
      x 
    </button>
    <p class="dark:text-slate-300 pt-1 pb-1 pl-2 rounded-lg col-span-2 row-span-1"> 
      {description}
    </p>
    <CompleteButton bind:todosList={todosList} title={title} completed={completed} />
</div>