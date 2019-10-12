<template>
  <div class="my-bg-white">
    <h3>平台公告</h3>
    <ul>
      <li class="flex-rl" v-for="(item, index) in commentList" :key="index">
        <div class="comment-left">【{{item.type}}】{{item.title}}
          <span v-show="item.isTop==1" class="tag tag-blue">置顶</span>
          <span v-show="item.isHot==1" class="tag tag-red">HOT</span>
          <span v-show="item.isNew==1" class="tag tag-yellow">NEW</span>
        </div>
        <p class="comment-right">{{item.date}}</p>
      </li>
    </ul>
    <br />
    <div class="my-right">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="getForm.page"
        :page-size="getForm.number"
        layout="prev, pager, next, jumper"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      commentList: [],
      getForm: {
        number: 10,
        page: 1
      }
    }
  },
  methods: {
    handleSizeChange () {
    },
    handleCurrentChange (page) {
      this.getComment()
      // console.log(page)
      this.getForm.page = page
    },
    getComment () {
      this.commentList = this.createComment(this.getForm.number)
    },
    createComment (number) {
      let types = ['内容分类', '活动入口已开启', '爆文创作挑战开启', '微淘达人训练营第3期']
      let titles = ['6月爆文红榜美妆篇 ，五步掌握爆款技巧', '2018造物节-达人图文内容招稿说明', 'L1&L2等级达人看过来，福利继续喽！', '获得更多曝光量！', '']
      let list = []
      for (let i = 0; i < number; i++) {
        let item = {
          type: types[Math.floor(Math.random() * types.length)],
          title: titles[Math.floor(Math.random() * titles.length)],
          isTop: Math.floor(Math.random() * 2),
          isHot: Math.floor(Math.random() * 2),
          isNew: Math.floor(Math.random() * 2),
          date: this.addZero(Math.floor(Math.random() * 13 + 1)) + '-' + this.addZero(Math.floor(Math.random() * 28 + 1)) + ' ' + this.addZero(Math.floor(Math.random() * 24 + 1)) + ':' + this.addZero(Math.floor(Math.random() * 60 + 1))
        }
        list.push(item)
      }
      return list
    },
    addZero (num, len) {
      let length = len || 2
      return (Array(length).join('0') + num).slice(-length)
    }
  },
  created () {
    this.getComment()
  }
}
</script>

<style lang="less" scoped>
ul{
  li{
    padding: 15px 0;
    border-bottom: 1px solid #f9f9f9;
    cursor: pointer;
    &:hover{
      background: rgb(236, 245, 255);
    }
    .comment-left{
      color: #444;
      margin-right: 5px;
      .tag{
        margin: 0 3px;
        padding: 1px 6px;
        font-size: 11px;
        border-radius: 10px;
      }
      .tag-blue{
        color: #5e83fb;
        background-color: #eff6ff;
      }
      .tag-red{
        color: #ee706d;
        background-color: #ffe8e8;
      }
      .tag-yellow{
        color: #f7da47;
        background-color: #fff4e2;
      }
    }
    .comment-right{
      color: #999;
      font-size: 13px;
      text-align: right;
    }
  }
}
</style>
