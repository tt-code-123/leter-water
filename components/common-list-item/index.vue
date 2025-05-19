<template>
  <view class="company-list-item">
    <view class="item">
      <text class="item-title common-left">{{ `${itemIndex + 1}.${title}` }}</text>
      <uni-icons v-if="showArrow" type="right" color="#cacaca" size="18"></uni-icons>
    </view>
    <template v-for="(item, index) in itemOptions" :key="index">
      <view class="item">
        <text class="item-key common-left">{{ item.label }}</text>
        <text class="item-value">{{ item.value }}</text>
      </view>
    </template>
  </view>
</template>

<script lang="ts">
export default {
  name: 'CommonListItem'
}
</script>

<script setup lang="ts">
const props = defineProps({
  itemIndex: {
    type: Number,
    required: true
  },
  title: String,
  itemOptions: Array<{
    label: string
    value: string
  }>,
  showArrow: {
    type: Boolean,
    default: true
  }
})

</script>

<style lang="scss" scoped>
.company-list-item {
  padding: 32rpx 24rpx;
  background-color: #fff;
  border-radius: 8rpx;
  box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.05);
  margin-bottom: 20rpx;
}

.item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16rpx;

  &:last-child {
    margin-bottom: 0;
  }
}

.common-left {
  max-width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.item-title {
  color: #69aaf4;
  font-size: 32rpx;
}

.item-key {
  color: #bebebe;
  font-size: 28rpx;
  flex-shrink: 0;
}

.item-value {
  color: #212121;
  font-size: 28rpx;
  flex: 1;
  text-align: right;
  margin-left: 36rpx;
  word-break: break-all;
}
</style>