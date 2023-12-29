<script>
  let arr = [
    {
    name: "xiaowang",
    age: 10,
  },
  {
    name: "xiaoLi",
    age: 16,
  }
  ];
  let show = false;
  const handleClick  = (e)=>{
    return  show = !show;
  }

</script>

<button on:click={handleClick}>
   展示列表
</button>

{#if show}
	  <ul>
      {#each arr as item, index(item.name)}
        <li> {item.name}--{item.age} </li>
      {/each}
    </ul>
{:else}
{/if}
