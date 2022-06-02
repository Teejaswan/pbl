<script>
  import NavBar from "./NavBar.svelte";
</script>

<div class="header">
  <h2 style="text-align:center;">Teams project name</h2>
  <NavBar />
</div>
<div class="outer">
  <table class="full">
    <tr>
      <th>Column 1</th>
      <th>Column 2</th>
      <th>Column 3</th>
    </tr>
    <tr>
      <td>Column 1</td>
      <td>Column 2</td>
      <td>Column 3</td>
    </tr>
  </table>
</div>

<style>
  .outer {
    margin: 5em;
  }
  .full {
    width: 100%;
  }
</style>
