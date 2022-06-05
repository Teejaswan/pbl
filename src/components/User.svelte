<script>
  import { Route, router } from "tinro";
  import Studprofile from "./studprofile.svelte";

  export let username;

  const user = JSON.parse(localStorage.getItem("user"));

  if (username === user.name) {
    router.goto("/profile");
  }
  else {
      router.goto("/login")
  }

</script>