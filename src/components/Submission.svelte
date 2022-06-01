<script>
  import NavBar from "./NavBar.svelte";
</script>

<nav>
  <h1>TEAM NAME</h1>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <NavBar />
</nav>

<div class="add">
  <h1>Quote 2</h1>
  <!-- <add> -->
</div>
<hr />
<div class="outerContainer">
  <div class="container-1">
    <div class="outer">
      <div class="inner">
        <h3>Problem statement</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Idea</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Queries</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Team</h3>
        <input type="text" />
      </div>
      <!-- <post>  -->
    </div>
  </div>

  <div class="container-2">
    <div class="outer">
      <div class="inner">
        <h3>Problem statement</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Idea</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Queries</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Team</h3>
        <input type="text" />
      </div>
      <!-- <edit> <delete> -->
    </div>
  </div>

  <div class="container-3">
    <div class="outer">
      <div class="inner">
        <h3>Problem statement</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Idea</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Queries</h3>
        <input type="text" />
      </div>
      <div class="inner">
        <h3>Team</h3>
        <input type="text" />
      </div>
      <!-- <upvote> <comment> -->
    </div>
  </div>
</div>
<!-- <div class="container"> 
      <div class="statement">
        <h3>PROBLEM STATEMENT</h3>  
        <input type="text" placeholder="Enter statement "/>
    </div>
    <div class="idea">
        <h3>SOLUTION</h3>
        <input type="text" placeholder="Enter solution "/>
    </div>
    <div class="team">
        <h4>TEAM</h4>
        <input type="text" placeholder="Team number and Posted by"/>
    </div>
<div class="Outer">
  <div class="Inner">
    <h2>Problem Statement</h2>
    <input type="text" placeholder="Enter Statement" />
    <h2>Ideas</h2>
    <input type="text" placeholder="Enter Statement" />
    <h2>Team Name and Memeber Name</h2>
    <input type="text" placeholder="Enter Statement" />
    <h2>Queries</h2>
    <input type="text" placeholder="Enter Queries" />
  </div>
</div>
<br />
<button class="submit" type="submit"><b>Submit</b></button>
<p>
  <i
    class="fa fa-edit"
    id="edit"
    style="font-size:34px;margin: 0 0 0 36.8em;"
  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
    class="fa fa-trash-o"
    id="trash"
    style="font-size:34px;"
  />
</p>
<div class="Options1">
        <svg class="svg-icon" viewBox="0 0 20 20">
            <path d="M16.588,3.411h-4.466c0.042-0.116,0.074-0.236,0.074-0.366c0-0.606-0.492-1.098-1.099-1.098H8.901c-0.607,0-1.098,0.492-1.098,1.098c0,0.13,0.033,0.25,0.074,0.366H3.41c-0.606,0-1.098,0.492-1.098,1.098c0,0.607,0.492,1.098,1.098,1.098h0.366V16.59c0,0.808,0.655,1.464,1.464,1.464h9.517c0.809,0,1.466-0.656,1.466-1.464V5.607h0.364c0.607,0,1.1-0.491,1.1-1.098C17.688,3.903,17.195,3.411,16.588,3.411z M8.901,2.679h2.196c0.202,0,0.366,0.164,0.366,0.366S11.3,3.411,11.098,3.411H8.901c-0.203,0-0.366-0.164-0.366-0.366S8.699,2.679,8.901,2.679z M15.491,16.59c0,0.405-0.329,0.731-0.733,0.731H5.241c-0.404,0-0.732-0.326-0.732-0.731V5.607h10.983V16.59z M16.588,4.875H3.41c-0.203,0-0.366-0.164-0.366-0.366S3.208,4.143,3.41,4.143h13.178c0.202,0,0.367,0.164,0.367,0.366S16.79,4.875,16.588,4.875zM6.705,14.027h6.589c0.202,0,0.366-0.164,0.366-0.366s-0.164-0.367-0.366-0.367H6.705c-0.203,0-0.366,0.165-0.366,0.367S6.502,14.027,6.705,14.027z M6.705,11.83h6.589c0.202,0,0.366-0.164,0.366-0.365c0-0.203-0.164-0.367-0.366-0.367H6.705c-0.203,0-0.366,0.164-0.366,0.367C6.339,11.666,6.502,11.83,6.705,11.83z M6.705,9.634h6.589c0.202,0,0.366-0.164,0.366-0.366c0-0.202-0.164-0.366-0.366-0.366H6.705c-0.203,0-0.366,0.164-0.366,0.366C6.339,9.47,6.502,9.634,6.705,9.634z"></path>
        </svg>
    </div>
    <div class="Options2">
        <svg class="svg-icon" viewBox="0 0 20 20">
            <path d="M19.404,6.65l-5.998-5.996c-0.292-0.292-0.765-0.292-1.056,0l-2.22,2.22l-8.311,8.313l-0.003,0.001v0.003l-0.161,0.161c-0.114,0.112-0.187,0.258-0.21,0.417l-1.059,7.051c-0.035,0.233,0.044,0.47,0.21,0.639c0.143,0.14,0.333,0.219,0.528,0.219c0.038,0,0.073-0.003,0.111-0.009l7.054-1.055c0.158-0.025,0.306-0.098,0.417-0.211l8.478-8.476l2.22-2.22C19.695,7.414,19.695,6.941,19.404,6.65z M8.341,16.656l-0.989-0.99l7.258-7.258l0.989,0.99L8.341,16.656z M2.332,15.919l0.411-2.748l4.143,4.143l-2.748,0.41L2.332,15.919z M13.554,7.351L6.296,14.61l-0.849-0.848l7.259-7.258l0.423,0.424L13.554,7.351zM10.658,4.457l0.992,0.99l-7.259,7.258L3.4,11.715L10.658,4.457z M16.656,8.342l-1.517-1.517V6.823h-0.003l-0.951-0.951l-2.471-2.471l1.164-1.164l4.942,4.94L16.656,8.342z"></path>
        </svg>
   </div> -->

