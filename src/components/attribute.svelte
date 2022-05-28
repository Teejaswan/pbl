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
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Kanit&family=Yeseva+One&display=swap");

  .outer {
    justify-content: center;
    align-items: center;
    display: flex;
  }
  .upper,
  .lower {
    height: 15vw;
    width: 15vw;
    margin: 1vw;
    background-color: blue;
    transition: all 0.3s ease-in-out;
  }
  .lower {
    margin-top: 2em;
  }
  h1 {
    margin-bottom: 4em;
    text-align: center;
    font-family: "Yeseva One", sans-serif;
    color: rgb(74, 71, 71);
  }
  h3 {
    color: rgb(48, 47, 47);
    text-align: center;
  }
  .lower:hover,
  .upper:hover {
    width: 17vw;
    height: 17vw;
    margin: 0;
  }
  .inner {
    padding-bottom: 25vw;
  }
</style>
