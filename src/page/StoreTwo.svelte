<script>
import svelteLogo from '../assets/svelte.svg'
import { count, peopleStore } from "../store"

let countValue;
let realPeople = {};

// 读取全局状态
count.subscribe((value)=>{
    countValue = value;
});

peopleStore.subscribe((value)=>{
        realPeople = value;
    });

   // count有 set和update， set直接设置值，而update是取得上一次的状态，返回新的状态
   function minute(){
        count.update((val)=>{
            val -=1
            return val
        });
    }

    function chagePeopleName(){
        peopleStore.update((val)=>{
            return Object.assign({},val,{name:'卷帘大将',age: '2333', isMonkey:false});
        });
    }
  
  </script>
  
  <main class="page">
    <div>
      <p> 组件two监听值：{countValue} </p>
      <div class="content">
        <p> 姓名：{realPeople.name} </p>
        <p> 年龄：{realPeople.age} </p>
        <p> 性别：{realPeople.sex} </p>
        <p> 猴子：{realPeople.isMonkey} </p>
      </div>
      <a href="https://svelte.dev" target="_blank" rel="noreferrer">
        <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
      </a>
      <button on:click={minute}> <p>-1</p>  ╮(￣▽￣)╭</button>
      <button on:click={chagePeopleName}> <p>修改人类</p> (=^=^=)</button>
    </div>

  </main>
  
  <style>
    .page{
        border:  1px solid green;
    }
    .content{
        display: flex;
        justify-content: center;
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
  