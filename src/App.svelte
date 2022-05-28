<script>
  import { Route, router } from "tinro";
  import Attribute from "./components/attribute.svelte";
  import Header from "./components/Header.svelte";
  import NavBar from "./components/NavBar.svelte";
  import Steps from "./components/steps.svelte";
  import Contact from "./components/contact.svelte";
  import Choice from "./components/Choice.svelte";
  import Login from "./components/Login.svelte";

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
  <Login />
</Route>
<Route path="/user/student/todo">
  <h1>todo</h1>
</Route>
<Route path="/user/mentor">
  <h1>Mentor Page</h1>
</Route>

<style>
  /* #EAE7DC (LIGHT GREY)  #D8C3A5 (SANDAL)  #8E8D8A (DARK GREY)    
  #e2a9a9 (LIGHT PINK)  #d36767 (DARK PINK) 
  
  h1:    #4a4747  */
</style>
