<script>
  import NavBar from "./NavBar.svelte";
</script>

<div class="container">
  <div class="header">
    <h2>Teams project name</h2>
    <NavBar />
  </div>
  <h1>Quote-1</h1>
  <hr />
  <div class="outer">
    <h3>Tasks to do</h3>
    <div class="box1">
      <div class="heading">
        <h5 class="dummy">dummy</h5>
        <h5>Task</h5>
        <h5>Due-date</h5>
        <h5>Assignee</h5>
      </div>

      <div class="content">
        <div class="radio">
          <input class="radio" type="radio" />
        </div>
        <input type="text" value="Creating layouts" />
        <input type="date" />
        <input type="text" />
      </div>
    </div>
    <h3>Completed</h3>
    <div class="box2">
      <div class="heading">
        <h5>Task</h5>
        <h5>Completed-date</h5>
        <h5>Assignee</h5>
      </div>
      <div class="content">
        <input type="text" value="Creating layouts" />
        <input type="date" />
        <input type="text" />
      </div>
    </div>

    <h3>Overdue</h3>
    <div class="box3">
      <div class="heading">
        <h5>Task</h5>
        <h5>Estimated-date</h5>
        <h5>Assignee</h5>
      </div>
      <div class="content">
        <input type="text" value="Creating layouts" />
        <input type="date" />
        <input type="text" />
      </div>
    </div>
  </div>
</div>

<style>
  .outer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2em;
  }

  .box1,
  .box2,
  .box3 {
    height: 30vh;
    width: 70vw;
    display: flex;
    flex-direction: column;

    font-weight: 700;
    color: #555;
    background-color: #d36767;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    border-radius: 20px;
    box-shadow: -5px 36px 75px -25px #db9bd3;
  }
  .box3 {
    margin-bottom: 16vh;
  }

  .heading,
  .content {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin: 1em;
  }
  .header {
    background: #d36767;
    max-width: 100%;
    text-align: center;
  }
  input {
    height: 2vw;
    width: 9vw;
    border-radius: 0.7vw;
    padding: 0.1vw;
    font-size: calc(0.5em + 0.4vmin);
    padding-inline: 0.8em;
  }
  h5 {
    display: flex;
    height: 2vw;
    width: 10vw;
    border: none;
    justify-content: center;
    align-items: center;
  }
  hr {
    outline: 1px ridge grey;

    width: 70vw;
    margin-left: 14vw;
    margin-top: 60px;
  }
  .dummy {
    color: #d36767;
    width: 2vw;
  }
  h2 {
    padding-top: 3vh;
    margin-bottom: 4vh;
    color: #413d3d;
  }
  h1 {
    text-align: center;
    margin: 7vh 0 0 0;
    margin-inline: 0.5em;
    color: rgb(67, 66, 66);
  }
  * {
    overflow-y: none;
    margin: 0;
  }
  h3 {
    text-align: center;
    font-size: 23px;
    color: rgb(48, 47, 47);
    margin: 9vw 4vw 9vw 4vw;
    width: 92vw;
  }

  input[type="radio"] {
    border: 50px;
    width: 2vw;
    height: 1.3em;
  }

  .radio {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
