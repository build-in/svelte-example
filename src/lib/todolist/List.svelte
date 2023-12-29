<script>
// @ts-nocheck

	let todos = [
		{ id:1, done: false, text: 'finish Svelte tutorial',finish: false},
		{ id:2, done: true, text: 'build an app',finish: true },
		{ id:3, done: false, text: 'world domination',finish: false }
	];

	function add() {
		todos = todos.concat({ id: todos.length + 1,  done: false, text: '',finish:false });
    console.log(todos,'todos');
	}

	function clear() {
		todos = todos.filter(t => !t.finish);
	}

  function finish() {
    todos.forEach((v)=>{
       if(v.done){
         v.finish = true;
       }
    });
    todos = [...todos];
	}

	$: remaining = todos.filter(t => !t.done).length;
  

</script>

<h1>Todos</h1>

{#each todos as todo}
	<div class:done={todo.done}>
		<input
			type=checkbox
			bind:checked={todo.done}
      disabled={todo.finish}
		>

		<input
      disabled={todo.finish}
			placeholder="What needs to be done?"
			bind:value={todo.text}
      class="{todo.finish ? 'active' : ''}"
      on:blur={()=>{
        if(todo.text.trim() === ''){
        let arryindex = todos.findIndex((item)=>{
            if(item.id === todo.id){
               return true;
            }else{
               return false;
            }
          });
          todos.splice(arryindex, 1);
          todos = [...todos];
        }
      }}
		>
	</div>
{/each}
<div class="panel-content">
  <p> 总数{todos.length} </p>
  <p> 剩余{remaining} </p>
</div>

<button on:click={add}>
	添加数据
</button>

<button on:click={clear}>
	删除数据
</button>

<button on:click={finish}>
	勾选项目划掉
</button>

<style lange="scss">
  .panel-content{
    display: flex;
    justify-content: center;
    & > * {
      margin-left:10px;
    }
  }
  .panel-content & > * {
      margin-left:5px;
  }
	.done {
		opacity: 0.4;
	}
  .active{
    text-decoration: line-through;
  }
</style>
