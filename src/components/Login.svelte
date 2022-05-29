<script>
  import LoginImage from "../assets/Login.jpg";
</script>

<body>
  <div class="Login-div">
    <!-- <div class="Logo"> -->
    <img src={LoginImage} alt="" class="Logo" />
    <!-- </div> -->
    <div class="title">Login Details</div>
    <div class="Fields">
      <div class="Username">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"
          />
        </svg>
        <input type="username" class="user-input" placeholder="Username" />
      </div>
      <div class="Password">
        <svg class="svg-icon" viewBox="0 0 20 20">
          <path
            d="M17.308,7.564h-1.993c0-2.929-2.385-5.314-5.314-5.314S4.686,4.635,4.686,7.564H2.693c-0.244,0-0.443,0.2-0.443,0.443v9.3c0,0.243,0.199,0.442,0.443,0.442h14.615c0.243,0,0.442-0.199,0.442-0.442v-9.3C17.75,7.764,17.551,7.564,17.308,7.564 M10,3.136c2.442,0,4.43,1.986,4.43,4.428H5.571C5.571,5.122,7.558,3.136,10,3.136 M16.865,16.864H3.136V8.45h13.729V16.864z M10,10.664c-0.854,0-1.55,0.696-1.55,1.551c0,0.699,0.467,1.292,1.107,1.485v0.95c0,0.243,0.2,0.442,0.443,0.442s0.443-0.199,0.443-0.442V13.7c0.64-0.193,1.106-0.786,1.106-1.485C11.55,11.36,10.854,10.664,10,10.664 M10,12.878c-0.366,0-0.664-0.298-0.664-0.663c0-0.366,0.298-0.665,0.664-0.665c0.365,0,0.664,0.299,0.664,0.665C10.664,12.58,10.365,12.878,10,12.878"
          />
        </svg>
        <input type="password" class="pass-input" placeholder="Password" />
      </div>
    </div>
    <button class="Signin">Login</button>
  </div>
</body>

<style>
  body {
    
    margin: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    display: flex;
    height: 100vh;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    color: #555;
    background-color: #fff;
    justify-content: center;
    align-items: center;
  }
  .Login-div {
    display: grid;
    background-color: rgb(247, 198, 206);
    height: 700px;
    width: 55vh;
    padding: 60px 35px 35px 35px;
    border-radius: 3em;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
  }
  .Logo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin: 0 auto;
    box-shadow: 0 0 2px #5f5f5f, 0 0 0 5px #ecf0f3, 8px 8px 15px #a7aaaf,
      -8px -8px 15px #fff;
  }
  .title {
    text-align: center;
    font-size: 28px;
    padding-top: 24px;
    letter-spacing: 0.5px;
  }
  .Fields {
    width: 47vh;
    padding: 75px 5px 5px 5px;
  }
  .Fields input {
    border: none;
    outline: none;
    background: none;
    color: black;
    font-size: 18px;
    padding: 20px 10px 20px 5px;
  }
  .Username,
  .Password {
    margin-bottom: 30px;
    border-radius: 2em;
    border: 1px solid black;
    box-shadow: 8px 8px 8px #bdbfc2;
    background-color: #fff;
  }
  .Fields svg {
    height: 22px;
    margin: 0 10px -3px 25px;
  }
  .Signin {
    display: grid;
    place-items: center;
    text-decoration: none;
    padding: 0;
    cursor: pointer;
    border: none;
    outline: none;
    color: black;
    background-color: rgb(87, 181, 123);
    width: 47vh;
    height: 8vh;
    padding: 2vh;

    border-radius: 2em;

    -webkit-box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    -moz-box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    transition: all 300ms ease-in-out;
  }
  .Signin:hover {
    transform: translate(-2px, -2px);
    cursor: pointer;
    background-color: rgb(87, 181, 123);
  }
  .Signin:active {
    transform: translateY(2px);
    background-color: rgb(87, 181, 123);
  }
</style>
