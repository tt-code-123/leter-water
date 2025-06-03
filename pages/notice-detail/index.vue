<template>
  <scroll-view class="notice-detail" :scroll-y="true" :style="{ paddingBottom: safeBottom + 'px' }">
    <mp-html :content="nodes" />
  </scroll-view>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app';
import { NOTICE_DETAIL_RICH_TEXT } from '../notice/const';
import { getSafeBottom } from '@/utils/index'

const nodes = ref('')
const space = ref('nbsp')
const safeBottom = ref(0)

onLoad(() => {
  const richText = uni.getStorageSync(NOTICE_DETAIL_RICH_TEXT)
  safeBottom.value = getSafeBottom()
  nodes.value = richText
})

</script>
<style lang="scss" scoped>
.notice-detail {
  padding: 24rpx;
  height: 100vh;
  box-sizing: border-box;
}
</style>