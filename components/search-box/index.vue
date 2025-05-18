<template>
  <view class="search-box">
    <view class="search-content">
      <input class="search-input" type="text" confirm-type="search" :placeholder="placeholder" v-model="searchValue"
        @input="handleInput" @confirm="handleConfirm" />
      <uni-icons type="search" size="28" color="#2a8fff" @click="handleConfirm"></uni-icons>
    </view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'SearchBox'
}
</script>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps({
  placeholder: {
    type: String,
    default: '请输入关键字'
  }
})
const emit = defineEmits(['search', 'input'])
const searchValue = ref('')
const handleInput = (e: any) => {
  emit('input', e.detail.value)
}

const handleConfirm = () => {
  emit('search', searchValue.value)
}
</script>

<style scoped>
.search-box {
  padding: 24rpx;
  background-color: #2a8fff;
  height: 80rpx;
}

.search-content {
  display: flex;
  background-color: #fff;
  border-radius: 12rpx;
  align-items: center;
  padding: 0 20rpx 0 40rpx;
}

.search-input {
  height: 80rpx;
  flex: 1;
}
</style>