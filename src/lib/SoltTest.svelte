<script>
  let show = false;
  let count = "solt"
  const handleClick  = (e)=>{
    return  show = !show;
  }
</script>

<button on:click={handleClick}>
  {count} 传递
</button>
{#if show}
<div>
  <div><slot name="dog"> 默认值1</slot></div>
  <div> <slot name="cat"> 默认值2</slot></div>
</div>
{/if}
