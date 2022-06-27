import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Inicio from '../views/Inicio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/inicio',
    name: 'inicio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Inicio
  }
]

const router = new VueRouter({
  routes
})

export default router
