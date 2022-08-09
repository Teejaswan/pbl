<script>
  export let data;

  async function setProposals() {
    let p = await data;
    if (p) {
      return p;
    }
  }
  let promise = setProposals();
  $: console.log(promise);
  import Home from "./posts_components/Home.svelte";
</script>

<!-- {#await promise then p}
  <div>{p[0].title}</div>
{/await} -->

<Home />
