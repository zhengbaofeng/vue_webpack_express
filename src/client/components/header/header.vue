<template>
  <header class="navbar clearfix" id="header">
    <div class="container">
      <a>
        <img class="img-responsive" src="~public/img/logo.png" height="30" width="120">
      </a>

    </div>
  </header>
</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        nav: [
          {text: '起步', link: '/'},
          {text: '全局CSS', link: '/'},
          {text: '组件', link: '/'},
          {text: 'JavaScript', link: '/'},
          {text: '定制', link: '/'},
          {text: '网站实例', link: '/'}
        ]
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/scss">
  $h_bg:#5e87b0;
  #header{
    background-color: $h_bg;
    border:none;
    border-radius: 0px;
    margin: 0px;
  }
</style>
