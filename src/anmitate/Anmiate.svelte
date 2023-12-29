<script>
    import { tweened, spring } from "svelte/motion";
    import { cubicOut } from "svelte/easing";

    let show = false;
    const handleClick = () => {
        return (show = !show);
    };

    // 补间动画
    // const progress = tweened(0, {
    //     duration: 400,
    //     easing: cubicOut,
    // });

    //弹性动画
    const progress = spring(0, {
        stiffness: 0.1,
        damping: 0.25,
    });

    const setProcess = (val) => {
        progress.set(val);
    };
</script>

<button on:click={handleClick}> tweened 补间动画/ 弹性动画 </button>

{#if show}
    <progress value={$progress} />
    <button on:click={()=>{setProcess(0)}}> 0% </button>
    <button on:click={()=>{setProcess(0.5)}}> 50% </button>
    <button on:click={()=>{setProcess(1)}}> 100% </button>
{:else}{/if}

<style>
</style>
