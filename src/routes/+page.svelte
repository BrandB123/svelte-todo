<script lang="ts">
    import { fade, fly } from 'svelte/transition';
    import { todosList } from '$lib/stores/todosList'
    import type { TodoObject } from '$lib/types';
    import TodoTile from './TodoTile.svelte'
    import { MAXTODOITEMS } from '$lib/maxTodoItems';

    let todoItems: TodoObject[] = [];
    let newTitle = "";
    let newDescription = "";
    let alertVisibility = "invisible";
    let alertMessage = ""

    function validateInput(title:string, todos:TodoObject[]){
      if (title === undefined){ 
        return 
      } else {
        const validString = title.trim() ? true : false;
	      const spaceLeft = todos.length < MAXTODOITEMS ? true : false;
        let uniqueInput = true;
        todos.forEach((todo) => {
	        if (todo.title === title){ uniqueInput = false }
        })
	    const validated = (validString && spaceLeft && uniqueInput)
	    return {validated, validString, spaceLeft, uniqueInput}
      }
    }
  
    $: todoItems = $todosList;
</script>

<div class="flex flex-col items-center w-full p-8 gap-y-2">
    {#if todoItems === $todosList}
      {#each todoItems as todoItem}
        <TodoTile title={todoItem.title} description={todoItem.description} completed={todoItem.completed}/>
      {/each}
    {/if}

    <div class="w-full min-w-72 md:w-4/5 md:max-w-4xl 2xl:max-w-7xl bg-slate-100 dark:bg-gray-800 border border-slate-300 dark:border-slate-600 rounded-xl p-5 grid grid-cols-2 grid-rows-2 gap-y-2">
        <input 
          placeholder="Title"
          class="bg-slate-100 dark:bg-gray-800 text-neutral-400 border border-transparent placeholder-shown:border-slate-300 dark:placeholder-shown:border-slate-600 rounded-lg pl-2 w-1/2 min-w-48 focus:outline-none focus:border-transparent"
          bind:value={newTitle}
        />
        <button 
          class="text-neutral-400 justify-self-end align-self-start text-sm pl-2 pr-2 -translate-y-5 translate-x-4 active:-translate-y-4"
          on:click={ () => {
            const validation = validateInput(newTitle, todoItems)
            if (validation === undefined) { return }
            
            if (validation.validated){
                alertVisibility = "invisible"
                todosList.update(todos => [...todos, {title: newTitle, description: newDescription, completed: false }]);
                newTitle = ""
                newDescription = ""
	          } else {
		          if (!validation.validString){ 
		            alertMessage = "Title must not be blank. Please add a title in order to submit."
                alertVisibility = "visible"
                newTitle = ""
		            return 
              } else if (!validation.spaceLeft){
		            alertMessage = "You've reached the maximum number of todos."
                alertVisibility = "visible"
                newTitle = ""
                newDescription = ""
		            return 
		          } else if (!validation.uniqueInput){
		            alertMessage = "Titles cannot match the title of another todo item."
                alertVisibility = "visible"
                newTitle = ""
		            return  
		          }
            }
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

    {#if alertVisibility === "visible"}
      <div 
        class="{alertVisibility} bg-slate-300 dark:bg-slate-600 border border-slate-600 width-1/2 flex justify-center items-center fixed inset-1/3 rounded-xl"
        in:fly={{ x: 800, duration: 1000 }} out:fade
        >
        <p class="text-neutral-800  dark:text-slate-100 text-lg w-2/3 text-center">{alertMessage}</p>
        <button 
        class=" text-md dark:text-slate-300 pl-2 pr-2 absolute top-1 right-1 hover:font-bold active:scale-90"
        on:click={() => { alertVisibility = "invisible"}}
        >
          x 
        </button>
      </div>
    {/if}
</div>

