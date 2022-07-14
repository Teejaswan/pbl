<script>
/*import App from "src/App.svelte";*/

  import Icon from "./icon.svelte";
  import NavBar from "./NavBar.svelte";
  
  const user = JSON.parse(localStorage.getItem("user"));
  /*const team=[{
    team:Team1;
  }]*/
</script>

<div class="container">
   <div class="head">
    <!-- <h1>{user.name}</h1> -->
    <div class="title">
       <h2>PROFILE</h2>
    </div>
    <div class="link">
      <h3><a href="/steps">Home</a></h3>
      <h3><a href="/contact">Post</a></h3>
    </div>
  </div>
  <div class="box">
  <div class="box1">
    <div class="box2">
      <h4>PBL TEAMS</h4>
      </div>
</div>
</div>
<div class="total">
  <div class="profile">
    <div class="teams">
    </div>
    <div class="name">
     <div class="name1" >
      <h3>NAME:</h3>
     </div>
     <div class="name2">
      <h4>Mentor1</h4>
     </div>
    </div>
    <div class="email">
      <div class="email1">
        <h3>EMAIL:</h3>
      </div>
      <div class="email2">
        <h4>mentor@gmail.com</h4>
      </div>
    </div>
    <div class="phone">
      <div class="phone1">
        <h3>MOBILE:</h3>
      </div>
      <div class="phone2">
         <h4>1234567890</h4>
      </div>
    </div>
    <div class="info">
      <div class="info1">
        <h3>INFO:</h3>
      </div>
      <div class="info2">
        <h4>Information</h4>
      </div>
    </div>
    <div class="choice">
      <div class="myteam">
        <h3>MY TEAMS</h3>
      </div>
        <div class="team1">
          <div class="number">
            <h3>TEAM 1</h3>
            </div>
            <div class="links">
              <a href="GO TO PROFILE">GO TO PROFILE</a>
            </div>
        </div>
        <div class="team2">
          <div class="number">
            <h3>TEAM 2</h3>
            </div>
            <div class="links">
              <a href="GO TO PROFILE">GO TO PROFILE</a>
            </div>
        </div>
        <div class="team3">
          <div class="number">
            <h3>TEAM 3</h3>
            </div>
            <div class="links">
              <a href="GO TO PROFILE">GO TO PROFILE</a>
            </div>
        </div>
    </div>
    </div>
    
 <div class="count">
  <div class="content">
    <div class="id">
        <h3>TEAM 1</h3>
    </div>
    <div class="detail">
      <div class="n1">
        <h4>Number 1</h4>
        <h5>Roll number</h5>
      </div>
      <div class="n2">
        <h4>Number 2</h4>
        <h5>Roll number</h5>
      </div>
      <div class="n3">
        <h4>Number 3</h4>
        <h5>Roll number</h5>
      </div>
      <div class="n4">
        <h4>Number 4</h4>
        <h5>Roll number</h5>
      </div>
    </div>
    <div class="icon">
      <div class="icons">
      <Icon icon="edit"></Icon>
      <Icon icon="delete"></Icon>
      </div>
    </div>
  </div>
  <div class="content">
   <div class="id">
      <h3>TEAM 2</h3>
  </div>
  <div class="detail">
    <div class="n1">
      <h4>Number 1</h4>
      <h5>Roll number</h5>
    </div>
    <div class="n2">
      <h4>Number 2</h4>
      <h5>Roll number</h5>
    </div>
    <div class="n3">
      <h4>Number 3</h4>
      <h5>Roll number</h5>
    </div>
    <div class="n4">
      <h4>Number 4</h4>
      <h5>Roll number</h5>
    </div>
  </div>
  <div class="icon">
    <div class="icons">
    <Icon icon="edit"></Icon>
    <Icon icon="delete"></Icon>
    </div>
  </div>
 </div>
 <div class="content">
   <div class="id">
      <h3>TEAM 3</h3>
  </div>
  <div class="detail">
    <div class="n1">
      <h4>Number 1</h4>
      <h5>Roll number</h5>
    </div>
    <div class="n2">
      <h4>Number 2</h4>
      <h5>Roll number</h5>
    </div>
    <div class="n3">
      <h4>Number 3</h4>
      <h5>Roll number</h5>
    </div>
    <div class="n4">
      <h4>Number 4</h4>
      <h5>Roll number</h5>
    </div>
  </div>
  <div class="icon">
    <div class="icons">
    <Icon icon="edit"></Icon>
    <Icon icon="delete"></Icon>
    </div>
  </div>
  </div>
  <div class="content">
    <div class="id">
       <h3>TEAM 4</h3>
   </div>
   <div class="detail">
     <div class="n1">
       <h4>Number 1</h4>
       <h5>Roll number</h5>
     </div>
     <div class="n2">
       <h4>Number 2</h4>
       <h5>Roll number</h5>
     </div>
     <div class="n3">
       <h4>Number 3</h4>
       <h5>Roll number</h5>
     </div>
     <div class="n4">
       <h4>Number 4</h4>
       <h5>Roll number</h5>
     </div>
   </div>
   <div class="icon">
    <div class="icons">
    <Icon icon="edit"></Icon>
    <Icon icon="delete"></Icon>
    </div>
   </div>
   </div>
   </div>
  </div>
