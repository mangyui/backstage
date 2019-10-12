<template>
  <div class="my-bg-white">
    <div class="flex-row">
      <h6 style="margin-right: 30px">我的角色</h6>
      <p class="block-tip">角色认证通过后，角色标识及认证信息将显示在账号主页，拥有个性化的玩法，如渠道快速合作等?</p>
    </div>
    <el-row class="padTB20 flex-row" :gutter="20">
      <el-col :xs="6" :sm="12" :md="3">
        <div class="data-icon">
          <svg-icon iconClass="guanfang"></svg-icon>
        </div>
      </el-col>
      <el-col :xs="18" :sm="12" :md="12">
        <div>
          <span class="my-title">官方账号</span>
          <p class="my-mini">淘宝内部官方账号，请勿申请</p>
        </div>
      </el-col>
      <el-col :xs="6" :sm="12" :md="3">
        <div class="my-center">
          <p class="my-mini"></p>
        </div>
      </el-col>
      <el-col :xs="118" :sm="12" :md="6">
        <div>
          <p>认证通过</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>
