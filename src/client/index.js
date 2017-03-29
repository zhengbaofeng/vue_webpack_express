import Vue from 'vue'
import Router from 'vue-router'
import Resource from 'vue-resource'

import App from './App'

import './public/javascripts/bootstrap.min'
import './public/css/bootstrap.css'

Vue.config.debug = true
Vue.use(Router)
Vue.use(Resource)

new Vue({
  render: h => h(App)
}).$mount('#app')