</div>


<!--<div class="profile">
  <div class="profile1">
  <div class="teams">
  </div>
  <div class="name">
   <div class="name1" >
    <h3>NAME:</h3>
   </div>
   <div class="name2">
    <h4>Mentor1</h4>
   </div>
  </div>
  <div class="email">
    <div class="email1">
      <h3>EMAIL:</h3>
    </div>
    <div class="email2">
      <h4>mentor@gmail.com</h4>
    </div>
  </div>
  <div class="phone">
    <div class="phone1">
      <h3>MOBILE:</h3>
    </div>
    <div class="phone2">
       <h4>1234567890</h4>
    </div>
  </div>
  <div class="info">
    <div class="info1">
      <h3>INFO:</h3>
    </div>
    <div class="info2">
      <h4>Information</h4>
    </div>
  </div>
  </div>
  <div class="choice">
    <div class="myteam">
      <h3>MY TEAMS</h3>
    </div>
    <div class="teamnumber">
      <div class="team1">
        <div class="number">
          <h3>TEAM 1</h3>
          </div>
          <div class="links">
            <a href="GO TO PROFILE">GO TO PROFILE</a>
          </div>
       </div>
      <div class="team2">
        <div class="number">
          <h3>TEAM 2</h3>
          </div>
          <div class="links">
            <a href="GO TO PROFILE">GO TO PROFILE</a>
          </div>
        </div>
       <div class="team3">
        <div class="number">
          <h3>TEAM 3</h3>
          </div>
          <div class="links">
            <a href="GO TO PROFILE">GO TO PROFILE</a>
          </div>
        </div>
    </div>
  </div>
  </div>
  </div>-->





  <!--<div class="myteams">
    <h1>My Teams</h1>
    <div class="outer1">
      <div class="inner1">
        <div class="front1">
          <h3>Team number</h3>
        </div>
        <div class="below1">
          <div class="options1">
            <a href=" ">Go to profile</a>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  <div class="teams">
    <div class="header2">
      <h1>Available teams</h1>
      <div class="icon">
        <Icon icon="add" />
      </div>
    </div>
    <div class="outer2">
      <div class="inner2">
        <div class="front2">
          <div class="left">
            <h5>Team member-1</h5>
            <h5>Team member-2</h5>
            <h5>Team member-3</h5>
            <h5>Team member-4</h5>
          </div>
          <div class="right">
            <input type="password" />
            <input type="password" />
            <input type="password" />
            <input type="password" />
          </div>
        </div>
        <div class="below2">
          <div class="teamnumber">
            <h3>Team - 6</h3>
          </div>
          <div class="options2">
            <div class="icon">
              <Icon icon="edit" />
            </div>
            <div class="icon">
              <Icon icon="delete" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>-->

