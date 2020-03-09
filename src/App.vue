<template>
  <v-app>
    <app-header />
    <app-drawer />
    <app-view />
    <app-footer />
  </v-app>
</template>

<script>
export default {
  name: "App",
  mounted() {
    document.documentElement.style.overflow = "auto";
    const path = localStorage.getItem("path");
    if (path) {
      localStorage.removeItem("path");
      this.$router.push({ path });
    }
  },
  components: {
    AppHeader: () => import("./components/core/Header.vue"),
    AppDrawer: () => import("./components/Drawer.vue"),
    AppView: () => import("./components/core/View.vue"),
    AppFooter: () => import("./components/core/Footer.vue")
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Walter+Turncoat:100,300,400,500,700,900&display=swap");
#app {
  font-family: "Walter Turncoat", cursive;
}
</style>
