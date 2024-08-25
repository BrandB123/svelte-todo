<script lang="ts">
  import TodoTile from '../TodoTile.svelte';
  import { onMount } from 'svelte';
  

  interface TodoObject {
        title: string;
        description: string;
        completed: boolean;
    }
    let todosList: TodoObject[] = [];

    onMount(() => {
        if (localStorage.length > 0){
            // if (todosList !== null){
                // localStorage.clear();
                todosList = (JSON.parse(localStorage.getItem("todos")));
                console.log(todosList);
            // }
        }
    })
</script>

<div class="grid grid-rows-2 justify-center w-full p-8 gap-y-2">
  {#if todosList !== null}
    {#each todosList as todoItem}
      {#if todoItem.completed !== true}
        <TodoTile title={todoItem.title} description={todoItem.description} completed={todoItem.completed} bind:todosList={todosList}/>
      {/if}
    {/each}
  {/if}
</div>