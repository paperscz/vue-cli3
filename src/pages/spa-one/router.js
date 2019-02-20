import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['./views/Home.vue'],resolve)
    },
    {
      path: '/detail',
      name: 'detail',
      component: resolve => require(['./views/Detail.vue'],resolve)
    }
  ]
})

export default router