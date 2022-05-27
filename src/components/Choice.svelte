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
    border: none;
    outline: none;
    background-color: #fff;
    width: 15vw;
    height: 4vw;
    padding: 2px;
    margin-bottom: 2em;
    border-radius: 2em;
    margin-inline: 2em;
    box-shadow: 0.8vh 0.8vh 0.8vh #cbced1, -0.8vh -0.8vh 0.8vh #fff;
    transition: all 300ms ease-in-out;
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
    height: 25em;
    width: 25vw;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 1em;
    box-shadow: 0.8em 0.8em 1.25em #cbced1, -0.8em -0.8em 1.25em #fff;
  }
  .Outer {
    display: flex;
    height: 100vh;
    background-color: #ecf0f3;
    justify-content: center;
    align-items: center;
  }
</style>
