<template>
  <div class="home">
    <swiper></swiper>
    <tab></tab>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Swiper from "@/components/home/swiper.vue"
import Tab from "@/components/home/tab.vue"

export default {
  name: 'Home',
  components: {
    Swiper,
    Tab
  }
}
</script>
