<script>
  let title = "POSTS";
  import NavBar from "../NavBar.svelte";
  import PBL from "../../assets/PBL.svg";
  let links = [
    { name: "HOME", link: "/home" },
    { name: "PROFILE", link: "/profile" },
    { name: "PROJECT", link: "/project" },
  ];
</script>

<div class="home">
  <NavBar {title} {links} />
  <div class="container">
    <div class="inner">
      <div class="lime-background">
        <div class="info-card">
          <p class="heading">PLACE TO PROPOSE YOUR IDEAS AND GET UPVOTES</p>
          <p class="description">
            Submit your ideas and get better ideas and approvals from officials
          </p>
        </div>
      </div>
    </div>
    <div class="illustration">
      <img src={PBL} alt="PBL management" />
    </div>
  </div>
</div>

<style>
  .info-card {
    background: #6273cb;
    height: 30vh;
    width: 20vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5em;
    transform: skew(-14deg);
    border-radius: 1em;
    box-shadow: 0 0 10px 0 black;
  }
  .illustration {
    min-width: 30vw;
    min-height: 30vw;
  }
  .lime-background {
    display: grid;
    place-content: center;
    width: 30vw;
    height: 45vh;
    border-radius: 1em;
    background: #e1ff27;
  }
  .inner {
    display: flex;

    align-items: center;
  }
  .container {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
  }
  .home {
    background: #e9ecfd;
    height: 100vh;
  }
  .heading,
  .description {
    transform: skew(14deg);
    font-size: 70%;
    color: white;
    font-family: sans-serif;
  }
  .heading {
    font-weight: 700;
    font-size: medium;
  }
</style>
