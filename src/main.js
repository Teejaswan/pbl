import App from "./App.svelte";

const app = new App({
  target: document.getElementById("app"),
});

async function hi() {
  let json = await await fetch("http://localhost:4000/proposals", {
    mode: "no-cors",
  });
  console.log(json);
}
hi();
export default app;
