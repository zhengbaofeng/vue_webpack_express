<template>
  <div id="debt">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">多重负债查询</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading"><em class="glyphicon glyphicon-list-alt"></em>详单</div>
          <div class="panel-body">
            <table class="table table-hover">
              <tr>
                <th v-for="t in tabs.title">{{t.text}}</th>
              </tr>
              <tr>
                <td v-for="c in tabs.content"></td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass">
    tr{
      border-bottom: 1px solid #ddd;
      &:hover{
        background-color: #ddd;
      }
      td,th{
        padding: 10px 5px;
      }
    }
</style>
<script>
  export default {
    name: 'debt',
    data () {
      return {
        tabs: {
          title: [
            {text: 'ID'},
            {text: '查询ID'},
            {text: '姓名'},
            {text: '身份证'},
            {text: '状态'},
            {text: '查询时间'},
            {text: '报送时间'},
          ],
          content: [

          ]
        }
      }
    },
    mounted () {
      console.log(this.tabs.content.length)
    }
  }
</script>