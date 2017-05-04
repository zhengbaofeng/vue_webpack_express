<template>
  <div class="info">
    <div class="row">
      <div class="col-lg-12">
        <h1 class="page-header">首页</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-lg-4">
        <div class="panel panel-blue panel-widget ">
          <div class="row no-padding">
            <div class="col-sm-3 col-lg-5 widget-left">
              <em class="glyphicon glyphicon-usd glyphicon-l"></em>
            </div>
            <div class="col-sm-9 col-lg-7 widget-right">
              <div class="large">{{integral.surplus}}</div>
              <div class="text-muted">剩余积分</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-lg-4">
        <div class="panel panel-orange panel-widget">
          <div class="row no-padding">
            <div class="col-sm-3 col-lg-5 widget-left">
              <em class="glyphicon glyphicon-gift glyphicon-l"></em>
            </div>
            <div class="col-sm-9 col-lg-7 widget-right">
              <div class="large">{{integral.reward}}</div>
              <div class="text-muted">昨日奖励</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-lg-4">
        <div class="panel panel-teal panel-widget">
          <div class="row no-padding">
            <div class="col-sm-3 col-lg-5 widget-left">
              <em class="glyphicon glyphicon-shopping-cart glyphicon-l"></em>
            </div>
            <div class="col-sm-9 col-lg-7 widget-right">
              <div class="large">{{integral.consumption}}</div>
              <div class="text-muted">昨日消费</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading"><em class="glyphicon glyphicon-list-alt"></em>昨日查询统计</div>
          <div class="panel-body">
            <div class="canvas-wrapper">
              <canvas class="main-chart" id="line-chart" height="200" width="600"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="panel panel-default">
          <div class="panel-heading"><em class="glyphicon glyphicon-envelope"></em>系统公告</div>
          <div class="panel-body">
            <ul class="list-unstyled noticeList">
              <li v-for="(n, index) in notice"><a @click="toNotice(index)">{{n.title}}<span class="date pull-right">{{n.date}}</span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="sass">
  $color: #efefef;
  .noticeList{
    font-size: 16px;
    line-height: 35px;
    li{
      padding: 0px 15px;
      a{
        display: block;
      }
      &:hover{
         background-color: $color;
       }
    }
  }
</style>
<script>
  export default {
    name: 'info',
    mounted () {

    },
    data () {
      return {
        integral: {
          surplus: 0,
          reward: 0,
          consumption: 0
        },
        notice:[
          {
            title: '系统维护公告系统维护公告系统维护公告系统维护公告',
            date: '2014-1-18',
            sId: 1
          },
          {
            title: '系统维护公告系统维护公告系统维护公告系统维护公告',
            date: '2014-1-18',
            sId: 2
          },
          {
            title: '系统维护公告系统维护公告系统维护公告系统维护公告',
            date: '2014-1-18',
            sId: 3
          },
          {
            title: '系统维护公告系统维护公告系统维护公告系统维护公告',
            date: '2014-1-18',
            sId: 4
          },
          {
            title: '系统维护公告系统维护公告系统维护公告系统维护公告',
            date: '2014-1-18',
            sId: 5
          }
        ]
      }
    },
    methods: {
      toNotice(index) {
        this.$router.push({ path: '/notice', query: { id: this.notice[index].sId }})
      }
    }
  }
</script>