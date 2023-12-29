<script>
  async function sleep(duration){
    return new Promise((rev,rej)=>{
       setTimeout(()=>{
        rev('时间到了');
       },duration);
    });
  }

  let show = false;
  const handleClick  = (e)=>{
    return  show = !show;
  }

</script>

<button on:click={handleClick}>
   await请求
</button>

{#if show}
	{#await sleep(3000)}
    ...loading 3S
  {:then res} 
    {res}
  {/await}
{/if}
