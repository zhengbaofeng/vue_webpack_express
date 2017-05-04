<template>
  <div class="row path">
    <ol class="breadcrumb">
      <li><a href="#"><span class="glyphicon glyphicon-home"></span></a></li>
      <li v-for="p in path" class="active">{{p}}</li>
    </ol>
  </div><!--/.row-->
</template>

<script>
  export default {
    name: 'path',
    props: ['path'],
    data () {
      return {

      }
    }
  }
</script>
<style>

</style>
