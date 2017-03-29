<template>
  <header class="navbar clearfix" id="header">
    <div class="container">
      <a>
        <img class="img-responsive" src="~public/img/logo.png">
      </a>
      <ul class="list-inline">
        <li v-for="n in nav">
          <router-link :to="{path: n.link}">{{n.text}}</router-link>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'header',
    props: ['nav'],
    data () {
      return {
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
    img{
      height: 40px;
    }
  }
</style>
