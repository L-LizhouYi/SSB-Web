import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'root',
    component: resolve => {
      require(['@/views/Index'], resolve)
    },
    children: [
      {
        path: '/index',
        component: resolve => {
          require(['@/components/Icontent'], resolve)
        }
      },
      {
        path: '/topic',
        component: resolve => {
          require(['@/components/Topic'], resolve)
        }
      }
    ],
    redirect: '/index'
  },
  // {
  //   path: '/topic',
  //   name: 'topic',
  //   component: resolve => {
  //     require(['@/components/Topic'], resolve)
  //   }
  // },
  {
    path: '/login',
    name: 'login',
    component: resolve => {
      require(['@/views/Login'], resolve)
    },
    children: [
      {
        path: '/',
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
    redirect: '/login/'
  },
  {
    path: '*',
    redirect: '/'
  }
  ]
})