<style>
  * {
    margin: 0;
  }
  .title{
    color: black;
    padding:1em;
    margin-left:1.5em;
    width:60vw;
  }
  .head{
    width: 100vw;
    background-color:#E1FF27;
    display: flex;
    margin: 0;
    height: 20vh;
    clip-path: polygon(0 2%, 100% 0%, 100% 90%, 0 60%);
    z-index:-1;
  }
  .link h3{
    padding:2em;
  }
  .box{
    margin:2em;
  }
  .box1{
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #E1FF27;
    width:28vw;
  }
  .box2{
    clip-path: polygon(0 0, 100% 0%, 80% 100%, 0% 100%);
    background-color: #6273CB;
    width:26vw;
  }
  .box2 h4{
    padding:1em;
    color:white;
  }
  .total{
    display:flex;
    flex-direction: row;
    
  }
  .profile{
    height:84vh;
    width:25vw;
    background-color:#E9ECFD;
    border-radius:1em 1em 0 0;
    flex-direction: column;
    justify-content: space-around;
    margin:0 6em 0 2em;
  }
  .profile h3{
    color:#4f4d4c;
    padding:1em;
    font-size: calc(0.9rem+1vmin);
  }
  .name,.email,.phone{
    background-color: #E9ECFD;
    border-bottom:0.1rem solid #a6a49d;
    height:9vh;
    display:flex;
    flex-direction: row;
    margin:0;
    width:25vw;
    justify-content: space-around;
  }
  .info{
    background-color: #E9ECFD;
    height:9vh;
    display:flex;
    flex-direction: row;
    margin:0;
    width:25vw;
    justify-content: space-around;
  }
  .name1,.email1,.phone1,.info1{
    width:10vw;
  }
  .name2,.email2,.phone2,.info2{
    width:15vw;
    padding:1em 0 0 0;
  }
  h4{
    font-size: calc(0.9rem+1vmin);
  }
  .link{
    display: flex;
    flex-direction: row;
    margin:1em;
  }
  .teams{
    background-color: #6273CB;
    border-radius: 1em 1em 0 0;
    display:flex;
    align-items: center;
    justify-content: center;
    height:14vh;
  }
  .myteam{
    background-color:#6273CB;
    text-align: center;
    border-bottom:0.1em solid #a6a49d;
  }
  .myteam h3{
    color:white;
  }
  .team1,.team2,.team3{
    border-bottom:0.1em solid #a6a49d;
    text-align: center;
    color:black;
    display:flex;
    flex-direction: row;
    width:32vw;
    background-color: #E9ECFD;
    border-radius:0 0.5em 0.5em 0;
    height:9vh;
  }
  .number{
    width:25vw;
    height:9vh;
    
  }
  .links{
    background-color: #E1FF27;
    width:7vw;
    border-radius:0 0.5em 0.5em 0;
    border-left:0.1rem solid #a6a49d;
  }
  a{
    font-size:0.9rem;
  }
  .count{
    height:90vh;
    width:60vw;
    display: flex;
    flex-direction: column;
  }
  .content{
    background-color:#E9ECFD;
    height:12vh;
    display:flex;
    flex-direction: row;
    width:60vw;
    /*margin-left:5rem;*/
    border-radius: 1em;
    margin-top:1.5rem; 
  }
  .id{
    background-color: #6273CB;
    width:11vw;
    padding:0.5em;
    border-radius: 0.5em 0 0 0.5em;
  }
  .id h3{
    color:black;
  }
  .detail{
    display:flex;
    flex-direction: row;
    width:37vw;
    margin:1em;

    
  }
  .icon{
    background-color: #E1FF27;
    width:12vw;
    border-radius: 0 0.5em 0.5em 0;
  }
  .n1,.n2,.n3,.n4{
    display: flex;
    flex-direction:column;
    padding:0 1em 1em 1em;
  }
  .icons{
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    padding-top: 1em;
  }
  @media only screen and (max-width:1000px){
    .total{
      display:flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      }
      .profile{
        margin:0 1em 2em 0;
      }
      .profile,.team1,.team2,.team3,.name,.email,.phone,.info{
        width:290px;
      }
      .name1,.email1,.phone1,.info1{
        width:100px;
      }
      .name2,.email2,.phone2,.info2{
        width:135px;
      }
     
      .number{
        width:230px;
      }
      .links{
        width:60px;
      }
      a{
        font-size:0.7em;
     }
     .link{
      flex-direction: column;
     }
     .link h3{
      padding: 1em;
     }
     .content{
      height:100px;
     }
  
     
    }
