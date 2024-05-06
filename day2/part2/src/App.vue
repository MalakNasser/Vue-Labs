<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import NavBar from "@/Components/NavBar";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style></style>
