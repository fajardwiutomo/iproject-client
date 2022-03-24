import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import loginPage from '../views/loginPage.vue'
import registerPage from '../views/registerPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: loginPage
  },
  {
    path: '/register',
    name: 'register',
    component: registerPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/myfavorite' && !localStorage.access_token) next({
    path: '/login'
  })
  else if (to.path == '/login' && localStorage.access_token) next({
    path: '/'
  })
  else if (to.path == '/register' && localStorage.access_token) next({
    path: '/'
  })
  else next()
})

export default router
