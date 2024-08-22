<script lang='ts'>
    export let completed = false;

    let buttonColor: string;
    if (completed){
        buttonColor = 'bg-cyan-400'
    } else {
        buttonColor = 'border border-slate-400';
    }
    
</script>

<button class="{buttonColor} rounded-full size-3 absolute top-1/2 left-2 -translate-y-2"></button>