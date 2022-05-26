<script>
  import { Route, router } from "tinro";
  import Attribute from "./components/attribute.svelte";
  import Header from "./components/Header.svelte";
  import NavBar from "./components/NavBar.svelte";
  import Steps from "./components/steps.svelte";
  import Contact from "./components/contact.svelte";
  import Choice from "./components/Choice.svelte";

  router.mode.hash();

  window["ab"] = (_) => router.goto("/user/student");
</script>

<Route path="/">
  <Header />
  <Steps />
  <Attribute />
  <Contact />
</Route>
<Route path="/choice">
  <Choice />
</Route>
<Route path="/login">
  <h1>Login page</h1>
</Route>
<Route path="/user/student">
  <h1>Student Page</h1>
</Route>
<Route path="/user/mentor">
  <h1>Mentor Page</h1>
</Route>
