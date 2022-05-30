<script>
    import NavBar from "./NavBar.svelte";
</script>
<body>
    <div class="head">
        <h2>TEAM NAME</h2>
    </div>
    <div class="Add">
        <h1> Quote 2 </h1>
       </div>
    <div class="container">
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
    <table>
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
    </table>
</div>


</body>
<style>
    .head{
    display: flex;
    justify-content:center;
    align-items: center;
    background-color: #d36767;
    height: 8 em;
    margin-bottom: 5em;
    } 
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
    table{
        border-collapse:collapse;
        width:100%;
        margin-top: 5em;
        margin-left: 2em;
        margin-right: 2em;
        
    }
    input, textarea{
        outline:none;
    }
    
    th{
        width:25%;
    }
   th,td{ 
        padding: 1em;
        border: 1px solid black;
    }
    td input{
        width:100%;
        border:none;
    }
   
</style>
