import Vue from "vue";
import Router from "vue-router";
import AppHeader from "../layout/AppHeader";
import AppFooter from "../layout/AppFooter";


Vue.use(Router);

const routes = [
  {
    path: "/inicio",
    name: "helloWorld",
    components: {
      header: AppHeader,
      default: () => import(/* webpackChunkName: "inicio" */ "../views/HelloWorld.vue"),
      footer: AppFooter
    }
  },
  {
    path: "/fim",
    name: "byeWorld",
    components: {
      header: AppHeader,
      default: () => import(/* webpackChunkName: "fim" */ "../views/ByeWorld.vue"),
      footer: AppFooter
    }
  },
  {
    path: "/sobre",
    name: "about",
    components: {
      header: AppHeader,
      default: () => import(/* webpackChunkName: "sobre" */ "../views/About.vue"),
      footer: AppFooter
    }
  },
  {
    path: "*",
    redirect: "/inicio"
  }
];

const router = new Router({
  linkExactActiveClass: "active",
  routes,
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});

export default router;