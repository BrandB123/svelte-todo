<script lang='ts'>
    import { markComplete } from "$lib/markComplete";
    
    
    export let todosList = [];
    export let title = "";
    export let completed = false;

    let buttonColor: string;
    if (completed){
        buttonColor = 'bg-sky-400'
    } else {
        buttonColor = 'border border-slate-400';
    }
    
</script>

<button 
  class="{buttonColor} rounded-full size-3 absolute top-1/2 left-2 -translate-y-2"
  on:click={() => {
    markComplete(title)
    todosList = (JSON.parse(localStorage.getItem("todos")));
    console.log(todosList);
  }}
>
</button>