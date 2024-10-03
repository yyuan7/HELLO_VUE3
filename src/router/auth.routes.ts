export default [
    {
      path: "/login",
      name: "login",
      component: () =>
        import("@/pages/auth/LoginPage.vue"),
      meta: {
        // layout: "auth",
        title: "Login",
      },
    },
    {
        path: "/",
        name: "layout",
        component: () =>
          import("@/pages/home/HomePage.vue"),
        meta: {
          // layout: "landing",
          title: "Login",
        },
    },
    {
        path: "/404",
        name: "404",
        component: () =>
          import("@/pages/404/NotFoundPage.vue"),
        meta: {
          // layout: "auth",
          title: "404",
        },
    },
    {
        path: "/:pathMatch(.*)*",
        name: "random",
        redirect: "/404"
    },
  ];