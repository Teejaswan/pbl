<script>
  import { router } from "tinro";
  import headerBg from "../assets/header.jpg";
</script>

<nav>
  <div class="title"></div>
  <div class="content">
    <h3>PBL MADE EASY</h3>
    <h4>Stuck with project?</h4>
    <h4>Why PME?</h4>
    <a href="/contact">Contact</a>
    <button class="login" on:click={(_) => router.goto("/choice")}>Login</button>
    </div>
</nav>
<div class="outer">
  <div class="left">
    <h1>PBL Projects</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
      perferendis autem rem reiciendis provident odio, voluptatem quae ut
      repudiandae doloribus natus, magnam quis! Ea blanditiis adipisci non fugit
      ratione eum?
    </p>
  </div>
  <div class="right">
    <img src={headerBg} alt="fiygbfijyfguy" />
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
    transform: matrix(1, 0.03, -0.06, 1, 0, 0);
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
  } 
  .left {
    margin-left: 2em; 
  }

  h1 {
    font-family: "Yeseva One", sans-serif;
    color: #4a4747;
  }
  img {
    width: 40vw;
  }
  h3,h4{
    color:black;
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
    padding:0 4.5em 0 2em;
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
  }
  .right {
    width: 40vw;
  }
</style>
