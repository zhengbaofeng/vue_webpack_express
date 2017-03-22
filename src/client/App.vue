<template>
  <div class="app">
    <my-header></my-header>
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
      }
    }
  }
</script>