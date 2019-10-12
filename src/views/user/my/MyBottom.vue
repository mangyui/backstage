<template>
  <div class="my-bg-white">
    <h6>功能状态</h6>
    <el-row class="padTB20 flex-row" :gutter="20" v-for="(item,index) in myList" :key="index">
      <el-col :xs="6" :sm="12" :md="3">
        <div class="data-icon">
          <svg-icon :iconClass="item.icon"></svg-icon>
        </div>
      </el-col>
      <el-col :xs="18" :sm="12" :md="12">
        <div>
          <span class="my-title">{{item.title}}</span>
          <p class="my-mini">{{item.desc}}</p>
        </div>
      </el-col>
      <el-col :xs="6" :sm="12" :md="3">
        <div class="my-center">
          <p class="my-mini">{{item.tip}}</p>
        </div>
      </el-col>
      <el-col :xs="18" :sm="12" :md="6">
        <div>
          <p class="my-mini">{{item.Explain}}</p>
          <a class="my-link" href="#">查看详情</a>
        </div>
      </el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  data () {
    return {
      myList: [
        {
          icon: 'tuijian',
          title: '微淘推送',
          desc: '微淘是达人的粉丝回访主阵地。推送到微淘的内容，可以通过微淘内容流展现给粉丝，粉丝喜爱的内容将获得平台推荐',
          tip: '10条/天',
          Explain: '各等级可推送条数不同，L0、L1达人每日可发布1条，L2及以上达人每日可发布10条（具体规则详见达人成长-等级权益）；注：账号升级后，约一至两天内微淘条数生效'
        },
        {
          icon: 'VK',
          title: '阿里V任务',
          desc: '阿里V任务是阿里官方内容推广平台。无缝连接达人与商家，达人可以通过营销推广任务与商家进行合作，实现内容变现',
          tip: '已开通',
          Explain: '阿里V任务是阿里官方内容推广平台。无缝连接达人与商家，达人可以通过营销推广任务与商家进行合作，实现内容变现'
        },
        {
          icon: 'gps',
          title: 'CPS结算权限',
          desc: 'CPS为按成交付费的商业化模式。获得CPS结算权限的达人，其内容中推荐商品引导成交，即可获得商家设置的淘宝客佣金收入；注：账号升级后，约一至两天内结算权限生效',
          tip: '已开通',
          Explain: '面对L2及以上等级达人，以及有部分频道权限的达人开放'
        },
        {
          icon: 'fasong',
          title: '内容号推送',
          desc: '内容号是达人专属的粉丝强回访阵地。通过内容号推送的内容，可以精准推送给粉丝，粉丝在手机淘宝-消息-内容号中查看消息',
          tip: '10条/天',
          Explain: '面对L4及以上的非店铺达人开放'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.el-row{
  &:not(:nth-last-child(1)){
    border-bottom: 1px solid #f8f8f8;
  }
}
</style>
