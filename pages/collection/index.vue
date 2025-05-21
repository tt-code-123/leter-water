<template>
  <view class="collection">
    <up-tabs :list="tabList" :lineHeight="2" :activeStyle="{
      color: '#1677ff'
    }" class="tabs-list" v-model:current="tabIndex"></up-tabs>
    <scroll-list class="collection-list" emptyDesc="暂无收藏数据" :styles="{
      height: '100%',
      backgroundColor: '#fff'
    }" :params="{
      tab: tabIndex
    }" :fetchData="fetchData"></scroll-list>
  </view>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

import ScrollList from '@/components/scroll-list/index.vue'

const tabIndex = ref(0);
const tabList = reactive([
  { name: '从业单位' },
  { name: '从业人员' },
]);

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
</script>
<style scoped lang="scss">
.collection {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.tabs-list {
  width: 100vw;
  background-color: #fff;
  border-bottom: 2rpx solid #f0f0f0;
}

.collection-list {
  flex: 1;
}
</style>