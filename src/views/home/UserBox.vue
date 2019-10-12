<template>
  <div style="flex-grow: 0.7;flex-wrap: wrap;" class="userBox-warp my-bg-white flex-rl">
    <div class="my-flex" style="margin-bottom:20px">
      <div class="user-img">
        <img class="my-avatar" :src="require('@/assets/images/newAvatar.jpg')">
        <img class="img-level" :src="require('@/assets/images/lov.png')">
      </div>
      <div class="user-info">
        <h3>{{user.name}} <span>官方账号</span></h3>
        <p>绑定机构：{{user.team}}</p>
        <p>认证信息：{{user.info}}</p>
      </div>
    </div>
    <div>
      <ul class="level-list my-flex">
        <li v-for="(item, index) in 7" :key="index">
          <span :class="user.level==index?'active':''">L{{index}}</span><p v-show="user.level==index">当前等级</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        name: 'MANGYU',
        team: '随意点团队',
        info: '这个人很有意思',
        level: 5
      }
    }
  }
}
</script>

<style lang="less" scoped>
@media (min-width: 769px){
  .flex-rl{
    margin-right: 20px;
  }
}
.flex-rl{
  align-items: center;
  padding: 30px 20px;
}
.user-img{
  position: relative;
  margin-right: 20px;
  .my-avatar{
    width: 70px;
    height: 70px;
    border-radius: 1px;
  }
  .img-level{
    position: absolute;
    bottom: -2px;
    right: -5px;
    width: 25px;
  }
}
.user-info{
  h3{
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 5px;
    span{
      font-size: 12px;
      color: #f1c826;
      background: #fff9e0;
      padding: 1px 5px;
    }
  }
  p{
    color: #aaa;
    font-size: 12px;
    line-height: 1.6em;
  }
}
.level-list{
  position: relative;
  margin-bottom: 10px;
  &::before{
    content: '';
    display: inline-block;
    width: 100%;
    height: 2px;
    position: absolute;
    top: 9px;
    background: #f1c826;
  }
  li{
    text-align: center;
    position: relative;
    font-size: 13px;
    &:not(:nth-child(1)){
      span{
        margin-left: 15px;
      }
    }
    span{
      color: #666;
      padding: 2px 6px;
      border-radius: 20px;
      border: 1px solid #f1c826;
      background: #fefefe;
      &.active{
        background: #f1c826;
        color: #fefefe;
      }
    }
    p{
      position: absolute;
      bottom: -26px;
      white-space: nowrap;
      color: #f1c826;
      margin-top: 8px;
    }
  }
}
</style>
