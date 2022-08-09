<!-- <script>
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
      <div class="inner">
        <h3>Mentor: {team.mentor.name}</h3>
      </div>
      {#each team.members as member, index}
        <div class="inner">
          <h3>Member{index + 1}: {member.name}</h3>
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
</style> -->
<script></script>
<div class="body1">
<nav>
  <div class="title"></div>
  <div class="content">
    
    <div class="left">
    <h2>Team Name</h2>
    </div>
    <div class="right">   
    <h4>Home</h4>
    <h4>Progress</h4>
    <h4>Profile</h4>
    <h4>Posts</h4>
    </div>
    </div>
</nav>
<div class="container">
    <div class="left1">
      <h2 id="quote">PASSION.</h2>
      <h2 id="quote">PURPOSE.</h2>
      <h2 id="quote">PROGRESS.</h2>
      <h4 id="lines1">A single place to manage and keep track</h4>
      <h4 id="lines2"> of all your projects</h4>
      <!-- <img -->
    </div>
    <div class="right1">
      <div class="top">
        <h2>Team Name</h2>
      </div>
      <div class="bottom">
        <div class="one">
          <div class="m1">
          <h2>Members</h2>
        </div>
          <div class="m1">
          <h3>Tejaswini</h3>
            <h3>roll no.21BEC164</h3>
          </div>
          <div class="m1">
          <h3>Gowtham</h3>
            <h3>roll no. 21BCS028</h3>
          </div>
            <div class="m1">
        <h3>Nivashini</h3>
        <h3>roll no. 21BCS088</h3>
      </div>
        <div class="m2">
          <h3>Harshath</h3>
            <h3>roll no. 21BCS040</h3>
          </div>
        </div>
        <div class="two">
          <div class="m1">
          <h2>Faculties</h2>
        </div>
          <div class="m1">
            <h3>Faculty 1</h3>
            <h3>id: 1</h3>
          </div>
            <div class="m1">
          <h3>Faculty 2</h3>
            <h3>id: 2</h3>
          </div>
            <div class="m1">
          <h3>Faculty 3</h3>
            <h3>id: 3</h3>
          </div>
            <div class="m2">
          <h3>Faculty 4</h3>
            <h3>id: 4</h3>
          </div>
        </div>
      </div>
    </div>
</div>
</div>
<div class="body2">
<div class="outer">
<div class="inne1">
 <div class="inner3">
   <div class="inner4">
    <h3>Projects</h3> 
   </div>
 </div>
</div>
<div class="inner2">
  <h2 id="quote1">DREAM BIGGER.</h2>
  <h2 id="quote1">DO BIGGER.</h2>
  <h4 id="lines3">A single place to manage and keep track</h4>
  <h4 id="lines4"> of all your projects</h4>
 </div>
</div>
<div class="container2">
<div class="left2">
  <div class="box1">
   <h3>PROJECT-NAME</h3>
   <h3>started on:05-06-2021</h3>
  </div>
  <div class="box2">
    <!-- svg -->
  </div>
</div>
  <div class="right2">
    <!-- svg -->
  </div>
</div>
</div>
<style>
  .body1{
    height:110vh;
    overflow: hidden;
  }
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
   font-size: clamp(1em 2em 3em);
   font-weight:700;
   overflow:hidden;
  } 
  .right{
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    font-weight:700;
    font-size:2vh;
    width:40vw;
  }
  .left{
    font-weight:700;
    font-size:2.2vh;
    width:40vw;
  }
  .container{
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;
    height:100vh;
  }
  .left1{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:40vw;
    font-size: 3vh;
    font-family:sans-serif ;
  }
