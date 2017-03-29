<template>
  <div  class="container">
    <form>
      <div class="form-group">
        <label>用户名</label>
        <input type="text" class="form-control" v-model="userName">
      </div>
      <div class="form-group">
        <label>密码</label>
        <input type="text" class="form-control" v-model="userPwd">
      </div>
      <a class="btn btn-default" @click="login">登录</a>
      <a class="btn btn-default" @click="isLogin">登录验证</a>
      <a class="btn btn-default" @click="outLogin">退出登录</a>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',
    data () {
      return {
        userName: '',
        userPwd: ''
      }
    },
    methods: {
      login() {
        this.$http.post('/login', {userName: this.userName, userPwd: this.userPwd}).then(function (res) {
          console.log(res)
        }, function (res) {
          console.log(res)
        })
      },
      isLogin() {
        this.$http.post('/isLogin').then(function (res) {
          console.log(res)
        }, function (res) {
          console.log(res)
        })
      },
      outLogin() {
        this.$http.post('/outLogin').then(function (res) {
          console.log(res)
        }, function (res) {
          console.log(res)
        })
      }
    }
  }
</script>