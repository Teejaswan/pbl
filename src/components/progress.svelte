<script>
  import { DonutChart } from "@carbon/charts-svelte";
  import "@carbon/styles/css/styles.css";
  import "@carbon/charts/styles.css";
  import NavBar from "./NavBar.svelte";

  const data = [
    {
      group: "sygvj",
      value: 24362,
    },
    {
      group: "dlkjbd",
      value: 6572,
    },
    {
      group: "kubx",
      value: 36772,
    },
    {
      group: "xoiuhx",
      value: 3772,
    },
    {
      group: "xkubx",
      value: 3872,
    },
  ];

  const options = {
    title: "Donut (centered)",
    resizable: true,
    legend: {
      alignment: "center",
    },
    donut: {
      center: {
        label: "Browsers",
      },
      alignment: "center",
    },
    height: "400px",
  };
</script>

<h1>Progress</h1>
<div class="header">
  <h1>Progress</h1>
  <NavBar />
</div>
<div class="table" />
<div />

<!-- <DonutChart {data} {options} /> -->
<style>
</style>
