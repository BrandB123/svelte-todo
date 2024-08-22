<script lang="ts">
  import TodoTile from '../TodoTile.svelte';
  import { tempData } from '$lib/tempData';
</script>


<div class="grid grid-rows-2 justify-center w-full p-8 gap-y-2">
  {#each tempData as todoItem}
    {#if todoItem.completed !== true}
      <TodoTile title={todoItem.title} description={todoItem.description} completed={todoItem.completed}/>
    {/if}
  {/each}
</div>