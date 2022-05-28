<script>
  let attributes = [1, 2, 3, 4, 5];
</script>

<div class="container">
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
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Kanit&family=Yeseva+One&display=swap");

  .outer {
    justify-content: center;
    align-items: center;
    display: flex;
    height: 40vh;
  }
  .container {
    height: 100vh;
  }
  .upper,
  .lower {
    height: 15vw;
    width: 15vw;
    margin: 1vw;
    background-color: blue;
    transition: all 0.3s ease-in-out;
    border-radius: 20px;
  }
  .lower {
    margin-top: 2em;
  }
  h1 {
    padding: 15vh 0;
    text-align: center;
    font-family: "Yeseva One", sans-serif;
    color: rgb(74, 71, 71);
    margin-block: 0;
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
    box-shadow: 0 2vw 5vw -1vw rgb(89, 87, 87);
  }
  .inner {
    justify-content: center;
    align-items: center;
  }
</style>
