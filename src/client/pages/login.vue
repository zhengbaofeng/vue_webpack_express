<template>
  <div id="login" class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="login-panel panel panel-default">
          <div class="panel-heading">系统登录</div>
          <div class="panel-body">
            <div class="panel panel-default">
              <div class="panel-body tabs">
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#loginPage" data-toggle="tab">用户登录</a></li>
                  <li><a href="#forgetPage" data-toggle="tab">忘记密码</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane fade in active" id="loginPage">
                    <div class="form-group">
                      <input v-model.trim="userName" class="form-control" placeholder="用户名" name="userName" type="text" autofocus="">
                    </div>
                    <div class="form-group">
                      <input v-model.trim="userPwd" class="form-control" placeholder="密码" name="userPwd" type="password" value="">
                    </div>
                    <a class="btn btn-primary btn-block" @click="login()">登录</a>
                  </div>
                  <div class="tab-pane fade" id="forgetPage">
                    <div class="form-group">
                      <input v-model.trim="userPwd" class="form-control" placeholder="密码" name="userPwd" type="password" value="">
                    </div>
                    <div class="form-group">
                      <input v-model.trim="userPwd" class="form-control" placeholder="密码" name="userPwd" type="password" value="">
                    </div>
                    <a class="btn btn-primary btn-block" @click="forget()">修改密码</a>
                  </div>
                </div>
              </div>
            </div><!--/.panel-->
          </div>
        </div>
      </div><!-- /.col-->
    </div><!-- /.row -->
  </div>
</template>
<script>
  import Utils from '../public/javascripts/utils'

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
        console.log(this.$store.getters.getUser.isLogin)
        let name = this.userName
        let pwd = this.userPwd
        if(!Utils.IsAccount(name)){
          return
        }
        if(!Utils.IsAccount(pwd)){
          return
        }
        this.$http.post('/userLogin', {
          username: name,
          password: pwd
        }).then(function (res) {
          if (res.body.code == '0000' ){
            this.$store.getters.getUser.isLogin = true
            this.$router.push('/index')
          }else{
            console.log('参数错误')
          }
        }, function (res) {
          console.log(res)
        })
      },
      forget() {

      }
    }
  }
</script>