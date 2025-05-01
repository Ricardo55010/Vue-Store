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
import MyProducts from "@/pages/Private/MyProducts.vue";
import Orders from "@/pages/Private/Orders.vue";
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
    {
        path : "/my-products",
        component: MyProducts
    },
    {
        path : "/my-orders",
        component: Orders
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes : routeInfos
})

router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register','/home','/results','/test'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');


    
    if (authRequired && !loggedIn) {
        return next('/login');
    }

    if (to.path == '/login' && loggedIn) {
        return next('/home');
    }

    if (to.path == '/register' && loggedIn) {
        return next('/home');
    }
    

    next();
});


export default router;