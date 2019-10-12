<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {

    }
  },
  mounted () {
    this.$store.dispatch('Resize', document.body.clientWidth)
    window.addEventListener('resize', () => {
      return (() => {
        this.$store.dispatch('Resize', document.body.clientWidth)
      })()
    })
  }
}
</script>

<style lang="less">

</style>
