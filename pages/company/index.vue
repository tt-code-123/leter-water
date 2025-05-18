<template>
  <view>
    <search-box placeholder="请输入关键字" @search="handleSearch"></search-box>
    <scroll-list :containerHeight="containerHeight" :searchParams="{
      keywords: searchKeyword
    }" :fetchData="fetchData">
      <template #default="{ list }">
        <view v-for="item in list" :key="item.id" class="list-item">
          {{ item.name }}
        </view>
      </template>
    </scroll-list>
    <bottom-bar></bottom-bar>
  </view>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import BottomBar from '@/components/bottom-bar/index.vue'
import SearchBox from '@/components/search-box/index.vue'
import ScrollList from '@/components/scroll-list/index.vue'
import { rpxToPx, getWindowHeight } from '@/utils'

const searchKeyword = ref('')

function handleSearch(searchText: string) {
  searchKeyword.value = searchText
}
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