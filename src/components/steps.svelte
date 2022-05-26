<script>
  let processes = [1, 2, 3, 4, 5];
</script>

<div class="outer">
  <h1>STEPS IN A PROJECT</h1>
  {#each processes as process}
    {#if process % 2 != 0}
      <div class="inner">
        <div class="circle"><div>text1</div></div>
        <div class="rectangle"><div>text1</div></div>
      </div>
      <br />
    {:else}
      <div class="inner">
        <div class="rectangle"><div>text1</div></div>
        <div class="circle"><div>text1</div></div>
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
    margin: 6vw 0;
  }

  .circle {
    align-items: center;
    justify-content: center;
    height: 11em;
    width: 11em;
    background: rgb(211, 103, 103);
    border-radius: 50em;
  }
  .rectangle {
    height: 15em;
    width: 25em;
    align-items: center;
    justify-content: center;
    border-radius: 2em;
    background: rgb(226, 169, 169);
    box-shadow: -5px 36px 75px -25px #db9bd3;
    -webkit-box-shadow: -5px 36px 75px -25px #db9bd3;
    -moz-box-shadow: -5px 36px 75px -25px #db9bd3;
    -o-box-shadow: -5px 36px 75px -25px #db9bd3;
  }

  h1 {
    text-align: center;
    margin-bottom: 4em;
  }
  .outer {
    margin-bottom: 5em;
  }
</style>
