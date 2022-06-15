<script>
  import { router } from "tinro";
  import headerBg from "../assets/header.jpg";
</script>

<nav>
  <div class="title">
    <div class="content">
    <h3>PBL MADE EASY</h3>
    <h4>Stuck with project?</h4>
    <h4>Why PME?</h4>
    <a href="/contact">Contact</a>
    <button class="login" on:click={(_) => router.goto("/choice")}>Login</button>
    </div>
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
  .title {
    clip-path:polygon(0 0, 100% 0%, 100% 21%, 0 11%);
    
    width: 100vw;
    background-color:#E1FF27;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    height: 20vh;
    position: absolute;
    z-index: 1;
    /*border-radius: 0 0 60px 60px;*/
  }
  .content{
    background: black;
    z-index: 2;
  }
  nav{
    height: 90vh;
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
    border: none;
    outline: none;
    color: #6273CB;
    background-color: #E1FF27;
    border-color: 6273CB;
    width: 8.5vh;
    height: 4vh;
    border-radius: 2em;
    box-shadow: 5px 5px 10px 0px #a26868;
    transition: all 300ms ease-in-out;
  }
  button:hover {
    background-color: #d28686;
    transform: translate(-2px, -2px);
    cursor: pointer;
  }
  button:active {
    background-color: #e491cf;
    transform: translateY(2px);
  }

  .right {
    width: 40vw;
  }
</style>
