<template>
  <Scroll-view class="change-record" :scroll-y="true">
    <view class="empty-wrap">
      <text>暂无数据</text>
    </view>
  </Scroll-view>
</template>
<script lang="ts">
export default {
  name: 'ChangeRecord'
}
</script>
<script lang="ts" setup>

</script>
<style lang="scss" scoped>
.change-record {
  box-sizing: border-box;
  background-color: #fff;
  height: 100%;
  padding: 24rpx;
}

.empty-wrap {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24rpx;
}
</style>