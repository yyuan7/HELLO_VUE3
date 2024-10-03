// TODO: determine whether switch to `vue-router/auto-routes` based on number of pages
// TODO: update `setupLayouts` after setting layout
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

import AuthRoutes from "./auth.routes";
import landingRoutes from "./landing.routes";

export const routes = [
  ...AuthRoutes,
  ...landingRoutes,
];

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
// import { setupLayouts } from "virtual:generated-layouts";
// import { routes } from "vue-router/auto-routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  // routes: setupLayouts(routes),
  scrollBehavior() {
    return {
      left: 0, 
      top: 0,
    }
  },
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export default router;
