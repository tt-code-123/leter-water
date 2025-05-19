<template>
  <view class="mine">
    <view class="mine-header">
      <up-avatar src="" :size="48"></up-avatar>
      <text class="mine-header-name">微信用户</text>
    </view>
    <view class="mine-list">
      <mine-cell v-for="(item, index) in cellList" :key="index" :title="item.title" class="mine-list-item">
        <template #icon>
          <up-icon :name="item.icon" size="24" :color="item.iconColor" />
        </template>
      </mine-cell>
    </view>
  </view>
</template>
<script setup lang="ts">
import { reactive } from 'vue';
import MineCell from './components/mine-cell/index.vue'

const cellList = reactive([
  {
    title: '收藏关注',
    icon: 'star',
    iconColor: 'orange'
  },
  {
    title: '历史浏览记录',
    icon: 'clock',
    iconColor: '#55aaff'
  },
  {
    title: '意见反馈',
    icon: 'clock',
    iconColor: '#55aaff'
  },
])

</script>
<style lang="scss" scoped>
.mine {
  background-color: #f0f0f0;
  height: 100vh;
}

.mine-header {
  background-color: #5b9fea;
  height: 240rpx;
  display: flex;
  align-items: center;
  padding-left: 32rpx;
}

.mine-header-name {
  color: #fff;
  margin-left: 32rpx;
  font-size: 36rpx;
}

.mine-list {
  display: flex;
  flex-direction: column;
}

.mine-list-item {
  margin-top: 16rpx;
}
</style>