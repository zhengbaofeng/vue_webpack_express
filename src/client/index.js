import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import App from './App'
import index from './components/index'
import login from './components/login'

import './public/javascripts/bootstrap.min'
import './public/css/bootstrap.css'

Vue.config.debug = true
Vue.use(Router)
Vue.use(Resource)

const router = new Router({
  routes: [
    {path: '/', component: index},
    {path: '/login', component: login}
  ]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
