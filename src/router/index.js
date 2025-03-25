import { createRouter, createWebHistory } from "vue-router"
import TestComponent from "../components/TestComponent.vue";
import Home from "../components/Home.vue";
const routeInfos = [
    {
        path : "/",
        component : TestComponent
    },
    {
        path : "/home",
        component: Home
    },

]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;