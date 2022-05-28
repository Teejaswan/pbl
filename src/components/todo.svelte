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
    <div class="box2" >
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
    <div class="box3" >
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
    width: 70vw;
    display: flex;
    flex-direction: column;
    height: 30vh;
    font-weight: 700;
    color: #555;
    background-color: rgb(128, 19, 19);
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }
  body {
    all: unset;
  }
  .heading,
  .content {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }
  header {
    background: red;
    max-width: 100%;
  }
  input {
    height: 2vw;
    width: 10vw;
  }
  h5 {
    display: flex;
    height: 2vw;
    width: 10vw;
    justify-content: center;
    align-items: center;
  }
</style>
