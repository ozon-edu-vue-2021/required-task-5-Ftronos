import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from "../views/Products.vue";
import Basket from "../views/Basket.vue";
import Favorites from "../views/Favorites.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Products,
  },
  {
    path: "/basket",
    name: "Basket",
    component: Basket,
  },
  {
    path: "/favorites",
    name: "Favorites",
    component: Favorites,
  },
];

const router = new VueRouter({
  routes
})

export default router;
