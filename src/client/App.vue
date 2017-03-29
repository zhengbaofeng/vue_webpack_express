<template>
  <div class="app">
    <my-header :nav="nav"></my-header>
    <router-view></router-view>
    <my-footer></my-footer>
  </div>
</template>

<script>
  import myHeader from './components/header/header'
  import myFooter from './components/footer/footer'
  export default {
    components: {
      myHeader,
      myFooter
    },
    data () {
      return {
        nav: [
          {text: '首页', link: '/'},
          {text: '登录', link: '/login'},
          {text: '首页', link: '/'},
          {text: '首页', link: '/'},
          {text: '首页', link: '/'},
          {text: '首页', link: '/'},
          {text: '首页', link: '/'}
        ]
      }
    }
  }
</script>