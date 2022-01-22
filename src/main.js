import Vue from 'vue'
import App from './App.vue'
import Theme from './plugins/theme'
import vuetify from './plugins/vuetify'
import router from "./router";

Vue.config.productionTip = false

Vue.use(Theme);
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
