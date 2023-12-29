<script>
  import StoreThree from "./page/StoreThree.svelte";
  import StoreTwo from "./page/StoreTwo.svelte";
  import StoreOne from "./page/StoreOne.svelte";
</script>

<StoreOne />
<StoreThree />
<StoreTwo />

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
  .card-child {
    border: 1px solid red;
  }
</style>