<!--<table>
        <tr>
            <th>Problem Statement</th>
            <td><input type="text" placeholder="Enter Statement"/></td>
        </tr>
        <tr>
            <th>Ideas</th>
            <td><input type="text" placeholder="Enter Statement"/></td>
        </tr>
        <tr>
            <th>Team</th>
            <td><input type="text" placeholder="Enter Statement"/></td>
        </tr>
        <tr>
            <th>Queries</th>
            <td><input type="text" placeholder="Enter Queries"></td>
        </tr>
    </table>
<p>
  <input
    class="comment"
    type="text"
    placeholder="Enter your comments"
  />&nbsp;<button class="submit2" type="submit"><b>Submit</b></button><i
    class="fa fa-thumbs-o-up"
    id="edit"
    style="font-size:34px;margin: -5em 0 0 39em;"
  />
</p>
-->
<style>
  .container-1,
  .container-2,
  .container-3 {
    width: 60vw;
    background-color: brown;
    margin: 3em;
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
  }
  .outer {
    margin: 4em;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  /*.head {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d36767;
    height: 8 em;
    margin-bottom: 5em;
  }
  .Add {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /*
    .statement,.idea,.team{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border:1px solid black;
        width:auto;
    }
    .statement input{
        margin-left:4.7vh;
        width:50%;

    }
    .idea input{
        margin-left: 25vh;
        width:50%;
    }
    .team input{
        margin-left: 34vh;
        width:50%
    }
  outer {
    /*border-collapse:collapse;
    width: 195vh;
    margin-top: 6vh;
    margin-left: 2vh;
    margin-right: 6vh;
    border-radius: 2em;
  }
  inner {
    display: flex;
    flex-direction: column;
  }
  input,
  textarea {
    outline: none;
    border: 1px solid black;
    border-radius: 1em;
  }

  h2 {
    width: 20%;
    background-color: #eae7dc;
    border-radius: 2em 0 0 2em;
  }
  h2,
  input {
    padding: 2vh;
    border: 1px solid black;
    border-collapse: collapse;
  }
  input {
    width: 100%;
    border: none;
  }
  hr {
    outline: 0.01vw ridge grey;

    width: 195vh;
    margin-left: 2.5vh;
    margin-top: 5vh;
  }
  .submit {
    display: grid;
    place-items: center;
    text-decoration: none;
    padding-top: 50vh;
    cursor: pointer;
    border: none;
    outline: none;
    color: black;
    background-color: rgb(87, 181, 123);
    width: 31vh;
    height: 7vh;
    padding: 1vh;
    margin: 0 0 0 160vh;
    border-radius: 2em;
    /* font-size: clamp(0.65em, 50%, 3em); 
    -webkit-box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    -moz-box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    transition: all 300ms ease-in-out;
  }
  .submit:hover {
    transform: translate(-2px, -2px);
    cursor: pointer;
    background-color: rgb(87, 181, 123);
  }
  .submit:active {
    transform: translateY(2px);
    background-color: rgb(87, 181, 123);
  }
  /* .Options1 svg{
        width:50px;
        height:30px;
        margin: 0 10px -3px 100px;
        background-color: #fff; 
    }
    .Options2 svg{
        width:50px;
        height:30px;
        margin: 0 10px 3px 200px;
        background-color: #fff; 
    } */
  /* #Delete{
        padding-left: 50px;
        padding-top: 20px;
    }
    #Edit{
        padding-top:-10px;
    } 
  #edit {
    border-radius: 1em;
    padding: 1vh;
    -webkit-box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    -moz-box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    transition: all 300ms ease-in-out;
    background-color: rgb(87, 181, 123);
  }
  #edit:hover {
    transform: translate(-2px, -2px);
    cursor: pointer;
    background-color: #80ffbf;
    /* background-color: rgb(87, 181, 123); 
  }
  #edit:active {
    transform: translateY(2px);
    background-color: rgb(87, 181, 123);
  }
  #trash {
    border-radius: 1em;
    padding: 1vh;
    -webkit-box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    -moz-box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    transition: all 300ms ease-in-out;
    background-color: rgb(87, 181, 123);
  }
  #trash:hover {
    transform: translate(-2px, -2px);
    cursor: pointer;
    background-color: #80ffbf;
    /* background-color: rgb(87, 181, 123); 
  }
  #trash:active {
    transform: translateY(2px);
    background-color: rgb(87, 181, 123);
  }
  .comment {
    width: 70vh;
    height: 7vh;
    padding-left: 2vh;
    margin-left: 3vh;
  }
  .submit2 {
    text-decoration: none;
    padding-top: 50vh;
    cursor: pointer;
    border: none;
    outline: none;
    color: black;
    background-color: rgb(87, 181, 123);
    width: 20vh;
    height: 6vh;
    padding: 1vh;
    border-radius: 1em;

    -webkit-box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    -moz-box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    box-shadow: 3px 3px 8px 0px rgba(111, 156, 127, 0.76);
    transition: all 300ms ease-in-out;
  }
  .submit2:hover {
    transform: translate(-2px, -2px);
    cursor: pointer;
    background-color: #80ffbf;
    /* background-color: rgb(87, 181, 123); 
  }
  .submit2:active {
    transform: translateY(2px);
    background-color: rgb(87, 181, 123);
  }
  */
</style>
