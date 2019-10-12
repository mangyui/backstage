<template>
  <div class="my-bg-white">
    <h3>账号信息</h3>
    <ul class="set-list">
      <li>
        <span class="label">账号类型</span>
        <span class="info">{{type}}</span>
      </li>
      <li>
        <span class="label">账号名称</span>
        <span class="info">{{name}}</span>
      </li>
      <li>
        <span class="label">账号头像</span>
        <img :src="avatar">
      </li>
      <li>
        <span class="label">账号简介</span>
        <span class="info">{{intro}}</span>
      </li>
    </ul>
    <el-button class="pos-btn" size="small" type="primary" @click="dialogUpdate=true">修改</el-button>
    <el-dialog title="修改账户信息" :visible.sync="dialogUpdate">
      <el-form :model="form">
        <el-form-item label="账号名称" label-width="80px">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="账号简介" label-width="80px">
          <el-input type="textarea" v-model="form.intro"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button size="small" @click="dialogUpdate = false">取 消</el-button>
        <el-button size="small" type="primary" @click="toUpdate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      dialogUpdate: false,
      type: '微淘号 · 商家',
      name: '好名字都起不到啦',
      avatar: require('@/assets/images/newAvatar.jpg'),
      intro: '这个家伙很懒什么都没有留下',
      form: {
        name: '好名字都起不到啦',
        intro: '这个家伙很懒什么都没有留下'
      }
    }
  },
  methods: {
    toUpdate () {
      this.name = this.form.name
      this.intro = this.form.intro
      this.dialogUpdate = false
    }
  }
}
</script>

<style lang="less" scoped>
.set-list{
  li{
    padding: 12px 0;
    border-bottom: 1px solid #f8f8f8;
    .label{
      color: #888;
      margin-right: 50px;
      vertical-align: top;
    }
    .info{
      color: #555;
    }
    img{
      width: 120px;
      height: 120px;
      border-radius: 5px;
    }
  }
}
.pos-btn {
  position: absolute;
  top: 20px;
  right: 20px;
}
.el-input, .el-textarea{
  max-width: 400px;
}
</style>
