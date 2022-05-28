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
    place-items: center;
    text-decoration: none;
    padding: 0;
    cursor: pointer;
    border: none;
    outline: none;
    color: black;
    background-color: rgb(87, 181, 123);
    width: 25vh;
    height: 8vh;
    padding: 2vh;

    border-radius: 2em;

    box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    transition: all 300ms ease-in-out;
  }
  * {
    box-sizing: border-box;
  }
  #Student,
  #Mentor,
  #HOD {
    margin-bottom: 30px;
    padding: 20px 10px 20px 5px;
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
    background-color: rgb(247, 198, 206);
    height: 85vh;
    width: 430px;
    padding: 60px 35px 35px 35px;
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
