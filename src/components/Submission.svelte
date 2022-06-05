<script>
  import Icon from "./icon.svelte";
  import NavBar from "./NavBar.svelte";

  const user = JSON.parse(localStorage.getItem("user"));
  const team = JSON.parse(localStorage.getItem("team"));
</script>

<div class="header">
  <nav>
    <h2>Teams project name</h2>

    <NavBar />
  </nav>
</div>

<div class="add">
  <h1>Quote 2</h1>
  <div class="iconContainer">
    <Icon icon="add" />
  </div>
</div>
<hr />
<div class="outerContainer">
  <div class="container-1">
    <div class="outer">
      <div class="inner">
        <h3>Problem statement :</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Idea :</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Queries :</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Team :</h3>
        <input type="text" />
      </div>
    </div>
  </div>
  <div class="submit1Button">
    <button class="submit1" type="submit"><b>Submit</b></button>
  </div>

  {#await fetch("/api/proposals") then data}
    {#await data.json() then data}
      {@const { proposals } = data}

      {#each proposals as proposal}
        <div class="container">
          <div class="outer">
            <div class="inner">
              <h3>Problem statement :</h3>
              <span>{proposal.title}</span>
            </div>
            <div class="inner">
              <h3>Idea :</h3>
              <span>{proposal.description}</span>
            </div>
            <div class="inner">
              <h3>Queries :</h3>
              <span>{proposal.queries}</span>
            </div>
            <div class="inner">
              <h3>Team : {proposal.teamId}</h3>

              {#if proposal.teamId == team.no}
                <div>
                  {#each team.members as member}
                    <span>{member.name}</span>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        </div>
        <div class="iconDiv">
          {#if proposal.teamId == team.no}
            <div class="iconContainer">
              <Icon icon="edit" />
            </div>

            <div class="iconContainer">
              <Icon icon="delete" />
            </div>
          {:else}
            <div class="iconContainer">
              <Icon icon="chat" />
            </div>
            <div class="iconContainer">
              <Icon icon="upgrade" />
            </div>
          {/if}
        </div>
      {/each}
    {/await}
  {/await}

  <div class="commentSection">
    <input class="comment2" type="text" placeholder="Enter your comments" />
    <div class="submitButton">
      <button class="submit2" type="submit">Submit</button>
    </div>
  </div>
</div>

<style>
  .header {
    background: #d36767;
    max-width: 100%;
    text-align: center;
  }

  h2 {
    padding: 3vh 0;
    padding-bottom: 4vh;
    color: #413d3d;
    margin: 0;
  }
  h1 {
    text-align: center;
    margin: 7vh 0 0 0;
    margin-inline: 0.5em;
    color: rgb(67, 66, 66);
  }
  .add {
    display: flex;

    align-items: baseline;
    justify-content: space-around;
  }
  .iconContainer {
    border-radius: 0.3em;
    height: 2em;
    width: 2em;
    margin: 0.3em;

    display: grid;
    place-content: center;
    transition: background 0.4s ease;
  }

  .iconContainer:hover {
    background: rgb(188, 184, 184);
    cursor: pointer;
  }

  .iconContainer:active {
    transform: translateY(1px);
  }
  hr {
    outline: 1px ridge grey;

    width: 70vw;
    margin-left: 14vw;
    margin-top: 60px;
  }
  .container-1,
  .container {
    width: 60vw;
    background-color: #d36767;
    margin: 3em;
    border-radius: 1em;
    box-shadow: -5px 36px 75px -25px #db9bd3;
  }
  .container input {
    background-color: #d36767;
  }
  .outerContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .inner {
    display: grid;
    grid-template-columns: 0.1fr 0.1fr;
    justify-content: flex-start;
    align-items: center;
  }
  .inner h3 {
    width: 20vw;
    font-size: calc(0.75em + 1vmin);
  }
  .inner input {
    padding: 0.5em;
    width: 20vw;
    margin: 1vw;
    border-radius: 0.5em;
    border: none;
    outline: none;
  }
  .outer {
    margin: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .comment2 {
    width: 25vw;
    height: 7vh;
    border-radius: 1em;
    border: 1px solid black;
  }
  .submit1,
  .submit2 {
    display: grid;
    place-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    color: black;
    background-color: #d36767;
    width: 20vh;
    height: 5vh;
    border-radius: 1.5em;
    box-shadow: 5px 5px 10px 0px #a26868;
    transition: all 300ms ease-in-out;
  }
  .submit1Button {
    display: flex;
    width: 100vw;
    justify-content: flex-end;
    align-items: center;
    padding-right: 40vw;
    height: 10vh;
  }
  .submit1:hover,
  .submit2:hover {
    transform: translate(-2px, -2px);
    cursor: pointer;
    background-color: #d28686;
  }
  .submit1:active,
  .submit2:active {
    transform: translateY(2px);
    background-color: #e491cf;
  }
  .submitButton {
    align-items: center;
    display: flex;
  }
  .iconDiv {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 60vw;
    height: 10vh;
  }
  .commentSection {
    width: 80vw;
    margin-left: 20vw;
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-bottom: 10vh;
  }
</style>
