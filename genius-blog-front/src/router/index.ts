import { createRouter, createWebHashHistory } from "vue-router";
import BlogRoutes from "./blog.routes";

export const routes = [
  {
    path: "/",
    redirect: "/home",
    meta: {},
  } as any,
  {
    path: "/home",
    name: "home-page",
    component: () => import("@/views/home/HomePageView.vue"),
  } as any,
  ...BlogRoutes,
];

// 动态路由，基于用户权限动态去加载
export const dynamicRoutes = [];

const router = createRouter({
  history: createWebHashHistory(),
  // hash模式：createWebHashHistory，history模式：createWebHistory
  // process.env.NODE_ENV === "production"

  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
