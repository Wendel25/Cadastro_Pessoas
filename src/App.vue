<template>
  <div>
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";

import router from "./router";

export default {
  components: {
    Header,
  },
  router,
};
</script>

<style>
body {
  font-family: "Roboto", sans-serif;
  padding: 0;
  margin: 0;
}
</style>
