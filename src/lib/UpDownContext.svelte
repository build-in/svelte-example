<script>
  import { getContext } from 'svelte';
  let count = "上下文"

  const cont = getContext('myKey');
  let hidemess ="可以用于多层嵌套，但上下文的数据不具备响应性";
  let show = false;
  const handleClick  = (e)=>{
    return  show = !show;
  }

</script>

<button on:click={handleClick}>
  {count}
</button>
<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if show}
<div>
  getContext的值: {cont.name}今年 {cont.age}岁 {show}
</div>
<p>说明： {hidemess}</p>
{/if}
