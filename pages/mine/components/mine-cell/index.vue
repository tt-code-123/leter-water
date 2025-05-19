<template>
  <view class="mine-cell">
    <view class="mine-cell-left">
      <slot name="icon"></slot>
      <text class="mine-cell-title">{{ title }}</text>
    </view>
    <uni-icons type="right" size="24" color="#cacaca" v-if="showRightArrow" />
  </view>
</template>
<script lang="ts">
export default {
  name: 'MineCell'
}
</script>
<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  showRightArrow: {
    type: Boolean,
    default: true
  }
})
const slot = defineSlots<{
  icon: () => any
}>()
</script>
<style lang="scss" scoped>
.mine-cell {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  height: 108rpx;
  padding: 0 24rpx;
}

.mine-cell-left {
  display: flex;
  align-items: center;
  gap: 20rpx;
}

.mine-cell-title {
  font-size: 28rpx;
}
</style>