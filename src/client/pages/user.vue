<template>
  <div id="user" class="container" @load="pageLoad()">
    登录成功
    <span>用户年龄为：{{getUser.age}}</span><br>
    <input type="text" v-model="age" class="form-control"><br>
    <a class="btn btn-default" @click="changeAge()">改变年龄</a><br>
    <hr>
    <label>商品管理</label>
    <ul>
      <li v-for="(c, i) in getCommodity">
        <label>商品名：{{c.name}}</label><br>
        <label>商品价格：{{c.price}}</label>
        <a class="btn btn-default" @click="delCommodity(i)">删除</a>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'user',
    data () {
      return {
        age: ''
      }
    },
    computed: {
      getUser() {
        return this.$store.getters.getUser
      },
      getCommodity() {
        return this.$store.getters.getCommodity
      }
    },
    methods: {
      changeAge() {
        this.$store.dispatch('changeAge', this.age)
      },
      delCommodity(index) {
        console.log(index)
      }
    }
  }
</script>