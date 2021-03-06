import { createRouter, createWebHistory } from 'vue-router'
import auth from "./auth"
import defaults from "./defaults"

const routes = [
    ...defaults,
    ...auth,
];

const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router
