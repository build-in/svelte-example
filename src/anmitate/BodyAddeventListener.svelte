<script>
    let show = false;
  
  
    const handleClick = () => {
      return (show = !show);
    };

    const mouseenter = () => {
      console.log("enter");
    };

    const mouseout = () => {
      console.log("out");
    };
  
  </script>
  
  <!-- <svelte:body on:mouseenter={mouseenter}  on:mouseout={mouseout} /> -->
  <button on:click={handleClick}> Body上绑定事件 </button>

  