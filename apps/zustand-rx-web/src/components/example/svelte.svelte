<script>
  import { store, bears$ } from "./store";

  const increment = store.getState().increment
</script>

<style>
  .button {
    background: gray;
    border: 1px darkgray solid;
  }
</style>

<button class="button" on:click={increment}>
  Increase
</button>

<div>Bears 1: {$bears$}</div>
<div>Bears 2: {$bears$}</div>
