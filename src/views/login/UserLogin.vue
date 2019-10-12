<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <div class="svgIcon">
        <svg-icon class-name='international-icon' icon-class="me" />
      </div>
      <el-input size="small" @keyup.enter.native="handleLogin" v-model="loginForm.username" auto-complete="off" placeholder="用户名/手机号">
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <div class="svgIcon">
        <svg-icon class-name='international-icon' icon-class="lock" />
      </div>
      <el-input size="small" @keyup.enter.native="handleLogin" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="密码">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
      </el-input>
    </el-form-item>
    <el-checkbox v-model="checked">记住账号</el-checkbox>
    <el-form-item>
      <el-button type="primary" size="medium" @click.native.prevent="handleLogin" class="login-submit" v-loading.fullscreen.lock="fullscreenLoading">登录</el-button>
    </el-form-item>
    <p class="login-tip">用户 密码：admin/admin</p>
  </el-form>
</template>

<script>

export default {
  name: 'userlogin',
  components: { },
  data () {
    return {
      fullscreenLoading: false,
      loginForm: {
        username: '',
        password: '',
        code: ''
      },
      checked: false,
      Vcode: {
        code: ''
      },
      loginRules: {
        username: [
          { required: true, message: '请输入用户号/手机号', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 2, message: '密码长度最少为2位', trigger: 'blur' }
        ]
      },
      passwordType: 'password'
    }
  },
  computed: {
  },
  props: [],
  methods: {
    showPassword () {
      this.passwordType === ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
    },
    handleLogin () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.fullscreenLoading = true
          setTimeout(() => {
            this.fullscreenLoading = false
            if (this.loginForm.username.trim() === 'admin' && this.loginForm.password === 'admin') {
              this.$message.success('登录成功！')
              this.$router.push('/home/index')
            } else {
              this.$message.error('用户名或密码不正确！')
            }
          }, 1000)
        }
      })
    }
  }
}
</script>
