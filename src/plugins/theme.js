import "@/assets/vendor/font-awesome/css/font-awesome.css";
import "@/assets/scss/_theme.scss";
import VueLazyload from "vue-lazyload";

export default {
  install(Vue) {
    Vue.use(VueLazyload);
  },
};
