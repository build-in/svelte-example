<script>
  import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte'

  let show = false;
  const handleClick  = (e)=>{
    window.open("https://www.baidu.com", "_blank");
    return  show = !show;

  }

  onMount(()=>{
    console.log("来到了","onMount");
  });

  beforeUpdate(()=>{
    console.log("来到了","beforeUpdate");
  });

  afterUpdate(()=>{
    console.log("来到了","afterUpdate");
  });

  onDestroy(()=>{
    console.log("来到了","onDestroy");
  });



</script>

<button on:click={handleClick}>
   生命周期
</button>

{#if show}
	<p>在控制台查看结果</p>
  <p>第一次页面加载：beforeUpdate、onMount、afterUpdate</p>
  <p>第二次页面更新：beforeUpdate、afterUpdate</p>
  <p>最后次页面销毁：onDestroy</p>
{/if}
