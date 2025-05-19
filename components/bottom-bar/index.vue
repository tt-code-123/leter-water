<template>
  <view class="bottom-bar">
    <template v-for="(item) in options" :key="item.value">
      <view class="bottom-item" @click="handleClick(item.value)">
        <uni-icons :type="item.icon" size="30" color="rgba(44, 53, 47, 0.4)"></uni-icons>
        <text class="item-text">{{ item.label }}</text>
      </view>
    </template>
  </view>
</template>
<script lang="ts">
export default {
  name: 'BottomBar'
}
</script>
<script setup lang="ts">
import { reactive } from 'vue'
const options = reactive([
  {
    value: 'index',
    label: '首页',
    icon: 'home-filled'
  },
  {
    value: 'mine',
    label: '我的',
    icon: 'person-filled'
  },
])
function handleClick(type: string) {
  // 处理点击事件,根据type跳转到不同页面
  switch (type) {
    case 'index':
      uni.navigateBack()
      return
    case 'mine':
      uni.navigateTo({
        url: '/pages/mine/index'
      })
      return
    default:
      break;
  }
}
</script>
<style lang="scss" scoped>
.bottom-bar {
  display: flex;
  border-top: 2rpx solid #eee;
  height: 100rpx;
  padding: 16rpx 0;
}

.bottom-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.item-text {
  color: rgba(44, 53, 47, 0.4);
}
</style>