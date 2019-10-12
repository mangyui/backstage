import axios from 'axios'
import { message } from 'element-ui'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
// 创建axios实例
const service = axios.create({
  timeout: 20000 // 请求超时时间
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.ret !== 200) {
      if (res.ret === 401) { // ret中的401是token错误
        message.warning('登录信息已过期，请重新登录')
        setTimeout(() => {
          localStorage.removeItem('user')
          location.reload()
        }, 2000)
      } else {
        message.warning('请求错误')
      }
      return Promise.reject(res.msg)
    } else {
      return response.data.data
    }
  },
  error => {
    message.error('网络错误')
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
