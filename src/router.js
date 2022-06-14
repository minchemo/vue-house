import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/formThanks',
        name: 'formThanks',
        component: () => import('@/pages/FormThanks.vue'),
    },
    {
        path: '/phoneThanks',
        name: 'phoneThanks',
        component: () => import('@/pages/PhoneThanks.vue'),
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;