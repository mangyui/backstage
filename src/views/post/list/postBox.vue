<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="12" :md="12" :lg="8" v-for="(item,index) in postList" :key="index">
        <div class="post-item flex-rl">
          <img class="post-img" :src="item.img">
          <div class="post-content">
            <p class="post-title">{{item.title}}</p>
            <div class="post-desc">文章描述： <p> {{item.desc}}</p></div>
            <div class="post-tea">创作指导： <a href="#"> {{item.tea}}</a></div>
          </div>
           <el-button size="small" @click="$router.push('/post/new')">立即创作</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: ['postType'],
  data () {
    return {
      postList: [],
      number: Math.floor(Math.random() * 8 + 2)
    }
  },
  methods: {
    getPost () {
      this.postList = this.createPost(this.number)
    },
    createPost (number) {
      let titles = ['流行指南', '美发心得', '穿搭日记', '场景搭配']
      let list = []
      for (let i = 0; i < number; i++) {
        let item = {
          img: 'https://img.alicdn.com/tfs/TB1sbkkXmBYBeNjy0FeXXbnmFXa-280-498.png',
          title: this.postType + '-' + titles[Math.floor(Math.random() * titles.length)],
          desc: '分享日常的真人穿搭或专业的教程，对时尚有自己的理解，能够给消费者提供时尚搭配心得',
          tea: '好的长文章应该怎么写？'
        }
        list.push(item)
      }
      return list
    }
  },
  created () {
    this.getPost()
  }
}
</script>

<style lang="less" scoped>
.post-item{
  position: relative;
  margin: 10px 0;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #f3f3f3;
  transition: 0.28s;
  &:hover{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1)
  }
  .post-img{
    width: 160px!important;
    height: 300px;
    max-width: 50%;
  }
  .post-content{
    background: rgb(236, 245, 255);
    padding: 0 15px 40px;
  }
  .post-title{
    margin: 20px 0;
    font-size: 16px;
    color: #444;
  }
  .post-desc{
    font-size: 13px;
    color: #555;
    line-height: 1.7em;
    margin-bottom: 15px;
    p{
      font-size: 12px;
      color: #777;
      height: 66px;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
  .post-tea{
    font-size: 13px;
    color: #555;
    line-height: 1.7em;
    a{
      color: #409EFF;
      font-size: 12px;
    }
  }
  .el-button{
    position: absolute;
    right: 15px;
    bottom: 15px;
  }
}
</style>
