<script lang="ts">
    import CompleteButton from "./CompleteButton.svelte";
    import { deleteTodo } from "$lib/deleteTodo";


    export let todosList = [];
    export let title = "Todo Item 1";
    export let description = "This is the description for the first item. Blah blah blah. We will have actual data here later.";
    export let completed = false;
</script>

<div class=" relative w-[800px] bg-white border border-slate-400 rounded-xl p-5 flex flex-col gap-y-2">
    <h3 class="rounded-lg pl-2 w-1/2">
      {title}
    </h3>
    <button 
      class="text-sm pl-2 pr-2 absolute right-2 -translate-y-4 translate-x-1"
      id={title}
      on:click={() => {
        deleteTodo(title)
        todosList = "random value"
        todosList = (JSON.parse(localStorage.getItem("todos")));
        console.log(todosList); 
      }}
    >
      x
    </button>
    <p class="pt-1 pb-1 pl-2 rounded-lg col-span-2 row-span-1"> 
      {description}
    </p>
    <CompleteButton completed={completed}/>
</div>