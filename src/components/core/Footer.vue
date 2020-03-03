<template>
  <v-footer padless class="blue-grey darken-4">
    <v-container class="pa-0 d-flex-column text-center">
      <v-card flat tile class="transparent">
        <v-card-subtitle class="px-2 pt-2 pb-0 white--text">Contact:</v-card-subtitle>
        <v-card-text v-html="agent" class="overline px-2 pb-1 white--text"></v-card-text>
        <v-card-text v-html="contact" class="overline px-2 py-1 white--text"></v-card-text>
        <v-card-actions class="pa-2 pt-1 d-flex justify-center" v-if="icons.length !== 0">
          <v-btn v-for="(icon, key) in icons" :key="key" icon x-small class="ma-0">
            <v-icon v-text="icon" />
          </v-btn>
        </v-card-actions>
        <v-divider style="width: 37.5%; margin: auto" class="white my-2" />
        <v-card-text v-html="copyright" class="overline px-2 py-1 white--text" />
      </v-card>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [],
    agent: "Cam Talent Agency<br/>1350 W 5th Ave #25<br/>Columbus, OH 43212",
    contact:
      '<a href="tel:7402745583" style="color:white; text-decoration:none;">(740) 274-5583</a><br/><a style="color:white; text-decoration:none;" href="mailto:nigelsalvador@gmail.com">nigelsalvador@gmail.com</a>',
    copyright: `Website built with <a target='_blank' href='https://vuejs.org/' style="color:white;">Vue.js</a> &amp; <a target='_blank' href='https://vuetifyjs.com/en/' style="color:white;">Vuetify</a><br/>Copyright &copy; ${new Date().getFullYear()}<br/>Nigel Salvador, Actor & Entrepreneur`
  })
};
</script>

<style scoped></style>
