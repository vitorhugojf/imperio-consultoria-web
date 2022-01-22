<template>
  <v-app-bar app :color="color" :elevation="elevation">
    <div class="d-flex align-center">
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/inicio">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          collapse-on-scroll="true"
          width="40"
        />
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn to="/inicio" text>
      <span class="mr-2">Inicio</span>
    </v-btn>

    <v-btn to="/fim" text>
      <span class="mr-2">Fim</span>
    </v-btn>
    <v-btn to="/sobre" text>
      <span class="mr-2">Sobre</span>
    </v-btn>
    <v-btn color="info" small fab @click="toggleDarkTheme">
      <v-icon v-if="$vuetify.theme.dark" bottom class="mr-1"
        >mdi-moon-waxing-crescent</v-icon
      >
      <v-icon v-else color="yellow">mdi-white-balance-sunny</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
export default {
  components: {},
  created() {},
  data: () => ({
    color: "transparent",
    elevation: 0,
  }),
  mounted() {
    window.onscroll = () => {
      this.changeColor();
    };
  },
  methods: {
    changeColor() {
      if (document.documentElement.scrollTop > 25) {
        this.color = this.$vuetify.theme.isDark
          ? this.$vuetify.theme.themes.dark.primary
          : this.$vuetify.theme.themes.light.primary;
        this.elevation = 2;
      } else {
        this.color = "transparent";
        this.elevation = 0;
      }
    },
    toggleDarkTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
      this.changeColor();
    },
  },
};
</script>
<style></style>
