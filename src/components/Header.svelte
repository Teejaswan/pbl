<script>
  import { router } from "tinro";
  import headerBg from "../assets/header.jpg";
</script>

<header>
  <div class="title">
    <h1>PROJECT-TITLE</h1>
    <button class="login" on:click={(_) => router.goto("/choice")}
      ><strong>Login</strong></button
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
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Kanit&family=Yeseva+One&display=swap");
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
    justify-content: space-around;
    align-items: center;

    background-color: #eae7dc;
    height: 10em;
    /*border-radius: 0 0 60px 60px;*/
  }
  body {
    all: unset;
  }
  /*h1,
  .login {
    margin-;
  }*/
  h1 {
    font-family: "Yeseva One", sans-serif;
    color: #4a4747;
  }
  button {
    display: grid;
    place-items: center;
    padding: 0;
    cursor: pointer;
    border: none;
    outline: none;
    color: white;
    background-color: #d36767;
    width: 15vh;
    height: 5vh;
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
</style>
