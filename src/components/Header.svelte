<script>
  import { router } from "tinro";
  import headerBg from "../assets/header.jpg";
</script>

<header>
  <div class="title">
    <h3>PROJECT-TITLE</h3>
    <button class="login" on:click={(_) => router.goto("/choice")}>Login</button
    >
    <a href="/contact">contact</a>
  </div>
</header>
<body>
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
</body>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Kanit&family=Yeseva+One&display=swap");
  .header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    place-items: center;
    /*margin-top: em;
    margin-inline: 5em;
    margin-right: 2em;
    margin-bottom: 10em;*/
    overflow: auto;
    width: 100%;
    margin: 0;
    height: 90vh;
  }
  .title {
    display: flex;
    justify-content: space-around;
    align-items: center;

    background-color: #eae7dc;
    height: 100%;
    /*border-radius: 0 0 60px 60px;*/
  }
  .left {
    margin-left: 2em;
  }
  body {
    max-width: 100%;
  }
  /*h1,
  .login {
    margin-;
  }*/
  h1 {
    font-family: "Yeseva One", sans-serif;
    color: #4a4747;
  }
  img {
    width: 40vw;
  }

  button {
    font-size: small;
    display: grid;
    place-items: center;
    padding: 0;
    cursor: pointer;
    border: none;
    outline: none;
    color: white;
    background-color: #d36767;
    width: 8vh;
    height: 3vh;
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
  header {
    height: 10vh;
  }

  body {
    width: 100vw;
  }
  .right {
    width: 40vw;
  }
</style>
