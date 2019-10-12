<template>
  <header class="my-bg-white flex-rl">
    <div class="toShow btn-nav" @click="toLeft"><i :class="isLeft?'el-icon-s-fold':'el-icon-s-unfold'"></i></div>
    <div class="header-logo">LOGO</div>
    <div class="flex-rl">
      <ul class="disNone flex-rl">
        <li>
          <router-link to="/home/index">
            <i class="el-icon-s-home"></i>
            首页
          </router-link>
        </li>
        <li>
          <a href="#">
            <i class="el-icon-message"></i>
            反馈
          </a>
        </li>
        <li>
          <a href="#">
            <i class="el-icon-question"></i>
            帮助
          </a>
        </li>
      </ul>
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="require('@/assets/images/newAvatar.jpg')">
          盲鱼
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <router-link to="/account/my">
            <el-dropdown-item icon="el-icon-user"> 我的主页</el-dropdown-item>
          </router-link>
          <router-link class="toShow" to="/home/index">
            <el-dropdown-item icon="el-icon-s-home"> 首页</el-dropdown-item>
          </router-link>
          <a class="toShow" href="#">
            <el-dropdown-item icon="el-icon-message"> 反馈</el-dropdown-item>
          </a>
          <a class="toShow" href="#">
            <el-dropdown-item icon="el-icon-question"> 帮助</el-dropdown-item>
          </a>
          <router-link to="/account/settings">
            <el-dropdown-item icon="el-icon-setting"> 设置</el-dropdown-item>
          </router-link>
          <el-dropdown-item icon="el-icon-position" @click.native="toLogout"> 退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLeft'])
  },
  methods: {
    toLogout () {
      this.$router.push('/login')
    },
    toLeft () {
      this.$store.dispatch('LeftClick')
    }
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
header{
  height: 45px;
  padding: 10px 20px;
  line-height: 45px;
  border-radius: 0;
  margin-bottom: 0;
  .header-logo{
    font-size: 30px;
    font-weight: bold;
    color: #409eff;
  }
  ul{
    list-style:none;
    a{
      color: #666;
      padding: 0px 15px;
      margin-right: 5px;
      vertical-align: middle;
      display: flex;
      align-items: center;
      i{
        font-size: 18px;
        margin-right: 8px;
      }
      &:hover{
        color: #409eff;
      }
    }
  }
  .el-dropdown{
    margin-left: 20px;
    .el-dropdown-link{
      display: flex;
      align-items: center;
      cursor: pointer;
      img{
        width: 42px;
        height: 42px;
        border-radius: 3px;
        margin-right: 10px;
      }
    }

  }
}
.btn-nav{
  font-size: 28px;
  color: #666;
}
@media (max-width: 768px){
  header{
    position: fixed;
    top: 0px;
    left: 0;
    width: -webkit-fill-available;
    z-index: 100;
    box-shadow: 0 0px 3px rgba(0, 0, 0, 0.1);
  }
}
</style>
