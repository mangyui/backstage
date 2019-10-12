<template>
  <div>
    <div v-show="isLeft" class="toShow nav-mask" @click="$store.dispatch('LeftClick')"></div>
    <nav :style="isLeft?'left: 0':''" class="my-bg-white">
      <el-menu
        :default-openeds="['2', '3']"
        :default-active="$route.name">
        <router-link to="/home/index">
          <el-menu-item index="home">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
          </el-menu-item>
        </router-link>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-edit-outline"></i>
            <span>作品</span>
          </template>
          <router-link to="/post/analysis">
            <el-menu-item index="analysis">阅读统计</el-menu-item>
          </router-link>
          <router-link to="/post/list">
            <el-menu-item index="list">作品列表</el-menu-item>
          </router-link>
          <router-link to="/post/new">
            <el-menu-item index="new">发布作品</el-menu-item>
          </router-link>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-user-solid"></i>
            <span>账号</span>
          </template>
          <router-link to="/account/my">
            <el-menu-item index="my">我的主页</el-menu-item>
          </router-link>
          <router-link to="/account/settings">
            <el-menu-item index="settings">设置</el-menu-item>
          </router-link>
        </el-submenu>
      </el-menu>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['isLeft'])
  },
  name: 'leftNav',
  mounted () {
  }
}
</script>

<style lang="less" scoped>
nav{
  width: 240px;
  padding: 20px 0 50px;
  margin-right: 20px;
  .el-menu{
    border-right: 0;
  }
  .el-menu-item.is-active{
    background: #f9f9f9;
    border-left: 3px solid #409EFF;
  }
}
.nav-mask{
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 95;

}
@media (max-width: 768px){
  nav{
    position: fixed;
    top: 60px;
    left: -250px;
    height: 100%;
    z-index: 99;
    box-shadow: 1px 0px 3px rgba(0, 0, 0, 0.1);
    border-radius: 0;
    transition: 0.28s;
  }
}
</style>
