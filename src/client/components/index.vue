<template>
  <div class="index">
    <div class="container">
      <ul class='list-inline'>
        <li>index</li>
      </ul>
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" v-model="userName">
      </div>
      <a class="btn btn-default creSession" @click="creSession">创建session</a>
      <a class="btn btn-default desSession" @click="desSession">销毁session</a>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        userName: '啊啊啊'
      }
    },
    methods: {
      creSession() {
        this.$http.post('/getSession', {user: 'aaa'}).then(function (res) {
          console.log(res)
        }, function (res) {
          console.log(res)
        })
      },
      desSession() {
        console.log(1)
      }
    }
  }
</script>