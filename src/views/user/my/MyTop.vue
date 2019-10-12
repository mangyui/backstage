<template>
  <div class="my-bg-white">
    <h6>账号勋章</h6>
    <el-row class="padTB20 flex-row" :gutter="20">
      <el-col :xs="6" :sm="12" :md="3">
        <div class="data-icon">
          <svg-icon iconClass="xinyong"></svg-icon>
        </div>
      </el-col>
      <el-col :xs="18" :sm="12" :md="12">
        <div>
          <span class="my-title">账号信用</span>
          <p class="my-mini">出现违规行为将会扣除信用分，信用分降低到一定分数会触发账号处罚，并降低微淘号达人指数</p>
        </div>
      </el-col>
      <el-col :xs="6" :sm="12" :md="3">
        <div class="my-center">
          <p class="my-mini">0分</p>
        </div>
      </el-col>
      <el-col :xs="18" :sm="12" :md="6">
        <div>
          <p class="my-mini">满分40分，不良行为会导致扣分</p>
          <a class="my-link" href="#">查看详情</a>
          <a class="my-link" href="#">历史记录</a>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>
