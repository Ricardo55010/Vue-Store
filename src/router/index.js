import { createRouter, createWebHistory } from "vue-router"
import TestComponent from "../components/TestComponent.vue";
import AppLayout from "../pages/AppLayout.vue";
import Results from "@/pages/Results.vue";
import Home from "../pages/Home.vue";
import CreateProduct from "@/pages/CreateProduct.vue";
import Product from "@/pages/Product.vue";
import EditProduct from "@/pages/EditProduct.vue";
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

]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

export default router;