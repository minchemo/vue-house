import { createApp } from "vue"
import App from "./App.vue"
import "./assets/style/tailwind.css"
import router from "./router.js"

import VueMobileDetection from "vue-mobile-detection"

import VueSplide from "@splidejs/vue-splide"
import "@splidejs/vue-splide/css/core"

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

import VueLazyload from "vue-lazyload"

import VueSmoothScroll from "vue3-smooth-scroll"

import 'aos/dist/aos.css';

const toastOptions = {
    transition: "Vue-Toastification__fade",
    maxToasts: 5,
    newestOnTop: true,
}

createApp(App)
    .use(Toast, toastOptions)
    .use(VueMobileDetection)
    .use(VueSmoothScroll)
    .use(VueSplide)
    .use(router)
    .use(VueLazyload, {
        preLoad: 2,
        lazyComponent: true,
        attempt: 1,
    })
    .mount("#app")