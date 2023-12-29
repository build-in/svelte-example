<script>
import svelteLogo from '../assets/svelte.svg'
import { count, peopleStore } from "../store"

let countValue;

// 读取全局状态
count.subscribe((value)=>{
    countValue = value;
});

// count有 set和update， set直接设置值，而update是取得上一次的状态，返回新的状态
function reset(){
    count.set(0);
}

function resetMonkey(){
  peopleStore.set({
    name:'齐天大圣',
    age:'50000',
    sex: "man",
    isMonkey:true
});
}
  
  </script>
  
  <main class="page">
    <div>
      <p> 组件two监听值：{countValue} </p>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
      <button on:click={reset}><p>置0</p>  (￣﹏￣) </button>
      <button on:click={resetMonkey}><p>恢复原始候</p>  (￣﹏￣) </button>
    </div>
  </main>
  
  <style>
    .page{
        border:  1px solid red;
    }
    .logo {
      height: 3em;
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
  