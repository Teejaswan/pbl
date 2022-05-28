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
        <input type="radio" />
        <h5>Creating layout</h5>
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
  * {
    box-sizing: border-box;
  }
  .outer {
    display: flex;
    flex-direction: column;
  }
  .box1,
  .box2,
  .box3 {
    height: 25vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    height: 30vh;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    color: #555;
    background-color: rgb(128, 19, 19);
    justify-content: center;
    align-items: center;
  }
</style>
