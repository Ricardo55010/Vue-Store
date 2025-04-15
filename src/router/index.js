import { createRouter, createWebHistory } from "vue-router"
import TestComponent from "../components/TestComponent.vue";
import AppLayout from "../pages/AppLayout.vue";
import Results from "@/pages/General/Results.vue";
import Home from "../pages/General/Home.vue";
import CreateProduct from "@/pages/Products/Create.vue";
import Product from "@/pages/Products/Show.vue";
import EditProduct from "@/pages/Products/Edit.vue";
import Login from "@/pages/General/Login.vue";
import Register from "@/pages/General/Register.vue";
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
    {
        path : "/create",
        component: CreateProduct
    },
    {
        path : "/product",
        component: Product
    },
    {
        path : "/edit",
        component: EditProduct
    },
    {
        path : "/login",
        component: Login
    },
    {
        path : "/Register",
        component: Register
    },
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;