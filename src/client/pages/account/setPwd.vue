<template>
  <div class="setPwd">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">密码设置</h1>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-body">
        <div class="row">
          <div class="col-lg-6">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-3 control-label">原密码</label>
                <div class="col-sm-8">
                  <input type="password" class="form-control" placeholder="请输入现在使用的密码" v-model="pwd">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">新密码</label>
                <div class="col-sm-8">
                  <input type="password" class="form-control" placeholder="请输入新密码" v-model="nPwd">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">密码强度</label>
                <div class="col-sm-8">
                  <div class="row text-center pwdPoint">
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">弱</div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">中</div>
                    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">强</div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">确认密码</label>
                <div class="col-sm-8">
                  <input type="password" class="form-control" placeholder="请确认新密码" v-model="cPwd">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label"></label>
                <div class="col-sm-8">
                  <a class="btn btn-primary btn-block" @click="sub">提交</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .panel-body{
    padding-top: 50px;
    padding-bottom: 100px;
  }
  .pwdPoint {
    padding-top: 7px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .pwdPoint div{
    border: 1px solid #dddddd;
  }
</style>
<script>
  export default {
    name: 'setPwd',
    data () {
      return {
        pwd: '',
        nPwd: '',
        cPwd: '',
        strength: 0
      }
    },
    methods: {
      sub() {

      }
    },
    watch: {
      nPwd(val, oVal) {

      },
      strength(val, oVal) {

      }
    }
  }
</script>