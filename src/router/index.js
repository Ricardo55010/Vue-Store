import { createRouter, createWebHistory } from "vue-router"
import TestComponent from "../components/TestComponent.vue";
import AppLayout from "../pages/AppLayout.vue";
import Results from "@/pages/Results.vue";
import Home from "../pages/Home.vue";
const routeInfos = [
    {
        path : "/",
        component : TestComponent
    },
    {
        path : "/home",
        component: Home
    },
    {
        path : "/test",
        component: AppLayout
    },
    {
        path : "/results",
        component: Results
    },

]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;