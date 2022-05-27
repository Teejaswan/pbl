<script>
  import { router } from "tinro";
  import headerBg from "../assets/header.jpg";
</script>

<header>
  <div class="title">
    <h1>TITLE</h1>
    <button class="login" on:click={(_) => router.goto("/choice")}>login</button
    >
  </div>
  <div class="header">
    <div class="left">
      <h1>PBL Projects</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        perferendis autem rem reiciendis provident odio, voluptatem quae ut
        repudiandae doloribus natus, magnam quis! Ea blanditiis adipisci non
        fugit ratione eum?
      </p>
    </div>
    <div class="right">
      <img src={headerBg} alt="fiygbfijyfguy" />
    </div>
  </div>
</header>
<body />

<style>
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
    margin-inline: 5em;
    margin-right: 2em;
    margin-bottom: 10em;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgb(255, 255, 255);
    height: 10em;
    /*border-radius: 0 0 60px 60px;*/
  }
  body {
    all: unset;
  }
  h1,
  .login {
    margin-inline: 5em;
  }
  button {
    border: none;
    outline: none;
    background-color: rgb(87, 181, 123);
    width: 25vh;
    height: 8vh;
    padding: 2vh;

    border-radius: 2em;

    -webkit-box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    -moz-box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    transition: all 300ms ease-in-out;
  }
  button:hover {
    transform: translate(-2px, -2px);
    cursor: pointer;
  }
  button:active {
    background-color: #e491cf;
    transform: translateY(2px);
  }
</style>
