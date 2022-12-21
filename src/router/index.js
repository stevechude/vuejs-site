import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
    {
      path: "/features",
      component: () => import("../views/Features.vue"),
    },
    {
      path: "/how",
      component: () => import("../views/How.vue"),
    },
  ],
});

export default router