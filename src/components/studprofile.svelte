<script>
  import NavBar from "./NavBar.svelte";
</script>

<div class="header">
  <h1 style="text-align:center;">Teams project name</h1>
  <NavBar />
  </div>
  <h2>Crew number</h2>
  <div class="outerContainer">
    <div class="container">
      <div class="outer">
        <div class="inner">
          <h3>Member1:</h3>
          
        </div>
        <div class="inner">
          <h3>Member2:</h3>
          
        </div>
        <div class="inner">
          <h3>Member3:</h3>
          
        </div>
        <div class="inner">
          <h3>Member4:</h3>
          
        </div>
        <div class="inner">
          <h3>Member5:</h3>
          
        </div>
        <div class="inner">
          <h3>Member6:</h3>
          
        </div>
      </div>
    </div>
  </div>

      
  
 
 <style>
   .container{
    width: 60vw;
    background-color: #d36767;
    margin: 5em;
    border-radius: 1em;
    box-shadow: -5px 36px 75px -25px #db9bd3;
  }
  .outerContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .inner {
    display: flex;
    
   
  }
  .header {
    background: #d36767;
    max-width: 100%;
    text-align: center;
  }
 
  .outer {
    margin: 4em;
    display: flex;

    flex-direction: column;
  }
  h2{
    text-align:center;
  }
  
 </style> 


