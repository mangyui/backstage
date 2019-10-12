<template>
  <div class="my-wrap">
    <topHeader />
    <section>
      <div class="flex-rl padd20">
        <leftNav />
        <div style="flex: auto;width:100px;">
          <transition name="fade">
            <keep-alive exclude="detail">
              <router-view :key="$route.fullPath"></router-view>
            </keep-alive>
          </transition>
        </div>
      </div>
    </section>
    <bottomFooter />
  </div>
</template>

<script>
import topHeader from './top-header.vue'
import leftNav from './left-nav.vue'
import bottomFooter from './bottom-footer.vue'

export default {
  components: {
    topHeader,
    leftNav,
    bottomFooter
  }
}
</script>
