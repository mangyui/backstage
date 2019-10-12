import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Index'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      redirect: '/home/index',
      component: Layout,
      children: [
        {
          path: 'index',
          name: 'home',
          component: () => import('../views/home/Index'),
          meta: { title: '主页' }
        }
      ]
    },
    {
      path: '/post',
      component: Layout,
      redirect: '/post/analysis',
      children: [
        {
          path: 'analysis',
          name: 'analysis',
          component: () => import('../views/post/analysis/Index'),
          meta: { title: '阅读统计' }
        },
        {
          path: 'list',
          name: 'list',
          component: () => import('../views/post/list/Index'),
          meta: { title: '作品列表' }
        },
        {
          path: 'new',
          name: 'new',
          component: () => import('../views/post/new/Index'),
          meta: { title: '发布作品' }
        }
      ]
    },
    {
      path: '/account',
      component: Layout,
      redirect: '/account/my',
      children: [
        {
          path: 'my',
          name: 'my',
          component: () => import('../views/user/my/Index'),
          meta: { title: '我的主页' }
        },
        {
          path: 'settings',
          name: 'settings',
          component: () => import('../views/user/settings/Index'),
          meta: { title: '设置' }
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/Index'),
      meta: { title: '登录' }
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})

router.onError((error) => {
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed) {
    router.replace(targetPath)
  }
})

export default router
