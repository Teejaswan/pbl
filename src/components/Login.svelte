<script>
  import { router } from "tinro";
  import Login1 from "../assets/login1.jpg";

  let user = {
    name: "",
    password: "",
  };

  const inputs = [];

  async function login() {
    const { name, password } = user;
    await fetch("/api/users/" + name + "/" + password)
      .then((res) => res.json())
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.user));
        localStorage.setItem("team", JSON.stringify(res.team));
        console.log(res);
        debugger;
        router.goto(`/user/${res.user.type}/${res.user.name}`);
      });
  }
</script>

<div class="outer">
  <div class="inner">
    <div class="container1">
      <div class="content">
        <h3>WELCOME TO A PLATFORM FOR MAKING YOUR PROJECT WORK EASIER</h3>
        <!--img-->
      </div>
    </div>
    <div class="container2">
      <div id="header" />
      <h4>Login</h4>
      <div class="username">
        <h2>Username</h2>
        <div class="space" />
        <input
          type="username"
          id="user-input"
          bind:this={inputs[0]}
          bind:value={user.name}
        />
      </div>
      <div class="password">
        <h2>Password</h2>
        <div class="space" />
        <input
          type="password"
          id="pass-input"
          bind:this={inputs[1]}
          bind:value={user.password}
        />
      </div>
      <div class="button">
        <button class="login" on:click={login}>Login</button>
        <button class="cancel">Cancel</button>
      </div>
    </div>
  </div>
</div>

<style>
  .outer {
    height: 100vh;
    width: 100vw;
    display: flex;
    color: black;
    justify-content: center;
    align-items: center;
  }
  .inner {
    display: flex;
    align-items: center;
    width: 50vw;
    height: 55.6vh;
    border-radius: 0 1em 0 0;
    padding: 0 6em 0 0;
    box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%);
  }
  h3 {
    font-family: "Lato", sans-serif;
    color: black;
    font-size: calc(1em + 1vmin);
  }
  .container1 {
    display: flex;
    width: 35vw;
    height: 51.5vh;
    background-color: #e1ff27;
    flex: wrap;
    justify-content: center;
    padding: 2em 1em 0 1em;
    border-radius: 0 0 0 1em;
  }
  .container2 {
    display: flex;
    width: 60vw;
    height: 51vh;
    flex-direction: column;
    margin: 2em 0 0 2em;
    justify-content: left;
    align-items: left;
    gap: 1.5em;
  }
  h4 {
    font-family: "Lato", sans-serif;
    display: flex;
    font-size: calc(0.75em + 0.5vmin);
    background-color: #6273cb;
    width: 8vw;
    height: 6vh;
    margin: 0;
    align-items: center;
    justify-content: left;
    padding-left: 0.6vw;
    z-index: 3;
    /* box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%); */
  }

  .header {
    background-color: #e1ff27;
    width: 10vw;
    height: 6vh;
    margin: 0;
    position: absolute;
    /* box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%); */
  }
  h2 {
    outline-color: #6273cb;
    font-family: "Lato", sans-serif;
    font-size: calc(0.75em + 0.5vmin);
  }
  input {
    border: 0.25em solid #6273cb;
    border-radius: 0.7em;
    outline: none;
    height: 3.5vh;
    width: 20vw;
  }
  .login {
    width: 12vh;
    height: 5vh;
    outline: none;
    border-radius: 1.2em;
    font-size: calc(0.75em + 0.5vmin);
    background-color: #6273cb;
    border: 0.25em solid #6273cb;
    color: white;
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }
  .cancel {
    width: 12vh;
    height: 5vh;
    outline: none;
    color: #6273cb;
    margin-left: 1em;
    border: 0.25em solid #6273cb;
    font-size: calc(0.75em + 0.5vmin);
    border-radius: 1.2em;
    cursor: pointer;
    transition: all 300ms ease-in-out;
  }
  .cancel:active {
    background-color: none;
    transform: translateY(2px);
  }
  .login:active {
    background-color: #6273cb;
    transform: translateY(2px);
  }
  .button {
    display: flex;
    flex-direction: row;
    height: 5vh;
    width: 20vw;
    justify-content: space-around;
  }
  .space {
    height: 0.5vw;
  }
</style>
