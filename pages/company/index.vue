<template>
  <view>
    <search-box placeholder="请输入关键字" @search="handleSearch"></search-box>
    <scroll-list className="scroll-list" :containerHeight="containerHeight" :searchParams="{
      keywords: searchKeyword
    }" :fetchData="fetchData" @fetchEnd="handleFetchEnd">
      <template #default="{ list }">
        <view v-for="item in list" :key="item.id" class="list-item">
          {{ item.title }}
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
  uni.showLoading({
    title: '数据查询中...',
    mask: true
  })
  searchKeyword.value = searchText
}

function handleFetchEnd() {
  uni.hideLoading()
}
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  }).then(() => {
    return {
      data: [
        {
          id: 1,
          title: '标题1',
          content: '内容1'
        },
        {
          id: 2,
          title: '标题2',
          content: '内容2'
        },
        {
          id: 3,
          title: '标题3',
          content: '内容3'
        }
      ]
    }
  })
}

const containerHeight = computed(() => {
  const windowHeight = getWindowHeight()
  return windowHeight - rpxToPx(294) + 'px'
})

</script>
<style scoped></style>