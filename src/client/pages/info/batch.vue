<template>
  <div id="batch">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">批量重报送</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading"><em class="glyphicon glyphicon-list-alt"></em>数据上传</div>
          <div class="panel-body">
            <div class="col-md-6">
              <div class="row">
                <div class="col-lg-12">
                  <file-upload
                          :title="title"
                          :events="events"
                          :name="name"
                          :post-action="postAction"
                          :extensions="extensions"
                          :accept="accept"
                          :multiple="multiple"
                          :size="size || 0"
                          :thread="thread < 1 ? 1 : (thread > 5 ? 5 : thread)"
                          :headers="headers"
                          :data="data"
                          :drop="drop"
                          :files="files"
                          ref="upload">
                  </file-upload>
                  <div class="pull-right">
                    <a v-show="!upload.active" @click.prevent="upload.active = true" class="btn btn-primary">开始上传</a>
                    <a v-show="upload.active" @click.prevent="upload.active = false" class="btn btn-primary">停止上传</a>
                  </div>
                </div>
                <div class="col-lg-12">
                  <table class="table">
                    <thead>
                    <tr>
                      <th>编号</th>
                      <th>文件名</th>
                      <th>大小</th>
                      <th>进度</th>
                      <th>操作</th>
                    </tr>
                    </thead>
                    <tbody v-if="files.length != 0">
                      <tr v-for="(file, index) in files">
                        <td>{{index+1}}</td>
                        <td>{{file.name}}</td>
                        <td>{{file.size | formatSize}}</td>
                        <td>{{file.progress}}%</td>
                        <td><a class="delFile" @click.prevent="remove(file)">删除</a></td>
                      </tr>
                    </tbody>
                    <tbody v-else>
                      <tr>
                        <td colspan="5" class="text-center">暂无文件</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .panel{
    padding-bottom: 100px;
    thead tr:hover{
      background-color: #fff !important;
    }
    .delFile{
      cursor: pointer;
    }
  }
</style>
<script>
  import FileUpload from '../../components/fileUpload'

  export default {
    name: 'batch',
    components: {
      FileUpload,
    },

    data() {
      return {
        accept: 'image/*',
        accept: '',
        size: 1024 * 1024 * 10,
        multiple: true,
        extensions: /\.(gif|png|jpg)$/i,
        files: [],
        upload: {},
        title: '选择文件',
        drop: true,
        auto: false,
        thread: 1,
        name: 'file',
        postAction: 'fileUpload',
        headers: {
          "X-Csrf-Token": "xxxx",
        },
        data: {
          "_csrf_token": "xxxxxx",
        },
        events: {
          add(file, component) {
            if (this.$parent.auto) {
              component.active = true;
            }
            file.headers['X-Filename'] = encodeURIComponent(file.name)
            file.data.finename = file.name
          },
          progress(file, component) {
          },
          after(file, component) {
          },
          before(file, component) {
          },
        }
      }
    },

    mounted() {
      this.upload = this.$refs.upload.$data
    },

    methods: {
      remove(file) {
        var index = this.files.indexOf(file)
        if (index != -1) {
          this.files.splice(index, 1);
        }
      },
    }
  }
</script>
