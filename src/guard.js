import router from './router'
import store from './store'
// import { message } from 'ant-design-vue'

// const whiteList = [
//   '',
//   'home', // 主页
//   'details',
//   'list'
// ] // 不重定向白名单

// router.beforeEach((to, from, next) => {
//   if (!store.getters.user.Id) {
//     if (whiteList.indexOf(to.name) !== -1) {
//       next()
//     } else {
//       next('/')
//       message.info('请先登录！')
//     }
//   } else {
//     if (!store.getters.token) {
//       location.reload()
//     }
//     next()
//   }
// })

router.afterEach((to, from, next) => {
  setTimeout(() => {
    store.dispatch('LeftNone')
    window.scrollTo(0, 0)
    document.title = to.meta.title
  }, 0)
})
