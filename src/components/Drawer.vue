<template>
  <v-navigation-drawer v-model="drawer" app temporary right>
    <v-list>
      <v-list-item v-for="(link, i) in links" :key="i" :href="link.href" @click="toggleDrawer">
        <v-list-item-icon>
          <v-icon v-text="link.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="link.text" />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Drawer",
  computed: {
    drawer: {
      get: function() {
        return this.$store.state.drawer;
      },
      set: function(value) {
        this.setDrawer(value);
      }
    },
    ...mapState(["links"])
  },
  methods: {
    ...mapMutations(["setDrawer", "toggleDrawer"])
  }
};
</script>