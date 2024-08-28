<script lang="ts">
    import { todosList } from '$lib/stores/todosList'
    import type { TodoObject } from '$lib/types';
    import TodoTile from '../TodoTile.svelte'

    let todoItems: TodoObject[] = [];

    $: todoItems = $todosList;
</script>

<div class="flex flex-col items-center w-full p-8 gap-y-2">
    {#if todoItems === $todosList}
      {#each todoItems as todoItem}
        {#if todoItem.completed === true}
          <TodoTile title={todoItem.title} description={todoItem.description} completed={todoItem.completed}/>
        {/if}
      {/each}
    {/if}
</div>
