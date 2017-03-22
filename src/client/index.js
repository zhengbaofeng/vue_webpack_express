import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import login from './components/login'
import index from './components/index'

import './public/javascripts/bootstrap.min'
import './public/css/bootstrap.css'

Vue.config.debug = true
Vue.use(Router)

const router = new Router()

router.map({
  '/': {
    name: 'index',
    component: index
  },
  '/login': {
    name: 'login',
    component: login
  }
})

router.beforeEach(() => {
  window.scrollTo(0, 0)
})

router.start(App, '#app')
