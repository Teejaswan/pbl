<script>
  let title = "POSTS";
  import NavBar from "../NavBar.svelte";
  import PBL from "../../assets/PBL.svg";
  let links = [
    { name: "HOME", link: "/home" },
    { name: "PROFILE", link: "/profile" },
    { name: "PROJECT", link: "/project" },
  ];
</script>

<div class="home">
  <NavBar {title} {links} />
  <div class="container">
    <div class="inner">
      <div class="lime-background">
        <div class="info-card">
          <p class="heading">PLACE TO PROPOSE YOUR IDEAS AND GET UPVOTES</p>
          <p class="description">
            Submit your ideas and get better ideas and approvals from officials
          </p>
        </div>
      </div>
    </div>
    <div class="illustration">
      <img src={PBL} alt="PBL management" />
    </div>
  </div>
</div>
<div class="ideas">
  <div class="idea">
    <h2>PROPOSED IDEAS</h2>
    <div class="table">
      <div class="name">
        <div class="number">
          <h3>Team 6</h3>
          </div>
        <div class="proposal">
          <h3>PROPOSAL-1</h3>
        </div>
        <div class="icon">
          </div>
      </div>
        <div class="post">
          <div class="display">
          <div class="statement">
            <h3>PROBLEM STATEMENT</h3>
          </div>
          <div class="space">
          </div>
          </div>
          <div class="display">
          <div class="solution">
            <h3>PROPOSED SOLUTION</h3>
          </div>
          <div class="space">
          </div>
          </div>
          <div class="display">
          <div class="queries">
            <h3>QUERIES</h3>
          </div>
          <div class="space">
          </div>
          </div>
        </div>
        <div class="comment">
          <div class="head">
          <h3>Comments</h3>
          </div>
          <div class="suggestions">
            <div class="nice">
              <h3>Nice one</h3>
              <h4>HOD</h4>
            </div>
            <hr>
            <div class="good">
              <h3>Good</h3>
              <h4>Mentor</h4>
            </div>
          </div>
        </div>
      </div>
  </div>
 </div>
  

<style>
 
.info-card {
    background: #6273cb;
    height: 30vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5em;
    transform: skew(-14deg);
    border-radius: 1em;
    box-shadow: 0 0 10px 0 black;
  }
  .illustration {
    min-width: 30vw;
    min-height: 30vw;
  }
  .lime-background {
    display: grid;
    place-content: center;
    width: 30vw;
    height: 45vh;
    border-radius: 1em;
    background: #e1ff27;
  }
  .inner {
    display: flex;
    align-items: center;
  }
  .container {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  .home {
    background: #e9ecfd;
    height: 100vh;
  }
  .heading,
  .description {
    transform: skew(14deg);
    font-size: 70%;
    color: white;
    font-family: sans-serif;
  }
  .heading {
    font-weight: 700;
    font-size: medium;
   } 
   .table{
    display:flex;
    flex-direction: column;
    align-items: center;
   }
   .name{
    display: flex;
    flex-direction:row;
    z-index: 1;
    width:80vw;
    height:12vh;
    margin:2em 2em 0 2em;
    box-shadow: 0 0 10px 0 black;
    border-radius: 0.5em 0.5em 0 0;
   }
   .number{
    background-color: #6273cb;
    width:12vw;
    text-align:center;
   }
   .proposal{
    background-color: #e9ecfd;
    width:66vw;
    text-align: center;
   }
   .icon{
    background-color: #e9ecfd;
    width:12vw;
   }
   .post{
    background-color: #e1ff27;
    width:80vw;
    display:flex;
    flex-direction: column;
  }
   .display{
    display: flex;
    flex-direction: row;
    width:70vw;
    align-items: center;
    margin:0.5em 2em 0 2em;
   }
   .statement,.solution,.queries{
    background-color: #6273cb;
    border-radius:0.5em 0 0 0.5em;
    width:15vw;
    height:14vh;
    margin:2em 0 2em 2em;
    padding:0.5em;
   }
   .statement,.solution,.queries h3{
    color:white;
   }
   .space{
    background-color: white;
    border-radius: 0 0.5em 0.5em 0;
    width:55vw;
    height:14vh;
    margin:2em 0 2em 0;
    padding:0.5em;
   }
   /* h3{
    font-size: calc(0.75em+1vmin);
   } */
   .comment{
    background-color: #6273cb;
    display: flex;
    flex-direction:column;
    width:80vw;
   }
   .nice,.good{
    display:flex;
    flex-direction: row;
    justify-content: space-around;
   }
   .head{
    margin:1em 1em 0 3em;
   }
   .suggestions{
       display:flex;
       flex-direction: column;
       margin-left:1em;
   }
   hr{
    border:1.5px solid black;
    width:80%;
   }
</style>
