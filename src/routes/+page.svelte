<script lang="ts">
    import TodoTile from './TodoTile.svelte';
    import { tempData } from '$lib/tempData';
</script>

<div class="grid grid-rows-2 justify-center w-full p-8 gap-y-2">
    {#each tempData as todoItem}
      <TodoTile title={todoItem.title} description={todoItem.description} completed={todoItem.completed}/>
    {/each}

    <div class="w-[800px] bg-slate-100 border border-slate-300 rounded-xl p-5 grid grid-cols-2 grid-rows-2 gap-y-2">
        <input placeholder="Title" required class="bg-slate-100 text-neutral-500 border border-transparent placeholder-shown:border-slate-300 rounded-lg pl-2 w-1/2 focus:outline-none focus:border-transparent">
        <button class="text-neutral-400 justify-self-end align-self-start text-sm pl-2 pr-2 -translate-y-4 translate-x-4">add</button>
        <input placeholder="Description" class="bg-slate-100 text-neutral-500 border border-transparent placeholder-shown:border-slate-300 focus:outline-none focus:border-transparent pt-1 pb-1 pl-2 rounded-lg col-span-2 row-span-1"> 
    </div>
</div>

