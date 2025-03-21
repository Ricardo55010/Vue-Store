import { createRouter, createWebHistory } from "vue-router"
import TestComponent from "./components/TestComponent.vue";
import HelloWorld from "./components/HelloWorld.vue";
const routeInfos = [
    {
        path : "/",
        component : TestComponent
    },
    {
        path : "/home",
        component: HelloWorld
    }

]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;