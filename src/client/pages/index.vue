<template>
  <div class="content">
    <s-header></s-header>
    <s-sidebar></s-sidebar>
    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
      <s-path :path="path"></s-path>
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
  import s_header from './common/header'
  import s_sidebar from './common/sidebar'
  import s_path from './common/path'
  export default {
    name: 'index',
    data () {
      return {
        path:['首页','首页']
      }
    },
    methods: {},
    components: {
      's-header': s_header,
      's-sidebar': s_sidebar,
      's-path': s_path
    }
  }
</script>