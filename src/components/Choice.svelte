<script></script>
 <div>
      <nav>
        <div class="Outer" >  
        <div class="Inner">
            <button class="Student">Student</button>
            <button class="Mentor">Mentor</button>
            <button class="HOD">HOD</button>
        </div>
        </div>
      </nav>
 </div>
  
<style>
    button{
      border: none;
      outline:none; 
      background-color : #fff;
      width: 18vw;
      height: 4vw;
      margin-bottom:2em;
      border-radius:2em;
      margin-inline: 2vw;
      box-shadow:0.8vh 0.8vh 0.8vh #cbced1,
      -0.8vh -0.8vh 0.8vh #fff;
      transition:top ease 5ms;
    }
    button:hover{
      background-color: #fad9f1; 
    }
    button:active{
      background-color: #fad2ef;
    }

    

    .Inner{
    
    display:flex;
    background-color:#ecf0f3;
    height:30em;
    width:25em;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    border-radius:1em;
    box-shadow: 0.8em 0.8em 1.25em #cbced1,
    -0.8em -0.8em 1.25em #fff;
    }
    .Outer{
      display:flex;
      height: 100vh;
      background-color: #ecf0f3;
      justify-content:center;
      align-items:center;
    }
    
</style>