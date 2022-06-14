import { createApp } from 'vue'
import App from './App.vue'
import './assets/style/tailwind.css'
import router from './router.js';

import Vue3MobileDetection from "vue3-mobile-detection";
import VueSplide from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/core';

createApp(App).use(Vue3MobileDetection).use(VueSplide).use(router).mount('#app')
