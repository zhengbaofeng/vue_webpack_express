<template>
  <div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
    <form role="search">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="Search">
      </div>
    </form>
    <ul class="nav menu">
      <li class="active"><router-link to="/"><span class="glyphicon glyphicon-dashboard"></span> 首页</router-link></li>
      <li class="parent ">
        <a>
          <span class="glyphicon glyphicon-stats"></span> 接口 <span data-toggle="collapse" href="#sub-item-1" class="icon pull-right"><em class="glyphicon glyphicon-s glyphicon-plus"></em></span>
        </a>
        <ul class="children collapse" id="sub-item-1">
          <li>
            <router-link to="/test">
              <span class="glyphicon glyphicon-cog"></span> 测试账号
            </router-link>
          </li>
          <li>
            <router-link to="/production">
              <span class="glyphicon glyphicon-folder-open"></span> 生产账号
            </router-link>
          </li>
        </ul>
      </li>
      <li class="parent ">
        <a>
          <span class="glyphicon glyphicon-list"></span> 详单 <span data-toggle="collapse" href="#sub-item-2" class="icon pull-right"><em class="glyphicon glyphicon-s glyphicon-plus"></em></span>
        </a>
        <ul class="children collapse" id="sub-item-2">
          <li>
            <router-link to="/debt">
              <span class="glyphicon glyphicon-search"></span> 多重负债查询
            </router-link>
          </li>
          <li>
            <router-link to="/batch">
              <span class="glyphicon glyphicon-list-alt"></span> 批量重报送
            </router-link>
          </li>
        </ul>
      </li>
      <li><router-link to="/"><span class="glyphicon glyphicon-pencil"></span>文档</router-link></li>
      <li class="parent ">
        <a>
          <span class="glyphicon glyphicon-user"></span> 账号 <span data-toggle="collapse" href="#sub-item-4" class="icon pull-right"><em class="glyphicon glyphicon-s glyphicon-plus"></em></span>
        </a>
        <ul class="children collapse" id="sub-item-4">
          <li>
            <router-link to="/baseInfo">
              <span class="glyphicon glyphicon-info-sign"></span> 基本信息
            </router-link>
          </li>
          <li>
            <router-link to="/setPwd">
              <span class="glyphicon glyphicon-wrench"></span> 密码设置
            </router-link>
          </li>
        </ul>
      </li>
      <li role="presentation" class="divider"></li>
      <li><a @click="quit"><span class="glyphicon glyphicon-log-out"></span>退出</a></li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'sidebar',
    data () {
      return {}
    },
    methods: {
      quit() {

      }
    }
  }
</script>