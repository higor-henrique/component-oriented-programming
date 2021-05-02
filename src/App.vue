<template>
  <v-app>
    <v-app-bar app height="70">
      <Header></Header>
    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer height="20">
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
