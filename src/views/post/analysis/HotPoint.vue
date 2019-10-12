<template>
  <div class="my-bg-white">
    <h6>粉丝热门关注点</h6>
    <p class="block-tip">每日计算分析近期粉丝行为，从而得出专注领域下粉丝热点综合指数排行</p>
    <ul class="point-list">
      <li v-for="(item,index) in hotList" :key="index">
        <a class="flex-rl" href="#">
          <div class="point-left">
            <span class="point-index">{{index+1+(page-1)*number}}</span>
            <span class="point-title my-one-line">{{item.title}}</span>
          </div>
          <div class="point-right">
            <span style="margin-right: 15px;">{{maxPec-index*3}}%</span>
            <span>{{maxNumber-index*150}}</span>
            <span>解读</span>
          </div>
        </a>
      </li>
    </ul>
    <br />
    <div class="my-right">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-size="number"
        layout="prev, pager, next, jumper"
        :total="300">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      maxNumber: 9000,
      maxPec: 100,
      number: 30,
      page: 1,
      hotList: []
    }
  },
  methods: {
    handleSizeChange () {
    },
    handleCurrentChange (page) {
      this.getPoints()
      this.page = page
    },
    getPoints () {
      this.hotList = this.createPoint(this.number)
    },
    createPoint (number) {
      let titles = ['七夕节', '连衣裙', '情人节礼物', '秋季新款女外套', '男人装', '不规则卫衣女']
      let list = []
      for (let i = 0; i < number; i++) {
        let item = {
          title: titles[Math.floor(Math.random() * titles.length)]
        }
        list.push(item)
      }
      return list
    }
  },
  created () {
    this.getPoints()
  }
}
</script>
