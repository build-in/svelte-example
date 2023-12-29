<script>
  let text = "渲染html"
  let s = "看"
  let hidemess =`<span>Hello, ${s}!</span></br><span> 这里是字符模版</span>`;
  let show = false;
  const handleClick  = ()=>{
    return  show = !show;
  }

</script>

<button on:click={handleClick}>
  {text}
</button>

{#if show}
	<p>{@html hidemess}</p>
{/if}
