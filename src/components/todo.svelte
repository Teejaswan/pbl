<script>
  import NavBar from "./NavBar.svelte";

  const user = JSON.parse(localStorage.getItem("user"));
  const team = JSON.parse(localStorage.getItem("team"));
</script>

<div class="container">
  <div class="header">
    <h2>Teams {team.no}</h2>
    <NavBar />
  </div>
  <h1>Quote-1</h1>
  <hr />
  <div class="outer">
    <h3>Tasks to do</h3>

    {#each team.tasks.pending as task}
      <div class="pending">
        <input class="radio" type="radio" />
        <div class="box">
          <div class="heading">
            <h5>Task</h5>
            <h5>Due Date</h5>
            <h5>Assignee</h5>
          </div>
          <div class="content">
            <span>{task.name}</span>
            <span>{task.due}</span>
            <div>
              {#each task.assignees as assignee}
                <span>{assignee.name}</span>
              {/each}
            </div>
          </div>
        </div>
      </div>
    {/each}

    <h3>Completed</h3>

    {#each team.tasks.completed as task}
      <div class="box">
        <div class="heading">
          <h5>Task</h5>
          <h5>Completed Date</h5>
          <h5>Assignee</h5>
        </div>
        <div class="content">
          <span>{task.name}</span>
          <span>{task.due}</span>
          <div>
            {#each task.assignees as assiginee}
              <span>{assiginee.name}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}

    <h3>Overdue</h3>
    {#each team.tasks.overdue as task}
      <div class="box">
        <div class="heading">
          <h5>Task</h5>
          <h5>Estimated Date</h5>
          <h5>Assignee</h5>
        </div>
        <div class="content">
          <span>{task.name}</span>
          <span>{task.due}</span>
          <div>
            {#each task.assignees as assiginee}
              <span>{assiginee.name}</span>
            {/each}
          </div>
        </div>
      </div>
    {/each}
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

  .box {
    height: 30vh;
    width: 70vw;
    display: flex;
    gap: 2em;
    flex-direction: column;

    font-weight: 700;
    color: #555;
    background-color: #d36767;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    border-radius: 20px;
    box-shadow: -5px 36px 75px -25px #db9bd3;
    margin-bottom: 2em;
  }

  .pending .box {
    margin-bottom: 0;
  }

  .pending {
    display: grid;
    grid-template-columns: auto 1fr;
    margin-bottom: 2em;
    align-items: center;
  }

  .radio {
    border: 1px solid #555;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    background-color: #fff;
    margin-right: 1em;
  }

  .heading,
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
  }

  .content div {
    display: flex;
    flex-direction: column;
    gap: 1em;
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
    /* height: 2vw;
    width: 10vw; */
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
