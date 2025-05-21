<template>
  <view class="history">
    <up-tabs :list="tabList" :lineHeight="2" :activeStyle="{
      color: '#1677ff'
    }" class="tabs-list" v-model:current="tabIndex"></up-tabs>
    <search-box placeholder="请输入关键字" @search="handleSearch"></search-box>
    <scroll-list class="history-list" :styles="{
      height: '100%',
      backgroundColor: '#fff'
    }" :params="{
      tab: tabIndex,
      keywords: searchKeyword
    }" :fetchData="fetchData" @fetchEnd="handleFetchEnd"></scroll-list>
  </view>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

import ScrollList from '@/components/scroll-list/index.vue'
import SearchBox from '@/components/search-box/index.vue'

const tabIndex = ref(0);
const searchKeyword = ref('')
const tabList = reactive([
  { name: '从业单位' },
  { name: '从业人员' },
]);

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

      ]
    }
  })
}

function handleFetchEnd() {
  uni.hideLoading()
}

</script>
<style scoped lang="scss">
.history {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.tabs-list {
  width: 100vw;
  background-color: #fff;
  border-bottom: 2rpx solid #f0f0f0;
}

.history-list {
  flex: 1;
}
</style>