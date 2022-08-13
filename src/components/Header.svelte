<script>
  import { router } from "tinro";
  import PBL from "../assets/PBL.svg";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  function steps() {
    dispatch("stepsScroll");
  }
</script>

<nav>
  <div class="title" />
  <div class="content">
    <h3>PBL MADE EASY</h3>

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
            Problem-Based Learning is a method of learning in which complex
            real-world problems are used to promote learning of concepts and
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
  .shadow {
    filter: drop-shadow(1.25em 0.75em 2em rgba(87, 87, 88, 0.41));
  }
  .title {
    width: 100vw;
    background-color: #e1ff27;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    height: 20vh;
    top: -3vh;
    position: absolute;
    clip-path: polygon(0 1%, 100% 0, 100% 100%, 0 75%);
    z-index: -2;
    /*border-radius: 0 0 60px 60px;*/
  }
  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 13vh;
    gap: 40%;
    padding-inline: 2em;
  }
  .left {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
    background-color: #e1ff27;
    width: 51vw;
  }
  .innerleft {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0% 100%);
    background-color: #6273cb;
    display: flex;
    flex: wrap;
    width: 44vw;
    height: 40vh;
    padding: 0.5rem 0 2rem 1rem;
  }
  p {
    color: rgb(0, 0, 0);
    padding: 0 2em 0 1em;
    font-size: 1.25em;
    width: 70%;
  }

  h1 {
    font-family: sans-serif;
    padding-left: 0.7em;
    color: #ffffff;
  }
  img {
    width: 40vw;
  }
  h3 {
    font-size: 1em;
  }
  h4 {
    color: #787676;
    font-size: 0.5em;
    cursor: pointer;
  }

  button {
    font-size: small;
    display: grid;
    place-items: center;
    padding: 0;
    cursor: pointer;
    color: #6273cb;
    border: 0.2em solid #6273cb;
    background-color: #e1ff27;
    width: 8.5vh;
    height: 4vh;
    padding: 0 4vw 0 2vw;
    border-radius: 1em;
    transition: all 300ms ease-in-out;
  }

  button:active {
    background-color: #e1ff27;
    transform: translateY(2px);
  }

  h4 {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
  .right {
    width: 40vw;
  }
  div {
    font-family: sans-serif;
  }

  @media only screen and (max-width: 700px) {
    .right {
      display: none;
    }
    .left {
      width: 100vw;
      transition: all 50ms ease-in;
    }
    .innerleft {
      width: 90vw;
      height: 25vh;
      transition: all 50ms ease-in;
    }
    .outer {
      height: 65vh;
      transition: all 50ms ease-in;
    }
    .title {
      height: 16vh;
    }
    .content {
      height: 10vh;
    }
  }
</style>
