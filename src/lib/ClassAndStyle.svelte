<script>
  let show = false;
  let active = true;
  let inactive = false;

  let dynamicStyles = {
    color: 'green',
    "font-size": '20px'
 };
  const handleClick  = (e)=>{
    return  show = !show;
  }

</script>

<button on:click={handleClick}>
  样式设置
</button>

<!-- 
  1,class:name={value} 
  2,class:name 
-->

{#if show}
<div class="my-class">
	<p style="color:red; font-size:25px;">行内样式</p>
  <p style="color: {dynamicStyles.color}; font-size:{dynamicStyles['font-size']};">行内动态样式<p>
  <p class="{active ? 'active' : ''}">条件判断样式<p>
  <p class:active>条件判断样式简写<p>
  <p class:active class:haoren={!inactive}>包含多个class状态<p>
  <p>
    <div class="testquanju">
      <strong>全局样式</strong>
    </div>
  <p>
  </div>
{/if}

<style>
	p {
		color: burlywood;
	}

  :global(body) {
		/* 这里样式全局应用于 <body>内都 */
		margin: 0;
	}
  .active{
    color: blue;
  }
  .haoren{
    border: 1px solid black;
  }

	.testquanju :global(strong) {
		/* 这里表示全局应用于被 class="testquanju" 包裹的<strong>标签 */
		color: goldenrod;
    font-size:30px;
	}
  :root(.my-class){
    background-color: bisque;
    color: blueviolet;
    font-size: 100px;
  }
</style>
