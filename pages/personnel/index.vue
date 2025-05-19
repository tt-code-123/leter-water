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
              label: '身份证号',
              value: item.code
            },
            {
              label: '证书专业',
              value: item.Professional
            },
            {
              label: '注册号(执行印号)',
              value: item.registrationNumber
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
          title: '张三',
          code: '156456456132132',
          Professional: '量测',
          registrationNumber: 'JCY1321321'
        },
        {
          id: 2,
          title: '李四',
          code: '5132132132',
          Professional: '量测',
          registrationNumber: 'JCY1321321'
        },
        {
          id: 3,
          title: '王五',
          code: '121324564564',
          Professional: '量测',
          registrationNumber: 'JCY1321321'
        }
      ]
    }
  })
}

function handleFetchEnd() {
  uni.hideLoading()
}



const containerHeight = computed(() => {
  const windowHeight = getWindowHeight()
  return windowHeight - rpxToPx(294) + 'px'
})

</script>
<style scoped></style>