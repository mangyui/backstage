<template>
  <div class="login-container pull-height" @keyup.enter.native="handleLogin">
    <div class="login-border  animated fadeInRight">
      <div class="login-main">
        <h4 class="login-title disNone">登录
        </h4>
        <el-tabs v-model="activeName" stretch>
          <el-tab-pane label="用户登录" name="user">
            <userLogin></userLogin>
          </el-tab-pane>
          <el-tab-pane label="立即注册" name="register">
            <register></register>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import userLogin from './UserLogin'
import register from './Register'

export default {
  name: 'login',
  components: {
    userLogin,
    register
  },
  data () {
    return {
      activeName: 'user'
    }
  }
}
</script>

<style lang="less">
.login-container {
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: rgba(0, 0, 0, 0.24);
  position: relative;
  height: 100%;
  flex-wrap: wrap;

}
.login-tip{
  font-size: 13px;
  color: #999;
  margin-top: -15px;
}
.login-container::before {
  z-index: -999;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/images/loginbg.jpg");
  background-size: cover;
}
.login-border {
  width: 320px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px 50px 25px 50px;
  background-color: #fff;
  border-radius: 6px;
}
.login-main {
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #fff;
}
.login-main > h3 {
  margin-bottom: 20px;
}
.login-main > p {
  color: #76838f;
}
.login-title {
  margin: 0 0 20px;
  text-align: center;
  color: #409EFF;
  letter-spacing: 1px;
  font-size: 18px;
}
.login-submit {
  margin-top: 10px;
  width: 100%;
}
// .login-submit:focus, .login-submit:hover{
//   background-color: #52dad3;
//   border-color: #52dad3;
// }
.login-form {
  margin: 10px 0;
  .el-form-item__content {
    // width: 270px;
    width: 100%;
    display: flex;

    .svgIcon{
      color: #fff;
      background: #409EFF;
      height: 40px;
      width: 50px;
      text-align: center;
      line-height: 46px;
      border-radius: 3px 0 0 3px;

      .svg-icon{
        width: 1.4em;
        height: 1.3em;
      }
    }

    .el-input__inner{
      border-radius: 0 3px 3px 0;
      padding-left: 10px;
      font-size: 14px;
    }

    .el-form-item__error{
      line-height: 1.6em;
    }
  }
  .el-input--small .el-input__inner{
    height: 40px;
    line-height: 40px;
  }
  .el-input {
    input {
      text-indent: 5px;
      border-color: #dcdcdc;
      border-radius: 3px;
    }
    .el-input__prefix {
      i {
        padding: 0 5px;
        font-size: 16px !important;
      }
    }
  }
  .el-form-item {
    margin-bottom: 26px;
  }
  .el-form-item__error{
    padding-top: 0;
  }
}

@media (max-width: 768px)
{
  .login-container{
    flex-direction: column-reverse;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff
  }
  .logo img{
    width: 160px;
    height: 160px;
  }
  .login-border{
    padding: 0px 10px 10px;
    position: absolute;
    top: 10px;
    z-index: 0;
  }
  .login-title{
    margin-bottom: 5px;
  }
  .login-main{
    padding: 20px;
  }
}
</style>
