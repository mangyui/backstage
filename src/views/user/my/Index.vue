<template>
  <div>
    <MyTop />
    <MyCenter />
    <MyBottom />
  </div>
</template>

<script>
import MyTop from './MyTop'
import MyCenter from './MyCenter'
import MyBottom from './MyBottom'

export default {
  components: {
    MyTop,
    MyCenter,
    MyBottom
  },
  mounted () {
  }
}
</script>
