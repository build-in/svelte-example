<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import { setContext } from 'svelte';

  import Counter from './lib/Counter.svelte'
  import SoltTest from './lib/SoltTest.svelte'
  import Child from './lib/Child.svelte';
  import UpDownContext from './lib/UpDownContext.svelte';
  import RenderHtml from './lib/RenderHtml.svelte';
  import ArrayObjectAction from './lib/ArrayObjectAction.svelte';
  import List from './lib/List.svelte';
  import AwaitRequest from './lib/AwaitRequest.svelte';
  import ClassAndStyle from './lib/ClassAndStyle.svelte';
  import LifeCircle from './lib/LifeCircle.svelte';

  let parentChildValue = {
    status:false,
    value:'╭(●`∀´●)╯╰(●’◡’●)╮'
  };

  const change  = (e)=>{
    parentChildValue = e.detail;
  }

  setContext('myKey', {
    name:'大黄',
    age:'16'
  });

</script>

<main>
  <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
    <SoltTest>
      <span slot="dog">solt:Val1</span>
      <span slot="cat">solt:Val2</span>
    </SoltTest>
    <Child on:parent={change}></Child>
    <UpDownContext></UpDownContext>
    <RenderHtml />
    <ArrayObjectAction />
    <List />
    <AwaitRequest />
    <ClassAndStyle />
    <LifeCircle />
  </div>
  {#if parentChildValue.status}
  <div class="card-child">
    <div>{parentChildValue.value}</div>
  </div>
  {/if}
  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
  .card-child{
    border: 1px solid red;
  }
</style>
