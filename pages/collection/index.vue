<template>
  <view class="collection">
    <custom-tabs :tabs="tabList" class="tabs-list" v-model="tabIndex"></custom-tabs>
    <scroll-list class="collection-list" emptyDescription="暂无收藏数据" :styles="{
      height: '100%',
      backgroundColor: '#fff'
    }" :params="{
      tab: tabIndex
    }" :request="fetchData"></scroll-list>
  </view>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

import ScrollList from '@/components/scroll-list/index.vue'
import CustomTabs from '@/components/custom-tabs/index.vue';

const tabIndex = ref(0);
const tabList = reactive([
  { label: '从业单位', value: '0' },
  { label: '从业人员', value: '1' },
]);

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  }).then(() => {
    return {
      page: {
        size: 0,
        total: 0
      },
      content: []
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