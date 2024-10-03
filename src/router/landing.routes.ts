export default [
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
  ];