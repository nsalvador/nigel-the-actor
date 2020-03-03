<template>
  <v-app-bar app tile style="opacity: 0.9;">
    <v-container fluid class="px-0">
      <div style="max-width:744px; min-width: 296px; margin: 0 auto;" class="d-flex align-center">
        <v-toolbar-title class="font-weight-bold" v-text="title" />
        <v-spacer />
        <v-btn
          v-for="(link, i) in links"
          :key="i"
          text
          class="ma-1 hidden-sm-and-down"
        >{{ link.text }}</v-btn>
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Header",
  data: () => ({
    title: "Nigel The Actor"
  }),
  methods: {
    ...mapMutations(["toggleDrawer"])
  },
  computed: {
    ...mapState(["links"])
  }
};
</script>
