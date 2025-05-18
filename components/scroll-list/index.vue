<template>
  <scroll-view class="scroll-container" :lower-threshold="lowerThreshold" :scroll-y="true"
    :style="{ height: containerHeight }" @scrolltolower="loadMore">
    <!-- 数据列表 -->
    <slot :list="dataList"></slot>

    <!-- 加载状态 -->
    <view class="loading-status">
      <!-- 加载中 -->
      <slot v-if="loading" name="loading">
        <view class="default-loading">加载中...</view>
      </slot>

      <!-- 没有更多了 -->
      <slot v-if="noMore" name="nomore">
        <view class="default-nomore">没有更多数据了~</view>
      </slot>
    </view>
  </scroll-view>
</template>

<script lang="ts">
export default {
  name: 'ScrollList'
}
</script>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'

const props = defineProps({
  // 容器高度（默认满屏）
  containerHeight: {
    type: String,
    default: '100vh'
  },
  // 数据请求方法
  fetchData: {
    type: Function,
    required: true
  },
  // 每页数量
  pageSize: {
    type: Number,
    default: 10
  },
  // 触底距离阈值（单位px）
  lowerThreshold: {
    type: Number,
    default: 50
  },
  // 搜索参数（响应式）
  searchParams: {
    type: Object,
    default: () => ({})
  }
})

// 当前页码
const currentPage = ref(1)
// 数据列表
const dataList = ref([])
// 加载状态
const loading = ref(false)
// 是否还有更多
const noMore = ref(false)

// 监听搜索参数变化（新增）
watch(
  () => props.searchParams,
  (newVal, oldVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
      initLoad()
    }
  },
  { deep: true }
)

// 初始化加载
onMounted(() => {
  initLoad()
})

// 初始化加载数据
const initLoad = async () => {
  resetState()
  await loadData()
}

// 加载更多
const loadMore = async () => {
  if (loading.value || noMore.value) return
  await loadData()
}

// 核心数据加载方法
const loadData = async () => {
  try {
    loading.value = true
    const params = {
      page: currentPage.value,
      pageSize: props.pageSize,
      ...props.searchParams  // 合并搜索参数
    }

    const res = await props.fetchData(params)

    if (res.data.length === 0) {
      noMore.value = true
      return
    }

    dataList.value = [...dataList.value, ...res.data] as any

    // 判断是否还有更多数据
    if (res.data.length < props.pageSize) {
      noMore.value = true
    } else {
      currentPage.value++
    }
  } catch (e) {
    console.error('数据加载失败:', e)
  } finally {
    loading.value = false
  }
}

// 重置状态
const resetState = () => {
  currentPage.value = 1
  dataList.value = []
  loading.value = false
  noMore.value = false
}

// 暴露方法给父组件
defineExpose({
  refresh: initLoad,
  reset: resetState
})
</script>

<style scoped>
.scroll-container {
  box-sizing: border-box;
}

.loading-status {
  padding: 20rpx;
  text-align: center;
  color: #999;
}

.default-loading,
.default-nomore {
  padding: 20rpx 0;
  font-size: 24rpx;
}
</style>