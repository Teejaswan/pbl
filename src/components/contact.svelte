<script>
  import { Route } from "tinro";
</script>

<!-- <div class="container">
  <div class="outer1">
  <div class="outer">
    <div class="inner">
      <h3>Contact</h3>
      </div>
      </div>
      </div>
      <div class="contact">
        <h4>0422-1234567</h4>
        <br>
        <a href="https://www.kct.ac.in/">www.kct.ac.in</a><br>
     </div>
     <div class="media">
         <a href="https://www.kct.ac.in/">www.kct.ac.in</a><br>
         <a href="https://www.kct.ac.in/">www.kct.ac.in</a><br>
         <a href="https://www.kct.ac.in/">www.kct.ac.in</a><br>
     </div>

</div> -->

<!-- <style>
  .inner {
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #6273CB;
    width:15vw;
    

  }
  .outer {
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #E1FF27;
    width:17vw;
    margin-left:1rem;
  }
  
  .container {
    background-color: #E9ECFD;
    display:flex;
    width:100vw;
    height: 40vh;
    
  }
  h3{
    text-align:left;
    
    padding: 0.5em 0.25em 0.5em 0.25em;
    font-size: calc(0.85em + 0.4vmin);
  }
  .contact{
    padding:2em 0 8em 3em;
  }
  .media{
  
  }
</style> -->

<div class="container">
  <div class="container1">
  <div class="inner1">
    <div class="inner2">
      <h3>CONTACT US</h3> 
    </div>
  </div>
  <div class="inner3">
    <h4>0422-1234567</h4>
    <a href="https://www.kct.ac.in/">www.kct.ac.in</a>
  </div>
  </div>
  
  <div class="container2">
    <a href="https://www.kct.ac.in/">www.kct.ac.in</a>
    <a href="https://www.kct.ac.in/">www.kct.ac.in</a>
    <a href="https://www.kct.ac.in/">www.kct.ac.in</a>
  </div>
</div>

<style>
  .container{
    display:grid;
    grid-template-columns:1fr 1fr;
    padding:1vw 0 0 6vw;
    width:100vw;
    height:40vh;
    background-color:#E9ECFD;
  }
  .inner1{
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #E1FF27;
    width:24vh;
  }
  .inner2{
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #6273CB;
    width:22vh;
    padding:0.2px;
  }
  .inner3{
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    margin-top:3em;
  }
  h3{
    text-align:left;
    padding-left:1em;
    font-size: calc(0.75em + 0.5vmin);    
  }
  h4{
    padding-bottom:2em;
  }
  .container2{
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
  }
  .container1{
    filter: drop-shadow(1.25em .75em 1.5em rgba(64, 64, 65, 0.41));
  }
  a{
    cursor:pointer;
    color:black;
    text-decoration: none;
    font-size:1.2em;
  }
</style>
