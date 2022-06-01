<script>
</script>

<div>
  <nav>
    <div class="Outer">
      <div class="Inner">
        <a href="/login" class="choice"> Student</a>
        <a href="/login" class="choice"> Mentor</a>
        <a href="/login" class="choice">HOD</a>
      </div>
    </div>
  </nav>
</div>

<style>
  a {
    font-size: 400;
    display: grid;
    place-items: center;
    padding: 0;
    cursor: pointer;
    border: none;
    outline: none;
    color: white;
    background-color: #d36767;
    width: 25vh;
    height: 5vh;
    text-decoration: none;
    border-radius: 2em;
    box-shadow: 5px 5px 10px 0px #a26868;
    transition: all 300ms ease-in-out;
    margin: 1em;
  }

  a:hover {
    background-color: #d28686;
    transform: translate(-2px, -2px);
    cursor: pointer;
  }
  a:active {
    background-color: #e491cf;
    transform: translateY(2px);
  }
  .Inner {
    display: flex;
    background-color: #eae7dc;
    height: 58vh;
    width: 45.5vh;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 40px;
    box-shadow: 0.8em 0.8em 2em -0.3em #cbced1;
  }
  .Outer {
    display: flex;
    height: 100vh;
    width: 100vw;
    background-color: #ffffff;
    justify-content: center;
    align-items: center;
  }
</style>
