<script>
  import Icon from "./icon.svelte";
  import NavBar from "./NavBar.svelte";
</script>

<div class="container">
  <div class="header">
    <h2>Teams project name</h2>
    <NavBar />
  </div>
  <div class="myteams">
    <h1>My Teams</h1>
    <div class="outer1">
      <div class="inner1">
        <div class="front1">
          <h3>Team number</h3>
        </div>
        <div class="below1">
          <div class="options1">
            <a href=" ">Go to profile</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="teams">
    <div class="header2">
      <h1>Available teams</h1>
      <div class="icon">
        <Icon icon="add" />
      </div>
    </div>
    <div class="outer2">
      <div class="inner2">
        <div class="front2">
          <div class="left">
            <h5>Team member-1</h5>
            <h5>Team member-2</h5>
            <h5>Team member-3</h5>
            <h5>Team member-4</h5>
          </div>
          <div class="right">
            <input type="password" />
            <input type="password" />
            <input type="password" />
            <input type="password" />
          </div>
        </div>
        <div class="below2">
          <div class="teamnumber">
            <h3>Team - 6</h3>
          </div>
          <div class="options2">
            <div class="icon">
              <Icon icon="edit" />
            </div>
            <div class="icon">
              <Icon icon="delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  * {
    margin: 0;
  }

  h2 {
    padding-top: 3vh;
    margin-bottom: 4vh;
    color: #413d3d;

    text-align: center;
  }
  .header {
    background-color: #d36767;
  }
  .myteams {
    display: flex;
    flex-direction: column;
    padding-bottom: 2em;
    min-height: 77vh;
    justify-content: center;
    align-items: center;
  }
  .outer1,
  .outer2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .outer1 {
    min-height: 50vh;
  }
  .outer2 {
    min-height: 50vh;
    width: 80vw;
  }
  .teams {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 10vh;
    background: #eae7dc;
    gap: 2em;
  }

  .inner1 {
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 20vh;
    align-items: center;
    justify-content: center;
  }
  .inner2 {
    display: flex;
    flex-direction: column;
    width: 70vw;
    min-height: 50vh;
    align-items: center;
    justify-content: center;
  }
  .below1 {
    width: 45vw;
    height: 10vh;
    background: #747272;
    z-index: 2;
    margin-top: 1em;
    margin-right: 1em;
    border-radius: 1em;
    transition: all 0.3s ease-in-out;
  }
  .below2 {
    display: flex;
    width: 61vw;
    height: 30vh;
    background: rgb(149, 148, 148);
    z-index: 2;
    position: absolute;
    margin-right: 3.5em;
    border-radius: 1em;
    transition: all 0.3s ease-in-out;
    margin-bottom: 0;
    align-items: center;
    padding-inline: 1em;
    justify-content: space-between;
  }
  .header2 {
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .header2 h1 {
    margin-left: 5vw;
  }
  .outer2:hover .below2 {
    margin-right: -3.5em;
  }
  .options1 {
    display: flex;
    height: 100%;
    width: 100%;

    align-items: flex-end;
    justify-content: flex-start;
  }
  .options1 a {
    padding: 1em;
  }
  .options2 {
    display: flex;
    flex-direction: column;

    gap: 1em;
  }
  .icon {
    border-radius: 0.3em;
    height: 2em;
    width: 2em;

    display: grid;
    place-items: center;
    transition: background 0.4s ease;
  }

  .icon:hover {
    background: rgb(188, 184, 184);
    cursor: pointer;
  }

  .icon:active {
    transform: translateY(1px);
  }

  a {
    color: rgb(0, 0, 0);

    text-decoration: none;
    font-size: 1em;
    font-weight: 500;
  }
  .left h5,
  .right input {
    margin: 0.2em 0;
    height: 3vw;
    width: 20vw;
  }

  a:hover {
    text-decoration: underline;
  }
  a:active {
    transform: translateY(-2px);
  }
  h1 {
    text-align: center;
  }
  .front1 {
    position: absolute;
    width: 45vw;
    height: 10vh;
    background: #d36767;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
  }
  .front2 {
    position: absolute;
    width: 60vw;
    height: 30vh;
    background: #d36767;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 1em;
  }
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 20vw;

    height: 100%;
    font-size: calc(0.75em + 1vmin);
    margin: 0;
  }
  .left h5,
  .right input {
    height: 2.3vw;
    text-align: center;
    margin: 0;
    border: 0;
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
    width: 20vw;

    height: 100%;
  }
  .teamnumber h3 {
    text-orientation: mixed;
    writing-mode: vertical-rl;
    transform: rotateZ(180deg);
  }

  .inner1:hover .below1 {
    height: 18vh;
    width: 50vw;
    margin-left: 1em;
    margin-top: 2em;
  }
</style>
