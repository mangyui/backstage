<template>
  <div class="my-bg-white">
    <el-row class="flex-row" :gutter="20">
      <el-col :xs="12" :sm="8" :md="6" v-for="(item, index) in dataList" :key="index">
        <div class="data-icon">
          <svg-icon :iconClass="item.icon"></svg-icon>
        </div>
        <div>
          <p>{{item.title}}</p>
          <span class="number">{{dataNumber[item.icon]}}</span>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [{
        title: '昨日内容浏览次数',
        icon: 'eye'
      }, {
        title: '昨日粉丝数',
        icon: 'people'
      }, {
        title: '昨日活跃粉丝数',
        icon: 'up'
      }, {
        title: '累计内容发布数',
        icon: 'history'
      }, {
        title: '内容健康度',
        icon: 'health'
      }, {
        title: '内容质量分',
        icon: 'star'
      }, {
        title: '微淘号达人指数',
        icon: 'Daren'
      }],
      dataNumber: {
        eye: '567',
        people: '99',
        up: '96万',
        history: 20,
        health: 20,
        star: 50,
        Daren: 30
      }
    }
  }
}
</script>

<style lang="less" scoped>
.el-row{
  .el-col{
    display: flex;
    margin: 15px 0;
    align-items: center;
    p{
      color: #888;
      font-size: 13px;
      margin-bottom: 5px;
    }
    span.number{
      font-size: 22px;
    }
  }
}
</style>
