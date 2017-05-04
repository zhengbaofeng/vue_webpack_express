import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'
import Vuex from 'vuex'

import App from './App'
import index from './pages/index'
import indexInfo from './pages/index/indexInfo'
import indexNotice from './pages/index/indexNotice'

import productionPort from './pages/port/production'
import testPort from './pages/port/test'

import debt from './pages/info/debt'
import batch from './pages/info/batch'

import baseInfo from './pages/account/baseInfo'
import setPwd from './pages/account/setPwd'

import login from './pages/login'
import { userState } from './store'

import './public/javascripts/bootstrap.min'
import './public/css/bootstrap.css'
import './public/css/styles.css'

Vue.config.debug = false
Vue.use(Router)
Vue.use(Resource)
Vue.use(Vuex)

let store = new Vuex.Store({
  modules: {
    user: userState
  }
})

Vue.filter('formatSize', function(size) {
  if (size > 1024 * 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB';
  } else if (size > 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB';
  } else if (size > 1024 * 1024) {
    return (size / 1024 / 1024).toFixed(2) + ' MB';
  } else if (size > 1024) {
    return (size / 1024).toFixed(2) + ' KB';
  }
  return size.toString() + ' B';
});

const router = new Router({
  routes: [
    {
      path: '/',
      component: index,
      children: [
        {
          path: '',
          component: indexInfo
        },
        {
          path: 'notice',
          component: indexNotice
        },
        {
          path: 'production',
          component: productionPort
        },
        {
          path: 'test',
          component: testPort
        },
        {
          path: 'debt',
          component: debt
        },
        {
          path: 'batch',
          component: batch
        },
        {
          path: 'baseInfo',
          component: baseInfo
        },
        {
          path: 'setPwd',
          component: setPwd
        }
      ]
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/*',
      component: index
    }
  ]
})
router.afterEach((to, from) => {
  if(to.path != '/login' && !store.getters.getUser.isLogin){
    console.log('没有登录')
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
