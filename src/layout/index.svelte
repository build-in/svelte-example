<script>
    let show = false;
  
  
    const handleClick = () => {
      return (show = !show);
    };

    const mouseenter = () => {
      console.log("enter");
    };

  
  </script>
  
  <button on:click={handleClick}> 修改对象/数组值 </button>
  
  {#if show}
   <div></div>
  {:else}
  <div></div>
  {/if}

  <style>

  </style>
  