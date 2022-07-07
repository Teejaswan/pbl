<script>
  import { router } from "tinro";
  import PBL from "../assets/PBL.svg";
</script>

<nav>
  <div class="title"></div>
  <div class="content">
    <h3>PBL MADE EASY</h3>
    <h4><a href="/steps">STUCK UP WITH PROJECT?</a></h4>
    <h4><a href="/attribute">Why PME?</a></h4>
    <a href="/contact">Contact</a>
    <button class="login" on:click={(_) => router.goto("/login")}>Login</button>
    </div>
</nav>
<div class="outer">
  <div class="shadow">
  <div class="left">
  <div class="innerleft">
    <div class="container">
    <h1>PBL Projects</h1>
    <p>
      Problem-Based Learning is a method of learning in which complex real-world 
      problems are used to promote learning of concepts and 
      principles as opposed to direct presentation of facts and concepts.
    </p>
    </div>
  </div>
</div>
  </div>
  <div class="right">
    <img src={PBL} alt="fiygbfijyfguy" />
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Kanit&family=Yeseva+One&display=swap");
  .outer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    width: 100%;
    margin: 0;
    height: 100vh;
  }
  .shadow{
    filter: drop-shadow(1.25em .75em 2em rgba(87, 87, 88, 0.41));
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
   font-size: calc(1vh + 0.5vmin);
  } 
  .left{
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
    background-color:#E1FF27;
    width:51vw;
    
  }
  .innerleft {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
    background-color:#6273CB; 
    display:flex;
    flex:wrap;
    width:44vw;
    height:40vh;
    padding:0.5rem 0 2rem 1rem;
  }
  p{
    padding:0 2em 0 1em;
    font-size: calc(0.85rem + 0.5vmin);
  }

  h1 {
    font-family: "Yeseva One", sans-serif;
    padding-left:0.7em;
    color: #4a4747;
    font-size: calc(1rem + 1vmin);
  }
  img {
    width: 40vw;
  }
  h3,h4{
    color:black;
    font-size: calc(0.5rem + 1vmin);
  }

  button {
    font-size: small;
    display: grid;
    place-items: center;
    padding: 0;
    cursor: pointer;
    color:#6273CB;
    border:0.2em solid #6273CB;
    background-color: #E1FF27;
    width: 8.5vh;
    height: 4vh;
    padding:0 4vw 0 2vw;
    border-radius: 1em;
    transition: all 300ms ease-in-out;
  }
 
  button:active {
    background-color:#E1FF27 ;
    transform: translateY(2px);
  }
  
  a{
    text-decoration:none;
    color:black;
    font-weight:700;
    font-size: calc(0.5rem + 1vmin);
  }
  .right {
    width: 40vw;
  }
  @media only screen and (max-width:700px){
    .right{
      display:none;
    }
    .left{
      width:100vw;
      transition: all 50ms ease-in;
    }
    .innerleft{
      width:90vw;
      height:25vh;
      transition: all 50ms ease-in;
    }
    .outer{
      height:65vh;
      transition: all 50ms ease-in;
    }
    .title{
      height:16vh;
    }
    .content{
      height:10vh;
    }
  }
</style>
