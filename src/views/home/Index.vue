<template>
  <div>
    <div style="flex-wrap: wrap;" class="flex-rl">
      <UserBox />
      <Todo />
    </div>
    <DataBox />
    <NewPage />
  </div>
</template>

<script>
import UserBox from './UserBox'
import Todo from './Todo'
import DataBox from './DataBox'
import NewPage from './NewPage'

export default {
  name: 'home',
  components: {
    UserBox,
    Todo,
    DataBox,
    NewPage
  },
  data () {
    return {
      homeTop: 0
    }
  },
  activated () {
    setTimeout(() => {
      document.documentElement.scrollTop = this.homeTop || 0
      document.body.scrollTop = this.homeTop || 0
    }, 0)
  },
  beforeRouteLeave (to, from, next) {
    this.homeTop = document.documentElement.scrollTop > 0 ? document.documentElement.scrollTop : document.body.scrollTop
    next()
  },
  methods: {
    toAbout () {

    }
  },
  mounted () {

  },
  created () {

  }
}
</script>

<style lang="less" scoped>

</style>
