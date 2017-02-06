import Vue from 'vue'
import VueRouter from 'vue-router'
import Config from './config'
Vue.use(VueRouter)
const Home = resolve => {
  require.ensure(['./pages/home/Home.vue'], () => {
    resolve(require('./pages/home/Home.vue'))
  })
}
const Couter = resolve => {
  require.ensure(['./pages/couter/Couter.vue'], () => {
    resolve(require('./pages/couter/Couter.vue'))
  })
}
const routes = [
  {
    path: '/index',
    name: 'home',
    component: Home
  },
  {
    path: '/couter',
    name: 'couter',
    component: Couter
  },
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  }
]
const router = new VueRouter({
  mode: 'history',
  base: Config.routerBase,
  routes
})

export default router
