<template>
  <div class="my-bg-white">
    <h6>粉丝最新关注点</h6>
    <p class="block-tip">每日计算分析产出粉丝近期最新关注点</p>
    <ul class="point-list">
      <li v-for="(item,index) in newList" :key="index">
        <a class="flex-rl" href="#">
          <div class="point-left">
            <span class="point-index">{{index+1}}</span>
            <span class="my-one-line">{{item.title}}</span>
          </div>
          <div class="point-right">
            <span>{{maxNumber-index*150}}</span>
            <span>解读</span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      maxNumber: 2250,
      number: 15,
      newList: []
    }
  },
  methods: {
    getPoints () {
      this.newList = this.createPoint(this.number)
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
