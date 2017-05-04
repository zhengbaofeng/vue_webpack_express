<template>
  <div class="port">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">生产账号</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading"><em class="glyphicon glyphicon-list-alt"></em>账号信息</div>
          <div class="panel-body">
            <div class="col-md-6">
              <div class="form-group">
                <label>回调地址</label>
                <input v-model.trim="address" class="form-control" placeholder="请输入地址">
              </div>
              <div class="form-group">
                <label>通讯安全</label>
                <select class="form-control" v-model="selected">
                  <option v-for="o in options" :value="o.value">
                    {{ o.text }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <label>通讯密匙</label>
                <input v-model.trim="key" class="form-control" placeholder="请输入密匙">
              </div>
              <div class="form-group">
                <label>证书下载</label>
                <ul class="list-inline">
                  <li><a>查看证书</a><a>下载证书</a></li>
                </ul>
              </div>
              <div class="form-group">
                <a class="btn btn-primary btn-block" @click="sub">提交</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'productionPort',
    data () {
      return {
        address: '',
        selected: 1,
        options: [
          { text: 'One', value: 1 },
          { text: 'Two', value: 2 },
          { text: 'Three', value: 3 }
        ],
        key: ''
      }
    },
    methods: {
      sub() {
        console.log(this.selected)
      }
    }
  }
</script>