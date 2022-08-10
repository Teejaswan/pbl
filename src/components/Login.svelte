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

<!-- <div class="outer">
  <div class="inner">
     <img src={LoginImage} alt="" class="logo" /> -->
<!--
    <div class="title">Login Details</div>
    <div class="fields">
      <div class="username">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
          />
        </svg>
        <input
          type="username"
          class="user-input"
          placeholder="Username"
          bind:this={inputs[0]}
          bind:value={user.name}
          autofocus
        />
      </div>
      <div class="password">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"
          />
        </svg>
        <input
          type="password"
          class="pass-input"
          placeholder="Password"
          bind:this={inputs[1]}
          bind:value={user.password}
        />
      </div>
    </div>
    <button class="login" on:click={login}>Login</button>
  </div>
</div> -->

<!-- <style>
  .outer {
    height: 100vh;
    width: 100vw;

    display: flex;

    color: rgb(24, 12, 12);

    justify-content: center;
    align-items: center;
  }
  .inner {
    display: flex;
    background-color: #eae7dc;

    max-width: 50vh;
    border-radius: 3em;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%);
    gap: 2em;
    padding-block: 6em;
  }

  .title {
    text-align: center;
    font-size: 28px;
    padding-top: 24px;
    letter-spacing: 0.5px;
  }
  input {
    border: none;
    outline: none;
    background: none;
    color: black;
    font-size: 18px;
    height: 30px;
  }
  .username,
  .password {
    border-radius: 2em;
    border: 1px solid black;
    box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%);
    background-color: #fff;
    display: flex;
    padding: 0.5em;
    height: 1.5em;
    width: 35vh;
    justify-content: center;
    align-items: center;
  }
  .fields svg {
    height: 1em;
    padding-right: 1em;
  }
  .fields {
    display: flex;
    flex-direction: column;
    gap: 1em;
    padding-inline: 2em;
  }
  .login {
    font-size: 400;
    display: grid;
    place-items: center;

    cursor: pointer;
    border: none;
    outline: none;
    color: white;
    background-color: #d36767;
    width: 25vh;
    height: 5vh;
    border-radius: 2em;
    box-shadow: -2px 0px 7px 0px rgb(0 0 0 / 25%);
    transition: all 300ms ease-in-out;
  }
  .login:hover {
    background-color: #d28686;
    transform: translate(-2px, -2px);
    cursor: pointer;
  }
  .login:active {
    background-color: #e491cf;
    transform: translateY(2px);
  }
</style> -->

<div class="outer">
  <div class="inner">
    <div class="container1">
      <div class="content">
        <h3>WELCOME TO A PLATFORM FOR MAKING YOUR PROJECT WORK EASIER</h3>
        <!--img-->
      </div>
    </div>
    <div class="container2">
      <div class="header" />
      <h4>Login</h4>
      <div class="username">
        <h2>Username</h2>
        <div class="space" />
        <input
          type="username"
          class="user-input"
          bind:this={inputs[0]}
          bind:value={user.name}
          autofocus
        />
      </div>
      <div class="password">
        <h2>Password</h2>
        <div class="space" />
        <input
          type="password"
          class="pass-input"
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
