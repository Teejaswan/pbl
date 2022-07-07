<script>
 

  const user = JSON.parse(localStorage.getItem("user"));
  const team = JSON.parse(localStorage.getItem("team"));
</script>

<!--<div class="container">
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
</style> -->

<nav>
  <div class="title"></div>
  <div class="content">
    <h3>PROJECT NAME</h3>
    <h4><a href="/steps">Home</a></h4>
    <h4><a href="/attribute">Profile</a></h4>
    <h4><a href="/contact">Post</a></h4>
    <h4><a href="/progress">Progress</a></h4>
    </div>
</nav>
<div class="main">
  <div class="task_to_do">
  	<div class="ttd">
      
    	<div class="t1">
       <div class="t11">
         <div class="left">
           <div class="up"></div>
           <div class="down">
             <div class="d1"></div>
             <div class="d2"></div>
           </div>
         </div>
         <div class="right">
           <div class="upr">hi</div>
           <div class="downr">hello</div>
         </div>
       </div> 
      </div>
    	<div class="t2">
       
      </div>
    </div>
  </div>
  <div class="over_due">
  	<div class="od">
    	<div class="o1"></div>
    	<div class="o2"></div>
  	</div>
  </div>
  <div class="completed">
  	<div class="c">
    	<div class="c1"></div>
    	<div class="c2"></div>
  	</div> 
</div>
</div>
<style>
	.title{
    width: 100vw;
    background-color:#E1FF27;
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    height: 20vh;
    top:-3vh;
    position:absolute;
    clip-path: polygon(0 1%, 100% 0, 100% 100%, 0 75%);
    z-index:-2; 
    /*border-radius: 0 0 60px 60px;*/
  }
  .content{
   display: flex;
   flex-direction:row;
   justify-content: space-around;
   align-items: center;
   width:100vw;
   height: 13vh; 
   font-size: calc(1vh + 0.5vmin);
  }
  .main{
    display:flex;
    justify-content: space-around;
    align-items: center;
    width:90%;
    height:80%;
    flex-wrap: wrap;
    margin-top: 2.5rem;
    margin-right: 3rem;
    margin-left: 3rem;
    
  }
  .task_to_do{
    display:flex;
    justify-content: center;
    align-items: center;
    height:90%;
    width:30%;
    background-color: #6273CB;
    flex-wrap: wrap;
    box-shadow: 0.8em 0.8em 2em -0.3em rgb(189, 188, 188);
    color: white;
  }
  .ttd{
  	display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height:87.5%;
    width:100%;
    background-color: white;
    flex-wrap: wrap;	
    margin-top: 3.5rem;
  }
  .t1{
    display:flex;
    align-items: center;
    justify-content: center;
    width:80%;
    height: 40%;
    background-color: #E1FF27;
    border-radius: 1rem;
  }
  .t11{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height:87.5%;
    width:100%;
    background-color: red;
    flex-wrap: wrap;  
    margin-bottom: 3.5rem;
  }
  .left{
    display: flex;
    align-items:center ;
    justify-content: space-evenly;
    width: 60%;
    height: 100%;
    background-color: beige;
    flex-direction: column;
  }
 
  .up{
    display: flex;
    align-items:center ;
    justify-content: space-evenly;
    width: 100%;
    height: 30%;
    background-color: orange;
  }
  .down{
    display: flex;
    align-items:center ;
    justify-content: space-evenly;
    width: 100%;
    height: 70%;
    background-color: blue;
  }
  .d1{
    display: flex;
    align-items:center ;
    justify-content: space-evenly;
    width: 50%;
    height: 100%;
    background-color: blue;
  }
  .d2{
    display: flex;
    align-items:center ;
    justify-content: space-evenly;
    width: 50%;
    height: 100%;
    background-color: white;
  }
   .right{
    display: flex;
    align-items:center ;
    justify-content: space-evenly;
    width: 40%;
    height: 100%;
    background-color: violet;
    flex-direction: column;
  }
  .upr{
    display: flex;
    align-items:center ;
    justify-content: space-evenly;
    width: 100%;
    height: 50%;
    background-color: grey;
  }
  .downr{
    display: flex;
    align-items:center ;
    justify-content: space-evenly;
    width: 100%;
    height: 50%;
    background-color: grey;
  }
 
  .t2{
    display:flex;
    align-items: center;
    justify-content: center;
    width:80%;
    height: 40%;
    background-color: aquamarine;
    border-radius: 1rem;
  }
  .over_due{
    display:flex;
    justify-content: center;
    align-items: center;
    height:90%;
    width:30%;
    background-color: #6273CB;
    flex-wrap: wrap;
    box-shadow: 0.8em 0.8em 2em -0.3em rgb(189, 188, 188);
  }
  .od{
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height:87.5%;
    width:100%;
    background-color: white;
    flex-wrap: wrap;  
    margin-top: 3.5rem;
  }
  .o1{
    display:flex;
    align-items: center;
    justify-content: center;
    width:80%;
    height: 40%;
    background-color: aquamarine;
    border-radius: 1rem;
  }
  .o2{
    display:flex;
    align-items: center;
    justify-content: center;
    width:80%;
    height: 40%;
    background-color: aquamarine;
    border-radius: 1rem;
  }
  .completed{
    display:flex;
    justify-content: center;
    align-items: center;
    height:90%;
    width:30%;
    background-color: #6273CB;
    flex-wrap: wrap;
    box-shadow: 0.8em 0.8em 2em -0.3em rgb(189, 188, 188);
  }
  .c{
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height:87.5%;
    width:100%;
    background-color: white;
    flex-wrap: wrap;  
    margin-top: 3.5rem;
  }
  .c1{
    display:flex;
    align-items: center;
    justify-content: center;
    width:80%;
    height: 40%;
    background-color: aquamarine;
    border-radius: 1rem;
  }
  .c2{
    display:flex;
    align-items: center;
    justify-content: center;
    width:80%;
    height: 40%;
    background-color: aquamarine;
    border-radius: 1rem;
  }
    
</style>

