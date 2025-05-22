<template>
  <view class="history">
    <custom-tabs :tabs="tabList" class="tabs-list" v-model="tabIndex"></custom-tabs>
    <search-box placeholder="请输入关键字" @search="handleSearch"></search-box>
    <scroll-list class="history-list" :styles="{
      height: '100%',
      backgroundColor: '#fff'
    }" :params="{
      tab: tabIndex,
      keywords: searchKeyword
    }" :request="fetchData"></scroll-list>
  </view>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

import ScrollList from '@/components/scroll-list/index.vue'
import SearchBox from '@/components/search-box/index.vue'
import CustomTabs from '@/components/custom-tabs/index.vue';

const tabIndex = ref(0);
const searchKeyword = ref('')
const tabList = reactive([
  { label: '从业单位', value: '0' },
  { label: '从业人员', value: '1' },
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
      content: [

      ],
      page: {
        size: 0,
        total: 0
      }
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