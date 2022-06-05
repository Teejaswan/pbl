<script>
  import NavBar from "./NavBar.svelte";

  const user = JSON.parse(localStorage.getItem("user"));
  const team = JSON.parse(localStorage.getItem("team"));
</script>

<div class="header">
  <h1 style="text-align:center;">Team - {team.no}</h1>
  <NavBar />
</div>
<h2>Crew {team.no}</h2>
<div class="outerContainer">
  <div class="container">
    <div class="outer">
      {#each team.members as member, index}
        <div class="inner">
          <h3>Member{index + 1}: {member.name}</h3>
        </div>
        <div class="inner">
          <h3>Faculty Mentor:</h3>
        </div>
        <div class="inner">
          <h3>Industry Mentor:</h3>
        </div>
      {/each}
    </div>
  </div>
</div>

<style>
  .container {
    width: 60vw;
    background-color: #d36767;
    margin: 5em;
    border-radius: 1em;
    box-shadow: -5px 36px 75px -25px #db9bd3;
  }
  .outerContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .inner {
    display: flex;
  }
  .header {
    background: #d36767;
    max-width: 100%;
    text-align: center;
  }

  .outer {
    margin: 4em;
    display: flex;

    flex-direction: column;
  }
  h2 {
    text-align: center;
  }
</style>
