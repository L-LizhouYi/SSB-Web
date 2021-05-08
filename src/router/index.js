import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/index',
    name: 'index',
    component: resolve => {
      require(['@/views/Index'], resolve)
    }
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => {
      require(['@/views/Login'], resolve)
    },
    children: [
      {
        path: 'login',
        component: resolve => {
          require(['@/components/Llogin'], resolve)
        }
      },
      {
        path: 'registered',
        component: resolve => {
          require(['@/components/Lregistered'], resolve)
        }
      },
      {
        path: 'reset',
        component: resolve => {
          require(['@/components/Lreset'], resolve)
        }
      }
    ],
    redirect: '/login/login'
  },
  {
    path: '*',
    redirect: '/index'
  }
  ]
})
