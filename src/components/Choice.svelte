<script>
  import { router } from "tinro";
</script>

<div>
  <nav>
    <div class="Outer">
      <div class="Inner">
        <button class="Choice" id="Student" on:click={(_) => router.goto("/login")}
          >Student</button
        >
        <button class="Choice" id="Mentor" on:click={(_) => router.goto("/login")}
          >Mentor</button
        >
        <button class="Choice" id="HOD" on:click={(_) => router.goto("/login")}>HOD</button>
      </div>
    </div>
  </nav>
</div>

<style>
  * {
    box-sizing: border-box;
}
  .Choice{
    border: none;
    outline: none;
    background-color: #fff;
    width: 100%;
    padding: 75px 5px 5px 5px;
    font-size:18px;
  }
  #Student,#Mentor,#HOD{
    margin-bottom: 30px;
    padding:20px 10px 20px 5px;
    border-radius:25px;
    box-shadow: 0.8vh 0.8vh 0.8vh #cbced1, -0.8vh -0.8vh 0.8vh #fff;
    transition: all 300ms ease-in-out;
  }
  .Choice:hover {
    box-shadow: 0.8vh 0.8vh 2vh 0.5vh #cbced1, -0.8vh -0.8vh 2vh 0.5vh #fff;
    background-color: #fad9f1;
    transform: translate(-2px, -2px);
  }
  .Choice:active {
    background-color: #e491cf;
    transform: translateY(2px);
  }

  .Inner {
    display: flex;
    background-color: #ecf0f3;
    height: 700px;
    width: 430px;
    padding: 60px 35px 35px 35px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius:40px;
    box-shadow: 0.8em 0.8em 1.25em #cbced1, -0.8em -0.8em 1.25em #fff;
  }
  .Outer {
    display: flex;
    height: 100vh;
    width:100vw;
    font-weight:700;
    color:#555;
    background-color: #ecf0f3;
    justify-content: center;
    align-items: center;
  }
</style>
