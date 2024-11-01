import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from "@/views/HomePage.vue";
import FoodsPage from "@/views/FoodsPage.vue";
import GoodsPage from "@/views/GoodsPage.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import CartPage from "@/views/CartPage.vue";
import CheckoutPage from "@/views/CheckoutPage.vue";
import OrderSummaryPage from "@/views/OrderSummaryPage.vue";
import OrderHistoryPage from "@/views/OrderHistoryPage.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/foods',
    name: 'foods',
    component: FoodsPage
  },
  {
    path: '/foods/:id',
    component: ProductDetail
  },
  {
    path: '/goods/:id',
    component: ProductDetail
  },
  {
    path: '/goods',
    name: 'goods',
    component: GoodsPage
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartPage
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutPage
  },
  {
    path: '/order-summary',
    name: 'order-summary',
    component: OrderSummaryPage
  },
  {
    path: '/order-history',
    name: 'order-history',
    component: OrderHistoryPage
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
