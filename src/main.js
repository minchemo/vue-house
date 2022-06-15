import { createApp } from "vue"
import App from "./App.vue"
import "./assets/style/tailwind.css"
import router from "./router.js"

import VueMobileDetection from "vue-mobile-detection"

import VueSplide from "@splidejs/vue-splide"
import "@splidejs/vue-splide/css/core"

import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"


const toastOptions = {
    transition: "Vue-Toastification__fade",
    maxToasts: 5,
    newestOnTop: true,
}

createApp(App)
    .use(Toast, toastOptions)
    .use(VueMobileDetection)
    .use(VueSplide)
    .use(router)
    .mount("#app")