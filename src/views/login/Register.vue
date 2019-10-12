<template>
  <el-form class="login-form" status-icon :rules="loginRules" ref="loginForm" :model="loginForm" label-width="0">
    <el-form-item prop="username">
      <div class="svgIcon">
        <svg-icon class-name='international-icon' icon-class="me" />
      </div>
      <el-input size="small"  @keyup.enter.native="handleRegister" v-model="loginForm.username" auto-complete="off" placeholder="填用户名">
      </el-input>
    </el-form-item>
    <el-form-item prop="phone">
      <div class="svgIcon">
        <svg-icon class-name='international-icon' icon-class="mobile" />
      </div>
      <el-input size="small" @keyup.enter.native="handleRegister" v-model="loginForm.phone" auto-complete="off" placeholder="手机号码">
      </el-input>
    </el-form-item>
    <el-form-item prop="password">
      <div class="svgIcon">
        <svg-icon class-name='international-icon' icon-class="lock" />
      </div>
      <el-input size="small" @keyup.enter.native="handleRegister" :type="passwordType" v-model="loginForm.password" auto-complete="off" placeholder="请输入密码">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
      </el-input>
    </el-form-item>
    <el-form-item prop="twoPwd">
      <div class="svgIcon">
        <svg-icon class-name='international-icon' icon-class="lock" />
      </div>
      <el-input size="small" @keyup.enter.native="handleRegister" :type="passwordType" v-model="loginForm.twoPwd" auto-complete="off" placeholder="请确认密码">
        <i class="el-icon-view el-input__icon" slot="suffix" @click="showPassword"></i>
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="medium" @click.native.prevent="handleRegister" class="login-submit" v-loading.fullscreen.lock="fullscreenLoading">注册</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'register',
  components: { },
  data () {
    const validatePhone = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('请输入正确的手机号'))
        }
      }
    }
    const validateName = (rule, value, callback) => {
      if (value.length < 1 || value.length > 16) {
        return callback(new Error('用户名长度为1到16位'))
      } else {
        callback()
      }
    }
    const validatePass = (rule, value, callback) => {
      if (value.length < 2 || value.length > 18) {
        return callback(new Error('密码长度为2到18位'))
      } else {
        const reg = /^[^\u4e00-\u9fa5]{0,}$/
        if (reg.test(value)) {
          callback()
        } else {
          return callback(new Error('密码6到18位 不含中文'))
        }
      }
    }
    const validateTwo = (rule, value, callback) => {
      if (this.loginForm.password && value !== this.loginForm.password) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    return {
      fullscreenLoading: false,
      isTeacher: false,
      loginForm: {
        username: '',
        password: '',
        phone: '',
        twoPwd: ''
      },
      loginRules: {
        username: [
          { required: true, validator: validateName, trigger: 'blur' }
        ],
        password: [
          { required: true, validator: validatePass, trigger: 'blur' }
        ],
        phone: [
          { required: true, validator: validatePhone, trigger: 'blur' }
        ],
        twoPwd: [
          { required: true, validator: validateTwo, trigger: 'blur' }
        ]
      },
      passwordType: 'password'
    }
  },
  methods: {
    showPassword () {
      this.passwordType === ''
        ? (this.passwordType = 'password')
        : (this.passwordType = '')
    },
    handleRegister () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.fullscreenLoading = true
          setTimeout(() => {
            this.fullscreenLoading = false
            this.$message.success('注册成功！')
          }, 1000)
        }
      })
    }
  }
}
</script>
