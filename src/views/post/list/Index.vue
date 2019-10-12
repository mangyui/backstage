<template>
  <div class="my-bg-white">
    <div class="my-flex list-top">
      <h3>作品列表</h3>
      <p class="block-tip">内容质量与粉丝效果好的作品可以得到更多频道曝光?</p>
    </div>
    <el-tabs>
      <el-tab-pane>
        <span slot="label"><i class="tab-icon el-icon-picture-outline"></i> 帖子</span>
        <postBox post-type="帖子"/>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="tab-icon el-icon-film"></i> 短视频</span>
        <postBox post-type="短视频"/>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="tab-icon el-icon-sold-out"></i> 搭配</span>
        <postBox post-type="搭配"/>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="tab-icon el-icon-present"></i> 单品</span>
        <postBox post-type="单品"/>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="tab-icon el-icon-chat-dot-round"></i> 问答</span>
        <postBox post-type="问答"/>
      </el-tab-pane>
      <el-tab-pane>
        <span slot="label"><i class="tab-icon el-icon-position"></i> 转发</span>
        <postBox post-type="转发"/>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import postBox from './postBox'

export default {
  components: {
    postBox
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
.list-top{
  align-items: center;
  margin-bottom: 40px;
  h3{
    margin-bottom: 0;
    margin-right: 20px;
  }
}

.tab-icon {
  background: #ecf5ff;
  padding: 5px;
  border-radius: 50%;
  color: #409EFF;
  font-size: 18px;
  margin-right: 5px;
  margin-left: 5px;
}
</style>
