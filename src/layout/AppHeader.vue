<template>
  <v-app-bar app color="transparent" elevation="0">
    <div class="d-flex align-center">
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/inicio">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
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
  </v-app-bar>
</template>
<script>
export default {
  components: {},
  created() {},
  data: () => ({ logo: "" }),
};
</script>
<style></style>
