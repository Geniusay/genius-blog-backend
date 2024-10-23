export default [
  {
    path: "/blog",
    name: "blog",
    component: () => import("@/views/blog/BlogListView.vue"),
  },
  {
    path: "/blog/edit",
    name: "blog-edit",
    component: () => import("@/views/blog/BlogEditView.vue"),
  },
  {
    path: "/blog/view/:id",
    name: "blog-view",
    component: () => import("@/views/blog/BlogView.vue"),
    props: true,
  },
];
