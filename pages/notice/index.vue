<template>
  <view>
    <search-box placeholder="请输入关键字"></search-box>
    <scroll-list :containerHeight="containerHeight" :fetchData="fetchData"></scroll-list>
    <bottom-bar></bottom-bar>
  </view>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import BottomBar from '@/components/bottom-bar/index.vue'
import SearchBox from '@/components/search-box/index.vue'
import ScrollList from '@/components/scroll-list/index.vue'
import { rpxToPx, getWindowHeight } from '@/utils'

function fetchData() {
  return {
    data: []
  }
}

const containerHeight = computed(() => {
  const windowHeight = getWindowHeight()
  return windowHeight - rpxToPx(262) + 'px'
})

</script>
<style scoped></style>