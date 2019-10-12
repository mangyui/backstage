<template>
  <div class="post-create my-bg-white">
    <h3>发布作品</h3>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="90px" class="demo-ruleForm">
      <el-form-item label="作品名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="作品简介" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item label="作品类别">
        <el-select v-model="ruleForm.region" placeholder="请选择作品类别">
          <el-option label="汽车" value="1"></el-option>
          <el-option label="金融" value="2"></el-option>
          <el-option label="其他" value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="作品名称" prop="author">
        <el-input v-model="ruleForm.author"></el-input>
      </el-form-item>
      <el-form-item label="封面图" prop="cover">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>
      <el-form-item label="发布时间">
        <el-col :span="11">
          <el-form-item prop="date1">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col class="my-center" :span="2">-</el-col>
        <el-col :span="11">
          <el-form-item prop="date2">
            <el-time-picker placeholder="选择时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
          </el-form-item>
        </el-col>
      </el-form-item>
      <el-form-item label="状态" required>
        <el-radio-group v-model="ruleForm.isFree">
          <el-radio label="免费"></el-radio>
          <el-radio label="收费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button size="medium" type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button size="medium" @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dialogVisible: false,
      dialogImageUrl: '',
      ruleForm: {
        name: '',
        author: '',
        date1: '',
        date2: '',
        isFree: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        author: [
          { required: true, message: '请输入发布作者', trigger: 'blur' },
          { min: 1, max: 20, message: '长度在 1 到 20 个字符', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写作品简介', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push('/post/list')
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.post-create{
  .el-form{
    max-width: 450px;
  }
}
</style>
