import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

import * as lightColors from "@/assets/scss/custom/colors/_light.scss";
import * as darkColors from "@/assets/scss/custom/colors/_dark.scss";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: lightColors.primary,
        secondary: lightColors.secondary,
        accent: lightColors.accent,
        error: lightColors.error,
        info: lightColors.info,
        success: lightColors.success,
        warning: lightColors.warning,
      },
      dark: {
        primary: darkColors.primary,
        secondary: darkColors.secondary,
        accent: darkColors.accent,
        error: darkColors.error,
        info: darkColors.info,
        success: darkColors.success,
        warning: darkColors.warning,
      },
    },
  },
});

export default vuetify;
