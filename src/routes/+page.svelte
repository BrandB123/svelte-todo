<script lang="ts">
    import TodoTile from './TodoTile.svelte';
    import { onMount } from 'svelte';
    import { addTodo } from '$lib/addTodo'
    import type { TodoObject } from '$lib/types';

    let todosList: TodoObject[] = [];

    let newTitle: string;
    let newDescription: string;

    onMount(() => {
        if (localStorage.length > 0){
            // if (todosList !== null){
                // localStorage.clear();
                todosList = (JSON.parse(localStorage.getItem("todos")));
            // }
        }
    })
</script>

<div class="flex flex-col items-center w-full p-8 gap-y-2">
    {#if todosList !== null}
      {#each todosList as todoItem (todoItem.title)}
        <TodoTile title={todoItem.title} description={todoItem.description} completed={todoItem.completed} bind:todosList={todosList}/>
      {/each}
    {/if}

    <div class="w-full min-w-72 md:w-4/5 md:max-w-4xl bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-slate-600 rounded-xl p-5 grid grid-cols-2 grid-rows-2 gap-y-2">
        <input 
          placeholder="Title" 
          required 
          class="bg-slate-100 dark:bg-gray-800 text-neutral-400 border border-transparent placeholder-shown:border-slate-300 dark:placeholder-shown:border-slate-600 rounded-lg pl-2 w-1/2 focus:outline-none focus:border-transparent"
          bind:value={newTitle}
        />
        <button 
          class="text-neutral-400 justify-self-end align-self-start text-sm pl-2 pr-2 -translate-y-5 translate-x-4 active:-translate-y-4"
          on:click={ () => {
            addTodo(newTitle, newDescription)
            newTitle = ""
            newDescription = ""
            todosList = (JSON.parse(localStorage.getItem("todos")));
            console.log(todosList);
          }}
        >
          add
        </button>
        <input 
          placeholder="Description" 
          class="bg-slate-100 dark:bg-gray-800 text-neutral-400 border border-transparent placeholder-shown:border-slate-300 dark:placeholder-shown:border-slate-600 focus:outline-none focus:border-transparent pt-1 pb-1 pl-2 rounded-lg col-span-2"
          bind:value = {newDescription}
          /> 
    </div>
</div>

