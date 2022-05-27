<script>
</script>

<div>
  <nav>
    <div class="Outer">
      <div class="Inner">
        <a href="/login" class="Student"> Student</a>
        <a href="/login" class="Mentor"> Mentor</a>
        <a href="/login" class="HOD">HOD</a>
      </div>
    </div>
  </nav>
</div>

<style>
  a {
    display: grid;
    place-items: center;
    text-decoration: none;
    font-family: sans-serif;
    color: rebeccapurple;
  }
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
    cursor:pointer;
  }

  a:hover {
    box-shadow: 0.8vh 0.8vh 2vh 0.5vh #cbced1, -0.8vh -0.8vh 2vh 0.5vh #fff;
    background-color: #fad9f1;
    transform: translate(-2px, -2px);
  }
  a:active {
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
    border-radius: 40px;
    box-shadow: 0.8em 0.8em 1.25em #cbced1, -0.8em -0.8em 1.25em #fff;
  }
  .Outer {
    display: flex;
    height: 100vh;
    width: 100vw;
    font-weight: 700;
    color: #555;
    background-color: #ecf0f3;
    justify-content: center;
    align-items: center;
  }
</style>
