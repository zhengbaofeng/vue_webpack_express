<template>
  <div class="baseInfo">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">基本信息</h1>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading"><em class="glyphicon glyphicon-user"></em>管理员信息</div>
      <div class="panel-body">
        <div class="row">
          <div class="col-lg-6">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-3 control-label">安全手机</label>
                <div class="col-sm-7">
                  <input type="text" class="form-control" placeholder="请输入手机号码" v-model="phone">
                </div>
                <div class="col-sm-2 op">
                  <a @click="vPhone">验证手机</a>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">安全E-Mail</label>
                <div class="col-sm-7">
                  <input type="text" class="form-control" placeholder="请输入邮箱地址" v-model="email">
                </div>
                <div class="col-sm-2 op">
                  <a @click="vEmail">验证邮箱</a>
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">管理员QQ</label>
                <div class="col-sm-7">
                  <input type="text" class="form-control" placeholder="请输入QQ号码" v-model="qq">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">管理员微信</label>
                <div class="col-sm-7">
                  <input type="text" class="form-control" placeholder="请输入微信号码" v-model="weChat">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label"></label>
                <div class="col-sm-7">
                  <a class="btn btn-primary btn-block" @click="sub">提交</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="panel panel-default">
      <div class="panel-heading"><em class="glyphicon glyphicon-phone"></em>其他联系人</div>
      <div class="panel-body">
        <div class="row">
          <div class="col-lg-6">
            <form class="form-horizontal">
              <div class="form-group">
                <label class="col-sm-3 control-label">手机1</label>
                <div class="col-sm-7">
                  <input type="text" class="form-control" placeholder="请输入手机号码" v-model="phone_1">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">手机2</label>
                <div class="col-sm-7">
                  <input type="text" class="form-control" placeholder="请输入手机号码" v-model="phone_2">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label">手机3</label>
                <div class="col-sm-7">
                  <input type="text" class="form-control" placeholder="请输入手机号码" v-model="phone_3">
                </div>
              </div>
              <div class="form-group">
                <label class="col-sm-3 control-label"></label>
                <div class="col-sm-7">
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
  .op{
    padding-top: 7px;
  }
  .op a{
    cursor: pointer;
    white-space:nowrap;
  }
</style>
<script>
  export default {
    name: 'baseInfo',
    data () {
      return {
        phone: '',
        email: '',
        qq: '',
        weChat: '',
        phone_1: '',
        phone_2: '',
        phone_3: ''
      }
    },
    methods: {
      sub() {

      },
      vPhone() {

      },
      vEmail() {

      }
    }
  }
</script>