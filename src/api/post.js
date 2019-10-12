import request from './request'
import Vue from 'vue'
import qs from 'qs'
import md5 from 'js-md5'
import store from '../store'

const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'api' // api的base_url
// export const payUrl = process.env.NODE_ENV === 'production' ? 'http://47.106.130.141' : 'http://122.237.106.250:8080'

// eslint-disable-next-line
function addSign (data) {
  let date = new Date(+new Date() + 8 * 3600 * 1000).toISOString().replace(/T/g, '').replace(/\.[\d]{3}Z/, '')
  data.timestamp = date
  let signstr = md5('goodtimp' + date)
  data.sign = signstr
  if (store.getters.token) { // 加入token
    data.token = store.getters.token
  }
  return data
}

const toPost = {
  // 获取商品列表
  getRangeByCategory (datas) {
    return request({
      url: baseUrl + '/?service=App.Commodity.GetRangeByCategory',
      method: 'post',
      data: qs.stringify(addSign(datas))
    })
  }
}

Vue.prototype.$toPost = toPost
