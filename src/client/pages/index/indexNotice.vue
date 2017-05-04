<template>
  <div class="notice">
    查询ID：{{sId}}
  </div>
</template>
<script>
  export default {
    name: 'notice',
    data () {
      return {
        sId: this.$route.query.id
      }
    }
  }
</script>