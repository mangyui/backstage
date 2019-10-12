<template>
  <div style="flex-grow: 0.3" class="todo-warp my-bg-white">
    <h3>代办事项</h3>
    <ul>
      <li class="flex-rl" v-for="(item, index) in todoList" :key="index">
        <span class="my-one-line">{{item.title}}</span>
        <p>{{item.level}}任务({{item.number}})</p>
      </li>
    </ul>
    <div class="to-btn">
      <el-button type="primary" @click="$router.push('/post/new')">发布新作品</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoList: [{
        title: '订阅号留言',
        level: 'V',
        number: 1
      }]
    }
  }
}
</script>

<style lang="less" scoped>
ul{
  margin: 15px 0 10px;
  li{
    color: #666;
    font-size: 13px;
    padding: 5px 0;
    margin: 5px 0;
    span{
      display: inline-block;
      max-width: 200px;
    }
  }
}
.to-btn{
  padding-top: 10px;
  border-top: 1px solid #f5f5f5;
  .el-button{
    width: 100%;
  }
}
</style>
