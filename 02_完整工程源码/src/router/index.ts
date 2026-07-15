import { defineComponent, h } from "vue";
import {
  createRouter,
  createWebHistory,
  useRoute,
  type RouteRecordRaw,
} from "vue-router";
import { V6Site } from "../V6Site";
import { allPublicPaths } from "../data/routes";
import { applyPageMeta } from "../composables/usePageMeta";

const SiteRoute = defineComponent({
  name: "SiteRoute",
  setup() {
    const route = useRoute();
    return () => h(V6Site, { route: route.path, key: route.path });
  },
});

const routes: RouteRecordRaw[] = [
  ...allPublicPaths.map((path) => ({
    path,
    name: `page:${path}`,
    component: SiteRoute,
  })),
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: SiteRoute,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
});

router.afterEach((to) => applyPageMeta(to.path));
