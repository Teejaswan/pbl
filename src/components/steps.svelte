<script>
  import Saos from "saos";

  let processes = [
    {
      title: "this is title 1",
      description: "this is the description for title 1",
    },
    {
      title: "this is title 2",
      description: "this is the description for title 2",
    },
    {
      title: "this is title 3",
      description: "this is the description for title 3",
    },
    {
      title: "this is title 4",
      description: "this is the description for title 4",
    },
    {
      title: "this is title 5",
      description: "this is the description for title 5",
    },
  ];
</script>

<div class="outer">
  <h1>STEPS IN A PROJECT</h1>
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
          {description}
        </div>
      </Saos>
    </div>
  {/each}
</div>

<style>
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
    background: rgb(211, 103, 103);
    border-radius: 50em;
  }
  .rectangle {
    height: 15em;
    width: 25em;
    display: grid;
    place-items: center;
    border-radius: 2em;
    background: rgb(226, 169, 169);
    box-shadow: -5px 36px 75px -25px #db9bd3;
    transition: height 0.5s ease-in-out;
  }
  h1 {
    text-align: center;
    margin-bottom: 4em;
  }
  .outer {
    margin-bottom: 5em;
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
