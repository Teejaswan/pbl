<script>
</script>

<div>
  <nav>
    <div class="Outer">
      <div class="Inner">
        <a href="/login" class="Choice" id="Student"> Student</a>
        <a href="/login" class="Choice" id="Mentor"> Mentor</a>
        <a href="/login" class="Choice" id="HOD">HOD</a>
      </div>
    </div>
  </nav>
</div>

<style>
  a {
    display: grid;

    text-decoration: none;
    cursor: pointer;
    place-items: center;
    color: black;
    background-color: #d36767;
    width: 20vh;
    height: 5vh;

    border-radius: 2em;

    box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    transition: all 300ms ease-in-out;
  }
  #Student,
  #Mentor,
  #HOD {
    margin-bottom: 30px;
    border-radius: 25px;
    box-shadow: 0.8vh 0.8vh 0.8vh #bdbfc2;
    transition: all 300ms ease-in-out;
  }
  a:hover {
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
    height: 60vh;
    width: 50vh;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 40px;
    box-shadow: 0.8em 0.8em 1.25em #cbced1;
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
