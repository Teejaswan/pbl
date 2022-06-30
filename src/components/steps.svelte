<script>
// @ts-nocheck

  import Saos from "saos";

  let processes = [
    {
      title: "Is there a Problem?",
      description: "The student must form a team of 4 or 5 and identify their problem statement. They must clear about the problem that is being faced and a rough idea on the solution for the problem.",
    },
    {
      title: "Do you need Help?",
      description: "The team will be allocated an industry/faculty/student mentor who can guide them through their project and develop a realistic solution for the problem. The might also get an idea on what major domain they are going to work on.",
    },
    {
      title: "Is it Ready?",
      description: "The team can get ready for their project along with the requirements. Once they complete their project they can check for concepts used and refine their project.",
    },
    {
      title: "Is it so good?",
      description: "The team can present their final working prototype and they can collabrate with industry mentors to match their project with industry standards.",
    },
    {
      title: "What work have you done?",
      description: "The team can prepare a research paper based on various facts,information and innovative ideas found in the process and quote the research gap if any.",
    },
  ];
</script>

<div class="outer">
  <h1>STUCK UP WITH PROJECT?</h1>
  {#each processes as process}
    {@const { title, description } = process}
    <div class="inner">
      <div class="circle">{title}</div>
      <Saos
        animation={`scroll${
          processes.indexOf(process) % 2 ? 2 : 1
        } 0.4s ease-in-out both`}
        once
      >
        <div class="rectangle">
          <div class="inner1">
            <div class="inner2">
             <div class="content">
              {description}
             </div>
          </div>
        </div>
      </Saos>
    </div>
  {/each}
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Kanit&family=Yeseva+One&display=swap");
  .inner {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 50vh;
  }

  .inner:nth-child(even) {
    flex-direction: row-reverse;
  }

  .circle {
    display: grid;
    place-items: center;
    height: 11em;
    width: 11em;
    background: #6273CB;
    color:#dafc00;
    border-radius: 50em;
    padding:1em;
  }
  .inner1{
    height: 15em;
    width: 25em;
    display: grid;
    place-items: center;
    border-radius: 2em;
    background: #E1FF27;
    padding:0 1em 0 1em;
    box-shadow: -5px 36px 75px -25px rgba(42, 42, 43, 0.41);
    transition: height 0.5s ease-in-out;
  }
  .inner2{
    transform: matrix(1, 0, -0.20, 1, 0, 0);
    border-radius:2em;
    background-color:#6273CB;
    width:25em;
    height:15.5em;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.75em + 0.5vmin);
  }
  .content{
    display:flex;
    justify-content: center;
    padding:1em;
  }
  h1 {
    text-align: center;
    font-family: "Yeseva One", sans-serif;
    color: rgb(74, 71, 71);
    padding: 4em 0 2em 0;
  }
  .outer {
    background-color: #eae7dc;
  }
  @keyframes -global-scroll1 {
    0% {
      height: 0;
      margin-right: 30vw;
    }
    100% {
      height: 15em;
    }
  }
  @keyframes -global-scroll2 {
    0% {
      height: 0;
      margin-left: 30vw;
    }
    100% {
      height: 15em;
    }
  }
</style>
