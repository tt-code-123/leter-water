<template>
  <view class="bad-behavior">
    <view class="flex-tabs">
      <view v-for="(item, index) in tabList" :key="index" class="tab-item" :class="{ active: currentTab === index }"
        @tap="handleTabClick(index)">
        {{ item }}
      </view>
    </view>
    <scroll-view class="scroll-view" :scroll-y="true">
      <view class="empty-wrap">
        <text>暂无数据</text>
      </view>
    </scroll-view>
  </view>
</template>
<script lang="ts">
export default {
  name: 'BadBehavior'
}
</script>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

const tabList = reactive([
  '一般不良行为',
  '较重及以上不良行为'
])
const currentTab = ref(0)
const handleTabClick = (index: number) => {
  currentTab.value = index
}
</script>
<style lang="scss" scoped>
.bad-behavior {
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 24rpx;
  box-sizing: border-box;
}

.flex-tabs {
  display: flex;
  justify-content: space-between;
  padding: 12rpx 60rpx 24rpx;

  .tab-item {
    height: 36rpx;
    line-height: 36rpx;
    padding: 8rpx 20rpx;
    font-size: 28rpx;
    color: #333;
    background: #f5f5f5;
    border-radius: 16rpx;
    text-align: center;
    font-size: 24rpx;
    border: 2rpx solid #E6E6E6;

    &.active {
      color: #1677FF;
      background: #E6F4FF;
      border-color: #1677FF;
    }
  }
}

.scroll-view {
  flex: 1;
  height: 0;
  box-sizing: border-box;
}

.empty-wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
}
</style>