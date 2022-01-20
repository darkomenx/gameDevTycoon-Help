import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',              name: 'home', component: require('@/components/Home').default },
    { path: '/list/:object',  name: 'list', component: require('@/components/List').default },
    { path: '/game',          name: 'game', component: require('@/components/Game').default },
    { path: '/help',          name: 'help', component: require('@/components/Help').default },
    { path: '/test',          name: 'test', component: require('@/components/Test').default },
    // {
    //   path: '*',
    //   redirect: '/'
    // }
  ]
})
