<script>
  let attributes = [{ id : 1, content :"gh"},
                   {id :2, content :"as "},
                    {id : 3, content : "gfg"},
                    {id : 4, content : "fg"}, 
                    {id : 5, content : "hdv" }];
</script>

<div class="container">
  <h1>Multiple work.One workspace</h1>
  <div class="outer">
    {#each attributes as attribute}
      {#if attribute.id % 2 != 0}
        <div class="inner">
          <div class="upper">
            <div class="inner1">
              <div class="inner2">
                <div class="content">
                  {attribute.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      {:else}
        <div class="inner">
          <div class="lower">
            <div class="inner1">
              <div class="inner2">
                <div class="content">
                  {attribute.content}
                </div>
              </div>
            </div>
          </div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Kanit&family=Yeseva+One&display=swap");

  .outer {
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap:wrap;
    height: 40vh;
    width:100vw;
  }

  .container {
    height: 100vh;
  }
  .upper,
  .lower {
    height: 15vw;
    width: 15vw;
    margin: 1vw;
    background-color: #6273CB;
    transition: all 0.3s ease-in-out;
    border-radius: 20px;
  }
  .lower {
    margin-top: 6em;
  }
  h1 {
    padding: 15vh 0;
    text-align: center;
    font-family: "Yeseva One", sans-serif;
    color: rgb(74, 71, 71);
    margin-block: 0;
  }
  h3 {
    color: rgb(48, 47, 47);
    text-align: center;
  }
  .lower:hover,
  .upper:hover {
    width: 17vw;
    height: 17vw;
    margin: 0;
    box-shadow: 0 2vw 5vw -1vw rgb(89, 87, 87);
  }
  .inner {
    justify-content: center;
    align-items: center;
  }
  .inner1{
    border-radius:1rem 1rem 0 0;
    height:4vw;
    background-color: #E1FF27;
  }
  @media only screen and (max-width:700px){
    .container{
      height:80vh;
      transition: all 50ms ease-in;
    }
    h1{
      padding:10vh 0;
    }
  }
  
  
</style>
