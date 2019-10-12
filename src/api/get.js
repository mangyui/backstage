import request from './request'
import Vue from 'vue'

const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'api' // api的base_url

const toGet = {
  // 获取所有分类
  getCategory (datas) {
    return request({
      url: baseUrl + '/?service=App.Category.GetAll',
      method: 'get',
      data: datas
    })
  }
}

Vue.prototype.$toGet = toGet
