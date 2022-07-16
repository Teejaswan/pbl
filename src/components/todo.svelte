<script>
import NavBar from "./NavBar.svelte";
let title = "Worksapce";
let links = [{name:"Home",link:"/home"},
             {name:"Profile",link:"/profile"},
             {name:"Posts",link:"/posts"},
             {name:"progress",link:"/user/student/progress"}
            ];


 

  const user = JSON.parse(localStorage.getItem("user"));
  const team = JSON.parse(localStorage.getItem("team"));
</script>
<NavBar {title} {links}/>
<!-- <div class="container">
  <div class="header">
    <h2>Teams {team.no}</h2>
    
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
</style>  -->
<body>
  <div class="bodytodo">
    <div class="work">
      <p style="font-size:1.5rem;"><b>WORKSPACE</b></p>
    </div>
    <div class="content">
      <div class="c1">
        <div class="todo">
          <div class="head">
            <p><b>TASK TO DO</b></p>
          </div>
          <div class="inner">
            <div class="up">
              <div class="left">
                <div class="left1">
                  <p style="font-size:1.5rem;"><b>Completing the UI</b></p>
                </div>
                <div class="left2">
                  <div class="left21">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">Assigned Date</p>
                    <p><b>12-06-2022</b></p>
                  </div>
                  <div class="left22">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">Due Date</p>
                    <p><b>12-07-2022</b></p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="right1">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assigner</p>
                  <p style="font-size:1.2rem;"><b>MENTOR</b></p>
                </div>
                <div class="right2">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assignee</p>
                  <p style="font-size:1.2rem;"><b>MEMBER-1</b></p>
                </div>
              </div>
            </div>
            <div class="bottom"></div>
          </div>
        </div>
      </div>
      <div class="c2">
        <div class="todo">
          <div class="head">
            <p><b>OVER-DUE</b></p>
          </div>
          <div class="inner">
            <div class="up">
              <div class="left">
                <div class="left1">
                  <p style="font-size:1.5rem;"><b>Completing the UI</b></p>
                </div>
                <div class="left2">
                  <div class="left21">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">Assigned Date</p>
                    <p><b>12-06-2022</b></p>
                  </div>
                  <div class="left22">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">Due Date</p>
                    <p><b>12-07-2022</b></p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="right1">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assigner</p>
                  <p style="font-size:1.2rem;"><b>MENTOR</b></p>
                </div>
                <div class="right2">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assignee</p>
                  <p style="font-size:1.2rem;"><b>MEMBER-1</b></p>
                </div>
              </div>
            </div>
            <div class="bottom"></div>
          </div>
        </div>
      </div>
      <div class="c3">
        <div class="todo">
          <div class="head">
            <p><b>COMPLETED</b></p>
          </div>
          <div class="innercom">
            <div class="up">
              <div class="left">
                <div class="left1">
                  <p style="font-size:1.5rem;"><b>Completing the UI</b></p>
                </div>
                <div class="left2">
                  <div class="left21">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">Assigned Date</p>
                    <p><b>12-06-2022</b></p>
                  </div>
                  <div class="left22">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">Due Date</p>
                    <p><b>12-07-2022</b></p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="right1">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assigner</p>
                  <p style="font-size:1.2rem;"><b>MENTOR</b></p>
                </div>
                <div class="right2">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assignee</p>
                  <p style="font-size:1.2rem;"><b>MEMBER-1</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
<style>
.bodytodo{
  display: flex;
  flex-direction: column;
  align-items: center;
  width:96rem;
  height:32rem;
}
.work{
  display:flex;
  width:90rem;
}
.content{
  display:flex;
  width:90rem;
}
.c1{
  display:flex;
  align-items: center;
  width:30rem;
  padding: auto;
}
.c2{
  display:flex;
  align-items: center;
  width:30rem;
}
.c3{
  display:flex;
  align-items: center;
  width:30rem;
}
.todo{
  display:flex;
  flex-direction: column;
  width:28rem;
  height:26.5rem;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
}
.head{
  display:flex;
  height:3rem;
  background-color: #6273CB;
  align-items: center;
  justify-content: center;
  color:white;
}
.inner{
  display: flex;
  flex-direction: column;
  width:90%;
  height:70%;
  background-color:  #E1FF27;
  margin-left: 1.3rem;
  margin-top: 1.5rem;
  border-radius:2rem;
}
.up{
  display:flex;
  height:80%;
  background-color: #E9ECFD;
  border-radius:2rem;
}
.left{
  display: flex;
  flex-direction: column;
  width:70%;
  height:100%;
}
.left1{
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 40%;
}
.left2{
  display: flex;
  width:100%;
  height:60%;
}
.left21{
  display: flex;
  flex-direction: column;
  width:50%;
  height:100%;
  align-items: center;
  justify-content:center;
}
.left22{
  display: flex;
  flex-direction: column;
  width:50%;
  height:100%;
  align-items: center;
  justify-content:center;
}
.right{
  display: flex;
  flex-direction: column;
  width:30%;
  height:100%;
}
.right1{
  display:flex;
  flex-direction: column;
  width:100%;
  height:50%;
  justify-content: center;
  align-items: center;
}
.right2{
  display:flex;
  flex-direction: column;
  width:100%;
  height:50%;
  justify-content: center;
  align-items: center;
}
.bottom{
  display:flex;
  background-color: #E1FF27;
  height:20%;
  border-radius:0 0 2rem 2rem;
}
.innercom{
  display: flex;
  flex-direction: column;
  width:90%;
  height:70%;
  margin-left: 1.3rem;
  margin-top: 1.5rem;
  border-radius:2rem;
}
@media only screen and (max-width: 1000px) {
        .content{
        display: flex;
        flex-direction: column;
        height:40rem;
        width:100%;
        position: relative;
        margin-left:3.5rem;
        }
    }  
</style>

