<script>
  let processes = [1, 2, 3, 4, 5];
</script>

<div class="outer">
  <h1>STEPS IN A PROJECT</h1>
  {#each processes as process}
    {#if process % 2 != 0}
      <div class="inner">
        <div class="circle">{process}</div>
        <div class="rectangle">{process}</div>
      </div>
      <br />
    {:else}
      <div class="inner" style="order: {process};">
        <div class="rectangle">{process}</div>
        <div class="circle">{process}</div>
      </div>
      <br />
    {/if}
  {/each}
</div>

<style>
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 5vw 0;
  }

  .circle {
    text-align: center;

    height: 12em;
    width: 12em;
    background: rgb(211, 103, 103);
    border-radius: 50em;
  }
  .rectangle {
    display: none;
    height: 15em;
    width: 25em;

    border-radius: 2em;
    background: rgb(226, 169, 169);
    box-shadow: -5px 36px 75px -25px #db9bd3;
    -webkit-box-shadow: -5px 36px 75px -25px #db9bd3;
    -moz-box-shadow: -5px 36px 75px -25px #db9bd3;
    -o-box-shadow: -5px 36px 75px -25px #db9bd3;
  }
  .inner:hover .rectangle {
    display: block;
  }
  .inner:hover .circle {
    height: 8em;
    width: 8em;
    opacity: 0.8;
  }
  h1 {
    text-align: center;
    margin-bottom: 4em;
  }
  .outer {
    margin-bottom: 5em;
  }
</style>
