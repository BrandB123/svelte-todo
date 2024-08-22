<script lang="ts">
    import CompleteButton from "./CompleteButton.svelte";
    export let title = "Todo Item 1";
    export let description = "This is the description for the first item. Blah blah blah. We will have actual data here later.";
    export let completed = false;
</script>

<div class=" relative w-[800px] bg-white border border-slate-400 rounded-xl p-5 grid grid-cols-2 grid-rows-2 gap-y-2">
    <h3 class="rounded-lg pl-2 w-1/2">
      {title}
    </h3>
    <button class="justify-self-end align-self-start text-sm pl-2 pr-2 -translate-y-6 translate-x-4">x</button>
    <p class="pt-1 pb-1 pl-2 rounded-lg col-span-2 row-span-1"> 
      {description}
    </p>
    <CompleteButton completed={completed}/>
</div>