@media only screen and (max-width:950px){
  .detail{
    flex-wrap: wrap;
  }
}
@media only screen and (max-width:700px){
  .content{
    display: flex;
    flex-direction: column;
    justify-content: center;
    height:350px;
    width:390px;
    /* margin:1.5em; */
  }
  .id{
    width:372px;
    border-radius: 0.5em;
  }
 .icon{
    width:390px;
    border-radius: 0;
  }
  
}
@media only screen and (max-width:560px){
 
  .content{
    width:300px;
    
    
  }
  .icon{
    width:300px;
  }
  .id{
    width:284px;
  }
}


  /*.myteams {
    display: flex;
    flex-direction: column;
    padding-bottom: 2em;
    min-height: 77vh;
    justify-content: center;
    align-items: center;
  }
  .outer1,
  .outer2 {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .outer1 {
    min-height: 50vh;
  }
  .outer2 {
    min-height: 50vh;
    width: 80vw;
  }
  .teams {
    display: flex;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 10vh;
    background: #eae7dc;
    gap: 2em;
  }

  .inner1 {
    display: flex;
    flex-direction: column;
    width: 60vw;
    height: 20vh;
    align-items: center;
    justify-content: center;
  }
  .inner2 {
    display: flex;
    flex-direction: column;
    width: 70vw;
    min-height: 50vh;
    align-items: center;
    justify-content: center;
  }
  .below1 {
    width: 45vw;
    height: 10vh;
    background: #747272;
    z-index: 2;
    margin-top: 1em;
    margin-right: 1em;
    border-radius: 1em;
    transition: all 0.3s ease-in-out;
  }
  .below2 {
    display: flex;
    width: 61vw;
    height: 30vh;
    background: rgb(149, 148, 148);
    z-index: 2;
    position: absolute;
    margin-right: 3.5em;
    border-radius: 1em;
    transition: all 0.3s ease-in-out;
    margin-bottom: 0;
    align-items: center;
    padding-inline: 1em;
    justify-content: space-between;
  }
  .header2 {
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .header2 h1 {
    margin-left: 5vw;
  }
  .outer2:hover .below2 {
    margin-right: -3.5em;
  }
  .options1 {
    display: flex;
    height: 100%;
    width: 100%;

    align-items: flex-end;
    justify-content: flex-start;
  }
  .options1 a {
    padding: 1em;
  }
  .options2 {
    display: flex;
    flex-direction: column;

    gap: 1em;
  }
  .icon {
    border-radius: 0.3em;
    height: 2em;
    width: 2em;

    display: grid;
    place-items: center;
    transition: background 0.4s ease;
  }

  .icon:hover {
    background: rgb(188, 184, 184);
    cursor: pointer;
  }

  .icon:active {
    transform: translateY(1px);
  }

  a {
    color: rgb(0, 0, 0);

    text-decoration: none;
    font-size: 1em;
    font-weight: 500;
  }
  .left h5,
  .right input {
    margin: 0.2em 0;
    height: 3vw;
    width: 20vw;
  }

  a:hover {
    text-decoration: underline;
  }
  a:active {
    transform: translateY(-2px);
  }
  h1 {
    text-align: center;
  }
  .front1 {
    position: absolute;
    width: 45vw;
    height: 10vh;
    background: #d36767;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1em;
  }
  .front2 {
    position: absolute;
    width: 60vw;
    height: 30vh;
    background: #d36767;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-radius: 1em;
  }
  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 20vw;

    height: 100%;
    font-size: calc(0.75em + 1vmin);
    margin: 0;
  }
  .left h5,
  .right input {
    height: 2.3vw;
    text-align: center;
    margin: 0;
    border: 0;
  }
  .right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    margin: 0;
    width: 20vw;

    height: 100%;
  }
  .teamnumber h3 {
    text-orientation: mixed;
    writing-mode: vertical-rl;
    transform: rotateZ(180deg);
  }

  .inner1:hover .below1 {
    height: 18vh;
    width: 50vw;
    margin-left: 1em;
    margin-top: 2em;
  }*/
</style>
