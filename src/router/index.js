import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/submit",
      name: "submit",
      component: () => import("../views/SubmitView.vue"),
    },
    {
      path: "/snippet/:id",
      name: "snippet",
      component: () => import("../views/SnippetView.vue"),
      props: true,
    },
  ],
});

export default router;
