import { createRouter, createWebHistory } from "vue-router";
import AuthPage from "@/pages/Auth.vue";
import DesignSystem from "@/pages/DesignSystem.vue";
import Home from "@/pages/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/auth",
      name: "auth",
      component: AuthPage,
    },

    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/design",
      name: "design-system",
      component: DesignSystem,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
  ],
});

export default router;
