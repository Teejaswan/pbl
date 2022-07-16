<script>
import NavBar from "./NavBar.svelte";
let title = "Worksapce";
let links = [{name:"Home",link:"/home"},
             {name:"Profile",link:"/profile"},
             {name:"Posts",link:"/posts"},
             {name:"progress",link:"/user/student/progress"}
            ];
</script>
<NavBar {title} {links}/>
<body>
  <div class="bodytodo">
    <div class="work">
      <p style="font-size:1.5rem;"><b>WORKSPACE</b></p>
    </div>
    <div class="content">
      <div class="c1">
        <div class="todo">
          <div class="head">
            <p><b>TASK TO DO</b></p>
          </div>
          <div class="inner">
            <div class="up">
              <div class="left">
                <div class="left1">
                  <p style="font-size:1.5rem;"><b>Completing the UI</b></p>
                </div>
                <div class="left2">
                  <div class="left21">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">Assigned Date</p>
                    <p><b>12-06-2022</b></p>
                  </div>
                  <div class="left22">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">Due Date</p>
                    <p><b>12-07-2022</b></p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="right1">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assigner</p>
                  <p style="font-size:1.2rem;"><b>MENTOR</b></p>
                </div>
                <div class="right2">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assignee</p>
                  <p style="font-size:1.2rem;"><b>MEMBER-1</b></p>
                </div>
              </div>
            </div>
            <div class="bottom"></div>
          </div>
        </div>
      </div>
      <div class="c2">
        <div class="todo">
          <div class="head">
            <p><b>OVER-DUE</b></p>
          </div>
          <div class="inner">
            <div class="up">
              <div class="left">
                <div class="left1">
                  <p style="font-size:1.5rem;"><b>Completing the UI</b></p>
                </div>
                <div class="left2">
                  <div class="left21">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">Assigned Date</p>
                    <p><b>12-06-2022</b></p>
                  </div>
                  <div class="left22">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">Due Date</p>
                    <p><b>12-07-2022</b></p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="right1">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assigner</p>
                  <p style="font-size:1.2rem;"><b>MENTOR</b></p>
                </div>
                <div class="right2">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assignee</p>
                  <p style="font-size:1.2rem;"><b>MEMBER-1</b></p>
                </div>
              </div>
            </div>
            <div class="bottom"></div>
          </div>
        </div>
      </div>
      <div class="c3">
        <div class="todo">
          <div class="head">
            <p><b>COMPLETED</b></p>
          </div>
          <div class="innercom">
            <div class="up">
              <div class="left">
                <div class="left1">
                  <p style="font-size:1.5rem;"><b>Completing the UI</b></p>
                </div>
                <div class="left2">
                  <div class="left21">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">Assigned Date</p>
                    <p><b>12-06-2022</b></p>
                  </div>
                  <div class="left22">
                    <p style="color:rgba(0, 0, 0, 0.5);font-size:1.2rem;">Due Date</p>
                    <p><b>12-07-2022</b></p>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="right1">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assigner</p>
                  <p style="font-size:1.2rem;"><b>MENTOR</b></p>
                </div>
                <div class="right2">
                  <p style="color:rgba(0, 0, 0, 0.5);">Assignee</p>
                  <p style="font-size:1.2rem;"><b>MEMBER-1</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
<style>
.bodytodo{
  display: flex;
  flex-direction: column;
  align-items: center;
  width:96rem;
  height:32rem;
}
.work{
  display:flex;
  width:90rem;
}
.content{
  display:flex;
  width:90rem;
}
.c1{
  display:flex;
  align-items: center;
  width:30rem;
  padding: auto;
}
.c2{
  display:flex;
  align-items: center;
  width:30rem;
}
.c3{
  display:flex;
  align-items: center;
  width:30rem;
}
.todo{
  display:flex;
  flex-direction: column;
  width:28rem;
  height:26.5rem;
  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.25);
}
.head{
  display:flex;
  height:3rem;
  background-color: #6273CB;
  align-items: center;
  justify-content: center;
  color:white;
}
.inner{
  display: flex;
  flex-direction: column;
  width:90%;
  height:70%;
  background-color:  #E1FF27;
  margin-left: 1.3rem;
  margin-top: 1.5rem;
  border-radius:2rem;
}
.up{
  display:flex;
  height:80%;
  background-color: #E9ECFD;
  border-radius:2rem;
}
.left{
  display: flex;
  flex-direction: column;
  width:70%;
  height:100%;
  border-right:1px solid;
}
.left1{
  display: flex;
  align-items: center;
  justify-content: center;
  width:100%;
  height: 40%;
}
.left2{
  display: flex;
  width:100%;
  height:60%;
}
.left21{
  display: flex;
  flex-direction: column;
  width:50%;
  height:100%;
  align-items: center;
  justify-content:center;
}
.left22{
  display: flex;
  flex-direction: column;
  width:50%;
  height:100%;
  align-items: center;
  justify-content:center;
}
.right{
  display: flex;
  flex-direction: column;
  width:30%;
  height:100%;
}
.right1{
  display:flex;
  flex-direction: column;
  width:100%;
  height:50%;
  justify-content: center;
  align-items: center;
}
.right2{
  display:flex;
  flex-direction: column;
  width:100%;
  height:50%;
  justify-content: center;
  align-items: center;
}
.bottom{
  display:flex;
  background-color: #E1FF27;
  height:20%;
  border-radius:0 0 2rem 2rem;
}
.innercom{
  display: flex;
  flex-direction: column;
  width:90%;
  height:70%;
  margin-left: 1.3rem;
  margin-top: 1.5rem;
  border-radius:2rem;
}
@media only screen and (max-width: 1000px) {
        .content{
        display: flex;
        flex-direction: column;
        height:40rem;
        width:100%;
        position: relative;
        margin-left:3.5rem;
        }
    }  
</style>

