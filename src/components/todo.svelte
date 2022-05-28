<script>
  import NavBar from "./NavBar.svelte";
</script>

<header>
  <h1>teams project name</h1>
  <NavBar />
</header>

<body>
  <div class="outer">
    <h1>Quote-1</h1>
    <h3>Tasks to do</h3>
    <div class="box1">
      <div class="heading">
        <h5>Task</h5>
        <h5>Due-date</h5>
        <h5>Assignee</h5>
      </div>

      <div class="content">
        <input class="radio" type="radio" />
        <input type="text" value="Creating layouts" />
        <input type="date" />
        <input type="text" />
      </div>
    </div>
    <h3>Completed</h3>
    <div class="box2" />
    <h3>Overdue</h3>
    <div class="box3" />
  </div>
</body>

<style>
  .outer {
    display: flex;
    flex-direction: column;
  }
  .box1,
  .box2,
  .box3 {
    height: 25vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    height: 30vh;
    font-weight: 700;
    color: #555;
    background-color: rgb(128, 19, 19);
    justify-content: center;
    align-items: center;
  }
  .heading,
  .content {
    display: grid;
  }
  .heading {
    grid-template-columns: 10vw 10vw 10vw 10vw;
  }
  .content {
    grid-template-columns: 8vw 8vw 8vw 8vw;
  }
</style>
