import { createRouter, createWebHistory } from "vue-router"
import Home from "@/pages/Home.vue"
const routes = [{
        path: "/ForestPark/",
        name: "Home",
        component: Home,
    },
    {
        path: "/ForestPark/formThanks",
        name: "formThanks",
        component: () =>
            import ("@/pages/FormThanks.vue"),
    },
    {
        path: "/ForestPark/phoneThanks",
        name: "phoneThanks",
        component: () =>
            import ("@/pages/PhoneThanks.vue"),
    },
    {
        name: "404",
        path: "/ForestPark/404",
        component: () =>
            import ("@/pages/404.vue"),
    },
    {
        name: "404",
        path: "/ForestPark/404",
        component: () =>
            import ("@/pages/404.vue"),
    },
    {
        path: "/ForestPark/:catchAll(.*)", // 此处需特别注意至于最底部
        redirect: "/404",
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router