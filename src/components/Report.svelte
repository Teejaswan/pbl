<script>
import NavBar from "./NavBar.svelte";
let title = "Progress";
let links = [{name:"Home",link:"/home"},
             {name:"Profile",link:"/profile"},
             {name:"Posts",link:"/posts"},
             {name:"Workspace",link:"/user/student/todo"}
            ];
</script> 
<NavBar {title} {links}/>
<body>
    <div class="b1">
        <div class="b1l">
            <p style="font-size:2.5vw;text-align:center;">A LITTLE PROGRESS<br>EACH DAY SUMS UP TO<br>GREAT SUCCESS.</p>
            <p style="font-size:1.5vw;text-align:center;">A single place to manage and keep track<br>of all your projects </p>
            <img src="pro.svg" alt="pro">
        </div>
        <div class="b1r">
            <div class="b1rcon">
                <div class="con1">
                    <p>See your overall progress</p>
                </div>
                <div class="con1">
                    <p>Get your personalized report</p>
                </div>
                <div class="con1">
                    <p>Get your personalized report</p>
                </div>
                <div class="con1">
                    <p>Get your personalized report</p>
                </div>
            </div>
        </div>
    </div>
    <div class="b2">
        <div class="report" />
            <h4>Report</h4>
    </div>
    <div class="b3">
        <div class="b3l">
            <div class="b3l1">
                <div class="tm">
                    <p style="color:white;font-size:2vw;">Team Member</p>
                </div>
                <div class="mem">
                    <p style="font-size:1.5vw;">Member1</p>
                </div>
                <div class="mem">
                    <p style="font-size:1.5vw;">Member2</p>
                </div>
                <div class="mem">
                    <p style="font-size:1.5vw;">Member3</p>
                </div>
                <div class="memlast">
                    <p style="font-size:1.5vw;">Member3</p>
                </div>
            </div>
        </div>
        <div class="b3r">
            <div class="b3r1">
                <div class="con3">
                    <div class="con311">
                        <p style="color:white;font-size:1.5vw;"><b>Problem<br>Statement</b></p>
                    </div>
                    <div class="con321">
                        <p style="font-size:1.5vw;"><b>The Problem Statement</b></p>
                    </div>
                </div>
                <div class="con3">
                    <div class="con312">
                        <p style="color:white;font-size:1.5vw;"><b>Solution</b></p>
                    </div>
                    <div class="con322">
                        <p style="font-size:1.5vw;"><b>The Solution</b></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="progress">
        <div class="p1">
            <div class="pcon">
                <div class="phead">Completed</div>
                <div class="pbody"><b>20</b></div>
            </div>
            <div class="pcon">
                <div class="phead">On progress</div>
                <div class="pbody"><b>10</b></div>
            </div>
            <div class="pcon">
                <div class="phead">Overdue</div>
                <div class="pbody"><b>2</b></div>
            </div>
        </div>
        <div class="p2">
            <div class="pie"></div>
            <div class="piebottom"></div>
        </div>
    </div>
    <div class="last">
        <div class="lasthead"></div>
        <div class="lastcon"></div>
    </div>
</body>
<style>
    body{
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        margin-bottom:3vw;
    }
    .b1{
        display: flex;
        justify-content: center;
        align-items: center;
        width:80%;
        height:60vh;
        margin: auto;
        background-color: aqua;
    }
    .b1l{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:50%;
        background-color: brown;
    }
    .b1r{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:50%;
        margin: auto;
    }
    .b1rcon{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:60%;
        background-color: #E9ECFD;
        border-radius: 1.5vw;
        padding: auto;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
    }
    .con1{
        display: flex;
        width:80%;
        justify-content: space-between;
        align-items: center;
        font-size: 1.5vw;
    }
    .b2{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width:80%;
        height:40vh;
        margin: auto;
        background-color: red;
    }
    h4{
        font-family: "Lato", sans-serif;
        display: flex;
        font-size: calc(0.75em + 0.5vmin);
        background-color: #6273cb;
        width: 8vw;
        height: 6vh;
        margin: 0;
        align-items: center;
        justify-content: left;
        padding-left: 0.6vw;
        z-index: 3;
    }
    .report{
        background-color: #e1ff27;
        width: 10vw;
        height: 6vh;
        margin: 0;
        position: absolute;
    }
    .b3{
        display: flex;
        justify-content: center;
        align-items: center;
        width:80%;
        height:60vh;
        margin: auto;
    }
    .b3l1{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:60%;
        background-color: #E9ECFD;
        border-radius: 1.5vw;
        padding: auto;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
    }
    .tm{
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        background-color: #6273CB;
        padding:auto;
        border-radius: 1.5vw 1.5vw 0 0;
    }
    .mem{
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        padding:auto;
        border-bottom:1px solid;
    }
    .memlast{
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        padding:auto;
    }
    .b3l{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:40%;
    }
    .b3r{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:60%;
        margin: auto;
    }
    .b3r1{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width:80%;
        border-radius: 5vw;
        box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.25);
    }
    .con3{
        display: flex;
        align-items: center;
        justify-content: center;
        width:100%;
    }
    .con311{
        display: flex;
        align-items: center;
        justify-content: center;
        width:30%; 
        height:20vh;
        background-color: #6273CB;
        border-bottom:1px solid;
        border-radius:1.5vw 0 0 0;
    }
    .con312{
        display: flex;
        align-items: center;
        justify-content: center;
        width:30%; 
        height:20vh;
        background-color: #6273CB;
        border-bottom:1px solid;
        border-radius:0 0 0 1.5vw;
    }
    .con321{
        display: flex;
        align-items: center;
        justify-content: center;
        width:70%; 
        height:20vh;
        background-color: #E9ECFD ;
        border-bottom:1px solid;
        border-radius:0 1.5vw 0 0;
    }
    .con322{
        display: flex;
        align-items: center;
        justify-content: center;
        width:70%; 
        height:20vh;
        background-color: #E9ECFD ;
        border-bottom:1px solid;
        border-radius:0 0 1.5vw 0;
    }
    .progress{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3vw;
        width:80vw;
        height:100vh;
        background: #FFFFFF;
        box-shadow: 0px 0px 20.5751px rgba(0, 0, 0, 0.25);
        padding:auto;
    }
    .p1{
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        width:50%;
        height:100%;
    }
    .p2{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        width:50%;
        height:100%;
    }
    .pcon{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width:50%;
        height:25%;
        background-color: #FFFFFF;
        filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.5));
        border-radius: 1.5vw;
        font-size:1.5vw;
    }
    .phead{
        display: flex; 
        justify-content: center;
        align-items: center;
        height:45%;
        width:100%;
        border-radius: 1.5vw 1.5vw 0 0;
        background-color: #6273CB;
        color:#FFFFFF;
        font-size: 1.5vw;
    }
    .pbody{
        display: flex;
        align-items: center;
        justify-content: center;
        width:100%;
        height:55%;
        background-color: #FFFFFF;
        border-radius: 0 0 1.5vw 1.5vw;
    }
    .pie{
        display: flex;
        border-radius:100%;
        height:50%;
        width:60%;
        background-color: #D969DB;
    }
    .piebottom{
        display: flex;
        justify-content: center;
        align-items: center;
        width:85%;
        height:40%;
        background-color: #D9D9D9;
    }
    .last{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color:#E9ECFD;
        height:80vh;
        width:80vw;
        margin-top: 2vw;
    }
    .lasthead{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #6273CB;
        width:100%;
        height:15%;
    }
    .lastcon{
        display: flex;
        justify-content: center;
        align-items: center;
        width:100%;
        height:85%;
    }
</style>
