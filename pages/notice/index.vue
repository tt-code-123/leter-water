<template>
  <view>
    <search-box placeholder="请输入关键字" @search="handleSearch"></search-box>
    <scroll-list :containerHeight="containerHeight" :searchParams="{
      keywords: searchKeyword
    }" :fetchData="fetchData" @fetchEnd="handleFetchEnd">
      <template #default="{ list }">
        <common-list-item v-for="(item, index) in list" :key="item.id" :title="item.title" :itemIndex="index"
          :itemOptions="[
            {
              label: '发布时间',
              value: item.publishTime
            },
            {
              label: '文章来源',
              value: item.origin
            },
            {
              label: '发布人',
              value: item.publisher
            },
          ]"></common-list-item>
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
import CommonListItem from '@/components/common-list-item/index.vue'
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
          title: '关于水利水电工程施工资质备案信息',
          publishTime: '2025-02-06',
          origin: '水利部',
          publisher: '水利部'
        },
        {
          id: 2,
          title: '水利部水电工程施工资质备案信息第一批水利工程水利工程水利工程水利工程水利工程',
          publishTime: '2025-02-05',
          origin: '水利工程建设司',
          publisher: '水利工程建设司'
        },
        {
          id: 3,
          title: '关于水利水电工程施工资质备案信息',
          publishTime: '2025-02-16',
          origin: '水利部',
          publisher: '水利部'
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