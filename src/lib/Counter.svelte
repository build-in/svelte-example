<script>
  let count = 0
  const increment = () => {
    count += 1
    handleClick();
  }
  // $ 和 vue中的watch 是一样的，$:后面跟表达式
  
  $: console.log(count);
  $: action = count * 10;

  let show = false;
  const handleClick  = (e)=>{
    return  show = !show;
  }

</script>

<button on:click={increment}>
  count {count}
</button>

{#if show}
	<p>响应式计算的数据：count * 10 = {action}</p>
{/if}
