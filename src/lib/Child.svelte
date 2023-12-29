<script>
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let show = false;

  const send  = ()=>{
    show = !show;
    dispatch('parent',{status: show, value:'子给父亲的值 ╭(●`∀´●)╯╰(●’◡’●)╮'});
  }
</script>

<button on:click={send}>
  子传父
</button>
