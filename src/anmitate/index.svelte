<script>
  import Anmiate from "./Anmiate.svelte";
  import Anmiate2 from "./Anmiate2.svelte";
  import BodyAddeventListener from "./BodyAddeventListener.svelte";
</script>

<div class="content">
  <Anmiate />
  <Anmiate2 /> 
  <BodyAddeventListener />
</div>

<style>
  .content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    & > *{
      margin-top: 10px;
    }
  }
</style>

