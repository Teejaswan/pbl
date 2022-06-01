<script>
  import NavBar from "./NavBar.svelte";
</script>

<nav>
  <h1>TEAM NAME</h1>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
  <NavBar />
</nav>

<div class="add">
  <h2>Quote 2</h2>
 
</div>
<hr />
<div class="outerContainer">
    <i class="fa fa-plus-square-o" id="add" style="font-size:calc(1.5em + 1vmin);margin-left:80vw"></i>
  <div class="container-1">
    <div class="outer">
      <div class="inner">
        <h3>Problem statement :</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Idea :</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Queries :</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Team :</h3>
        <input type="text" />
      </div>
      
    </div>
  </div>
  <button class="submit" type="submit"><b>Submit</b></button>

  <div class="container-2">
    <div class="outer">
      <div class="inner">
        <h3>Problem statement :</h3>
        <input type="text" id="content" />
      </div>
      <div class="inner">
        <h3>Idea :</h3>
        <input type="text" id="content" />
      </div>
      <div class="inner">
        <h3>Queries :</h3>
        <input type="text" id="content" />
      </div>
      <div class="inner">
        <h3>Team :</h3>
        <input type="text" id="content" />
      </div>
    </div>
  </div>
  <p>
    <i class="fa fa-edit" id="edit"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-trash-o" id="trash"/>
  </p>
  
  <div class="container-3">
    <div class="outer">
      <div class="inner">
        <h3>Problem statement :</h3>
        <input type="text" id="content" />
      </div>
      <div class="inner">
        <h3>Idea :</h3>
        <input type="text" id="content" />
      </div>
      <div class="inner">
        <h3>Queries :</h3>
        <input type="text" id="content" />
      </div>
      <div class="inner">
        <h3>Team :</h3>
        <input type="text" id="content" />
      </div>
    </div> 
  </div>
  <input class="comment2" type="text" placeholder="Enter your comments"/>&nbsp;<button class="submit2" type="submit"><b>Submit</b></button><p><i class="fa fa-comments-o" id="comment1" style="font-size:calc(1.5em + 1vmin)"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-thumbs-o-up" id="upvote" style="font-size:calc(1.5em + 1vmin);"/></p>
</div>

<style>
  .container-1,
  .container-2,
  .container-3 {
    width: 60vw;
    background-color:#d36767;
    margin: 3em;
    border-radius: 1em;
    box-shadow: 0.8em 0.8em 2em -0.3em #cbced1;

  }
  .container-2 input,.container-3 input{ 
       background-color: #d36767;

  }
  .outerContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .inner {
    display: grid;
    grid-template-columns: 0.1fr 0.1fr;
    justify-content: flex-start;
    align-items: center;
  }
  .inner h3 {
    width: 20vw;
    font-size: calc(0.75em + 1vmin);
  } 
  .inner input {
    padding: 0.5em;
    width: 20vw;
    margin: 1vw;
    border-radius: 0.5em;
    border: none;
    outline: none;
  }
  .outer {
    margin: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  h1{
    background: #d36767;
    max-width: 100%;
    text-align: center;
    height: 2em;
    padding-top: 1em;
    margin:0;
  }
  h2{
    text-align: center;
  }
  #add{
    border-radius: 5em;
    padding:0.3vw 0.5vw 0.2vw 0.5vw;
    /* font-size: calc(1em + 1vmin); */
    box-shadow: 5px 5px 10px 0px #a26868;
    transition: all 300ms ease-in-out;
    background-color: #d36767;
  }
  #add:hover{
    transform: translate(-2px, -2px);
    cursor: pointer;
    background-color: #d36767;
  }
  #add:active{
    transform: translateY(2px);
    background-color: #e491cf;
  }
  #edit {
    border-radius: 1em;
    padding:0.5vw 0.5vw 0.5vw 0.5vw;
    font-size: calc(1.5em + 1vmin);
    box-shadow: 5px 5px 10px 0px #a26868;
    transition: all 300ms ease-in-out;
    background-color: #d36767;
  }
  #edit:hover {
    transform: translate(-2px, -2px);
    cursor: pointer;
    background-color: #d36767;
    
  }
  #edit:active {
    transform: translateY(2px);
    background-color: #e491cf;
  }
  #trash {
    border-radius: 1em;
    padding:0.5vw 0.7vw 0.5vw 0.7vw;
    font-size: calc(1.5em + 1vmin);
    box-shadow: 5px 5px 10px 0px #a26868;
    transition: all 300ms ease-in-out;
    background-color: #d36767;
  }
  #trash:hover {
    transform: translate(-2px, -2px);
    cursor: pointer;
    background-color: #d36767;
   
  }
  #trash:active {
    transform: translateY(2px);
    background-color: #e491cf;
  }
  p{
      margin-left: 40vw;
  }
  .submit {
    font-size: calc(0.5em + 1vmin);
    display: grid;
    place-items: center;
    margin-left: 39vw;
    cursor: pointer;
    border: none;
    outline: none;
    color: black;
    background-color: #d36767;
    width: 16vh;
    height: 5vh;
    border-radius: 2em;
    box-shadow: 5px 5px 10px 0px #a26868;
    transition: all 300ms ease-in-out;
  }
  .submit:hover {
    background-color: #d28686;
    transform: translate(-2px, -2px);
    cursor: pointer;
  }
  .submit:active {
    background-color: #e491cf;
    transform: translateY(2px);
  }
  #comment1{
    border-radius: 1em;
    padding: 1vh;
    margin:-4.6vh 0 0 2vw;
    box-shadow: 3px 3px 8px 0px #a26868;
    transition: all 300ms ease-in-out;
    background-color: #d36767;
  }
  #comment1:hover {
    transform: translate(-2px, -2px);
    cursor: pointer;
    background-color: #d28686;
    
  }
  #comment1:active {
    transform: translateY(2px);
    background-color: #e491cf;
  }
  .comment2 {
    width: 25vw;
    height: 7vh;
    border-radius:1em;
    border:1px solid black;
    outline:none;
    padding-left: 2vh;
    margin-left: -34vw;
  }
  .submit2 {
    font-size: calc(0.5em + 1vmin);
    display: grid;
    padding-top: 50vh;
    place-items: center;
    cursor: pointer;
    border: none;
    outline: none;
    color: black;
    background-color: #d36767;
    width: 16vh;
    height: 5vh;
    padding: 1vh;
    margin:-4.6vw 0 0 3vw;
    border-radius: 1em;
    box-shadow: 5px 5px 10px 0px #a26868;
    transition: all 300ms ease-in-out;
  }
  .submit2:hover {
    transform: translate(-2px, -2px);
    cursor: pointer;
    background-color:#d28686 ; 
  }
  .submit2:active {
    transform: translateY(2px);
    background-color: #e491cf;
  }
  #upvote {
    border-radius: 1em;
    padding: 1vh;
    margin:-90vw 0 0 0;
    box-shadow: 3px 3px 8px 0px #a26868;
    transition: all 300ms ease-in-out;
    background-color: #d36767;
  }
  #upvote:hover {
    transform: translate(-2px, -2px);
    cursor: pointer;
    background-color: #d28686;
    
  }
  #upvote:active {
    transform: translateY(2px);
    background-color: #e491cf;
  }

  
</style>
