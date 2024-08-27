<script lang='ts'>
    import { markComplete } from "$lib/markComplete";
    import type { TodoObject } from '$lib/types';
	  import TodoTile from "./TodoTile.svelte";
    
    
    export let todosList: TodoObject= [];
    export let title = "";
    export let completed = false; 

    let buttonColor: string;
    $: if (completed){
        buttonColor = 'bg-sky-400 hover:bg-sky-500 dark:bg-sky-900 dark:hover:bg-sky-800'
    } else {
        buttonColor = 'border border-slate-400 dark:border-slate-200 hover:border-2';
    }
    
</script>

<button 
  class="{buttonColor} rounded-full size-4 md:size-3 absolute top-1/2 left-2 -translate-y-2"
  on:click={() => {
    markComplete(title)
    todosList = (JSON.parse(localStorage.getItem("todos")));
    console.log(todosList);
  }}
>
</button>