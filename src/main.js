// @ts-nocheck
import './app.css'
import App from './App.svelte'
import AppTolistProject from './AppTolistProject.svelte';
import AppStore from './AppStore.svelte';
import Anmitate from "./anmitate/index.svelte"

// 原始项目
// const app = new App({
//   target: document.getElementById('app'),
// })

// 代办项目
// const app = new AppTolistProject({
//   target: document.getElementById('app'),
// })

// 全局数据
// const app = new AppStore({
//   target: document.getElementById('app'),
// })

const app = new Anmitate({
  target: document.getElementById('app'),
})

export default app