h2{
  margin-block-start:0.1em;
  margin-block-end:0.1em;
  font-size:2em;
}
#lines1{
  margin-block-start:0.3em;
  margin-block-end:0.1em;
  font-size: clamp(1em 2em 3em); 
}
#lines2{
  margin-block-start:0.1em;
  margin-block-end:0.1em;
  font-size: clamp(1em 2em 3em);
}
#quote{
  font-size: clamp(1em 2em 3em);
}
.bottom{
  display:grid;
  grid-template-columns:1fr 1fr;
  font-size: clamp(1em 2em 3em);
  place-items:center;
  border-radius:0 0 1em 1em;
}
.top{
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#6273CB;
  font-size: clamp(1em 2em 3em);
  width:40vw;
  height:10vh;
  border-radius:1em 1em 0 0;
}
.right1{
  display:flex;
  flex-direction :column;
  justify-content:center;
  align-items:center;
  width:40vw;
  border-radius:1em;
  box-shadow:0 0 1.5em 0 #a8a9a8;
}
.one{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:20vw;
  border-right:solid #9d9e9d 0.1em;
}
.two{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:20vw;
}
.m1{
  border-bottom:solid #9d9e9d 0.1em;
  font-size: clamp(1em 2em 3em);
  width:20vw;
  height:12vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#E9ECFD;
}
.m2{
  width:20vw;
  height:12vh;
  font-size: clamp(1em 2em 3em);
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  background-color:#E9ECFD;
}
h3{
  margin-block-start:0.2em;
  margin-block-end:0.2em;
}

.body2{
  height:100vh;
  overflow: hidden;
}
.outer{
  display:flex;
  padding:4em;
  height:20vh;
  justify-content:space-between;
  align-items:center;
  background-color:#E9ECFD;
}
.container2{
  height:100vh;
  background-color:#E9ECFD;
}
.inner3{
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #E1FF27;
    width:34vh;
    margin:10px;
  }
  .inner4{
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #6273CB;
    width:24vh;
    padding:20px;
    margin:2px;
  }
  .inner2{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-weight:700;
    font-size: 3vh;
    font-family:sans-serif ;
    width:40vw;
    margin-top:220px;
  }
  .left2{
    display:flex;
    justify-content:space-evenly;
    align-items:center;    
    flex-direction:row;
    font-size: clamp(1em 2em 3em);
    width:40vw;
  }
  .container2{
    display:grid;
    place-items:center;
    grid-template-columns:1fr 1fr;
    overflow:hidden;
    height:70vh;
  }
  .box1{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:25vh;
    height:25vh;
    background-color:#fff;
    padding:1em;
    border-radius:1em;
    box-shadow:0 0 1.5em 0 #a8a9a8;
  }
  .box2{
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    width:25vh;
    height:25vh;
    background-color:#fff;
    padding:1em;
    border-radius:1em;
    box-shadow:0 0 1.5em 0 #a8a9a8;
  }
  #lines3{
  margin-block-start:2em;
  margin-block-end:0.1em;
  font-size: clamp(1em 2em 3em); 
}
#lines4{
  margin-block-start:0.1em;
  margin-block-end:0.1em;
  font-size: clamp(1em 2em 3em);
}
#quote1{
  font-size: clamp(1em 2em 3em);
}
@media only screen and (max-width:960px){
  .container{
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    height:100vh;
    margin-top:50px;
  }
  .top{
    width:45vh;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .bottom{
    width:45vh;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .m1,.m2{
    width:22.5vh;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .right1{
    width:45vh;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:20px;
  }
  .left1{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    font-size:2vh; 
    width:100vw;
    font-family:sans-serif ;
  }
  .one{
    width:22.5vh;
    display:flex;
    justify-content:center;
    align-items:center;
    border-right:solid #9d9e9d 0.1vh;
  }
  .two{
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:22.5vh;
}
.title{
      height:16vh;
    }
    .content{
      height:10vh;
    }
.outer{
  display:flex;
  flex-direction:column;
  padding:4em;
  justify-content:space-between;
  align-items:center;
  background-color:#E9ECFD;
  
}
}
@media only screen and (max-width:550px){
  .body{
    height:120vh;
  }
  .title{
      height:12vh;
    }
    .content{
      height:8vh;
    }
    .right{
      font-size:3vw;
    }
    .left{
      font-size:2.2vw;
    }
}
</style>


