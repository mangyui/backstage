<template>
  <div>
    <Charts />
    <NewPoint />
    <HotPoint />
  </div>
</template>

<script>
import Charts from './Charts'
import NewPoint from './NewPoint'
import HotPoint from './HotPoint'

export default {
  components: {
    Charts,
    NewPoint,
    HotPoint
  },
  mounted () {
  }
}
</script>
