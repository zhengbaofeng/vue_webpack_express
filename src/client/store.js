/**
 * Created by 郑宝丰 on 2017/4/1.
 */

let getCookie = function() {
  return JSON.parse(window.localStorage.getItem('vue-cookie') || '[]')
}
let setCookie = function(val) {
  return window.localStorage.setItem('vue-cookie', JSON.stringify(val))
}
let getSession = function() {
  return JSON.parse(window.sessionStorage.getItem('vue-session') || '[]')
}
let setSession = function(val) {
  return window.sessionStorage.setItem('vue-session', JSON.stringify(val))
}

let userState = {
  state: {
    user: {
      isLogin: false
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },
  mutations: {
    changeAge(state, age) {
      state.user.age = age
    }
  },
  actions: {
    changeAge(context, age) {
      context.commit('changeAge', age)
    }
  }
}
export {
  getCookie,
  setCookie,
  getSession,
  setSession,
  userState
}
