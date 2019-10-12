<template>
  <div style="padding: 40px 30px 0px;" class="my-bg-white">
    <el-row :gutter="30">
      <el-col :xs="24" :sm="12" :md="8">
        <h3>人群特征</h3>
        <VeRing height="320px" :data="PopCharas" :settings="chartSetting1"/>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <h3>曝光量</h3>
        <VeHistogram  height="320px" :data="Exposure" :colors="myColors"/>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8">
        <h3>访问量</h3>
        <VeLine height="320px" :data="Access" :colors="myColors"/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import VeRing from 'v-charts/lib/ring'
import VeHistogram from 'v-charts/lib/histogram'
import VeLine from 'v-charts/lib/line'

export default {
  components: {
    VeRing,
    VeHistogram,
    VeLine
  },
  data () {
    this.chartSetting1 = {
      radius: [50, 80],
      offsetY: 150
    }
    this.myColors = ['#5ab1ef', '#19d4ae', '#fa6e86', '#ffb980', '#0067a6', '#c4b4e4', '#d87a80', '#9cbbff', '#d9d0c7', '#87a997', '#d49ea2', '#5b4947', '#7ba3a8']
    return {
      PopCharas: {
        columns: ['年龄段', '用户量'],
        rows: [
          { '年龄段': '16~20岁', '用户量': 250 },
          { '年龄段': '20~24岁', '用户量': 500 },
          { '年龄段': '25~28岁', '用户量': 250 }
        ]
      },
      Exposure: {
        columns: ['年份', 'exposure'],
        rows: [
          { '年份': '2014', 'exposure': 99 },
          { '年份': '2015', 'exposure': 82 },
          { '年份': '2016', 'exposure': 61 },
          { '年份': '2017', 'exposure': 55 },
          { '年份': '2018', 'exposure': 48 }
        ]
      },
      Access: {
        columns: ['日期', 'total', 'profit'],
        rows: [
          { '日期': '03', 'total': 133, 'profit': 60 },
          { '日期': '04', 'total': 350, 'profit': 180 },
          { '日期': '05', 'total': 293, 'profit': 160 },
          { '日期': '06', 'total': 173, 'profit': 80 },
          { '日期': '07', 'total': 372, 'profit': 260 },
          { '日期': '08', 'total': 493, 'profit': 360 }
        ]
      }
    }
  }
}
</script>
