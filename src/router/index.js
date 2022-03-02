import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Products from "../views/Products.vue";
import Cart from "../views/Cart.vue";



const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  const publicPages = ['/Login', '/Register', 'Home'];
  const authrequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  if(to.path == '/Products' || to.path == '/Cart' && !loggedIn) next({name: 'Register'})
  else next()
});
export default router
