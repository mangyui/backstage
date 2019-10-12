import request from './request'
import qs from 'qs'
import md5 from 'js-md5'
import store from '../store'

const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'api' // api的base_url

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

export function login (datas) {
  return request({
    url: baseUrl + '/?service=App.User.Login',
    method: 'post',
    data: qs.stringify(addSign(datas))
  })
}

export function register (datas) {
  return request({
    url: baseUrl + '/?service=App.User.AddUser',
    method: 'post',
    data: qs.stringify(addSign(datas))
  })
}

export function UpdateUser (datas) {
  return request({
    url: baseUrl + '/?service=App.User.UpdateUser',
    method: 'post',
    data: qs.stringify(addSign(datas))
  })
}

export function ChangePassword (datas) {
  return request({
    url: baseUrl + '/?service=App.User.ChangePassword',
    method: 'post',
    data: qs.stringify(addSign(datas))
  })
}

export function getVCode (datas) {
  return request({
    url: baseUrl + '/?service=App.User.GetCode',
    method: 'post',
    data: qs.stringify(addSign(datas))
  })
}
