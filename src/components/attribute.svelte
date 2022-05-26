<script>
  let attributes = [1, 2, 3, 4, 5];
</script>

<h1>Multiple work.One workspace</h1>
<div class="outer">
  {#each attributes as attribute}
    {#if attribute % 2 != 0}
      <div class="inner">
        <div class="upper">{attribute}</div>
        <h3>title</h3>
      </div>
    {:else}
      <div class="inner">
        <h3>title</h3>
        <div class="lower">{attribute}</div>
      </div>
    {/if}
  {/each}
</div>

<style>
  .outer {
    justify-content: center;
    align-items: center;
    display: flex;
    margin: 1vw;
    margin-bottom: 10vw;
  }
  .upper,
  .lower {
    height: 15vw;
    width: 15vw;
    margin: 1vw;
    background-color: blue;
  }
  .lower {
    margin-top: 2em;
  }
  h1 {
    margin-bottom: 4em;
    text-align: center;
  }
  h3 {
    text-align: center;
  }
  .lower:hover,
  .upper:hover {
    width: 17vw;
    height: 17vw;
    margin: 0;
  }
</style>
