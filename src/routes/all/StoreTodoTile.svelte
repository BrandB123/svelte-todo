<script lang="ts">
    import { todosList } from '$lib/stores/todosList'
    import StoreCompletedButton from './StoreCompletedButton.svelte';
    // import type { TodoObject } from '$lib/types';
    // import CompleteButton from "./CompleteButton.svelte";

    export let title = "Todo Item 1";
    export let description = "This is the description for the first item. Blah blah blah. We will have actual data here later.";
    export let completed = false;
</script>

<div class=" relative w-full min-w-72 md:w-screen md:max-w-4xl 2xl:w-4/5 2xl:max-w-7xl bg-white dark:bg-slate-900 border border-slate-400 dark:border-slate-600 rounded-xl p-5 flex flex-col gap-y-2">
    <h3 class="rounded-lg pl-2 w-1/2 font-bold dark:text-slate-300">
      {title}
    </h3>
    <button 
      class="text-sm dark:text-slate-300 pl-2 pr-2 absolute right-2 -translate-y-4 translate-x-1 hover:font-bold active:-translate-y-3"
      
      on:click={() => {
        let todoItems = $todosList;
        let deleteIndex;
        todoItems.forEach((todoItem, index) => {
          if (todoItem.title === title){
            deleteIndex = index;
          }
        });
        todoItems.splice(deleteIndex, 1);
        $todosList.length > 0 ? todosList.set(todoItems) : todosList.set([]);
      }}
    >
      x 
    </button>
    <p class="dark:text-slate-300 pt-1 pb-1 pl-2 rounded-lg col-span-2 row-span-1"> 
      {description}
    </p>
    <StoreCompletedButton title={title} completed={completed} />
</div>