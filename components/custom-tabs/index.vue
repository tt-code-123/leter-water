<template>
  <view class="tabs-container">
    <scroll-view class="scroll-container" scroll-x :scroll-left="scrollLeft" scroll-with-animation
      @scroll="handleScroll">
      <view v-for="(tab, index) in tabs" :key="index" class="tab-item" :class="{ 'tab-active': activeIndex === index }"
        @click="handleTabClick(index)" :id="`tab-${index}`">
        {{ tab.label }}
      </view>
      <view class="indicator" :style="indicatorStyle" />
    </scroll-view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch, computed, getCurrentInstance } from 'vue'

interface Tab {
  label: string
  value: string
}

const props = defineProps<{
  tabs: Tab[],
  modelValue: number // 当前激活索引
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', index: number): void
}>()

const instance = getCurrentInstance()
const activeIndex = ref(0)
const scrollLeft = ref(0)
const containerWidth = ref(0)
const scrollPosition = ref(0)  // 当前滚动位置

// 计算指示器样式
const indicatorStyle = computed(() => ({
  left: `${currentTabOffset.value}px`,
  width: `${currentTabWidth.value}px`,
}))


// 当前激活Tab的位移和宽度
const currentTabOffset = ref(0)
const currentTabWidth = ref(0)

// 增强版节点查询方法
const getNodeInfo = (selector: string) => {
  return new Promise<any>((resolve) => {
    const query = uni.createSelectorQuery().in(instance)
    query.select(selector)
      .boundingClientRect(res => resolve(res))
      .exec()
  })
}

// 计算正确的滚动位置
const calculateScrollPosition = async (index: number) => {
  const [tab, container] = await Promise.all([
    getNodeInfo(`#tab-${index}`),
    getNodeInfo('.scroll-container')
  ])

  if (!tab || !container) return 0

  // 计算绝对位置 = 元素视口位置 + 当前滚动位置 - 容器视口位置
  const absolutePosition = tab.left + scrollPosition.value - container.left
  const targetScroll = absolutePosition - (container.width - tab.width) / 2

  return Math.max(0, targetScroll)
}

// 更新指示器位置
const updateIndicator = async (index: number) => {
  const [tab, container] = await Promise.all([
    getNodeInfo(`#tab-${index}`),
    getNodeInfo('.scroll-container')
  ])

  if (!tab || !container) return

  // 计算相对容器的位置
  const relativeLeft = tab.left - container.left + scrollPosition.value
  currentTabOffset.value = relativeLeft
  currentTabWidth.value = tab.width
}

// 处理Tab点击
const handleTabClick = async (index: number) => {
  if (props.modelValue === index) return
  activeIndex.value = index
  scrollLeft.value = await calculateScrollPosition(index)
  // 更新v-model
  emit('update:modelValue', index)
  await nextTick()
  updateIndicator(index)
}

// 处理滚动事件
const handleScroll = (e: CustomEvent<{ scrollLeft: number }>) => {
  scrollPosition.value = e.detail.scrollLeft
  updateIndicator(activeIndex.value)
}

// 初始化容器宽度
const initContainer = async () => {
  const container = await getNodeInfo('.scroll-container')
  containerWidth.value = container?.width || 0
}

// 监听数据变化
watch(() => props.tabs, async () => {
  await nextTick()
  initContainer()
  updateIndicator(activeIndex.value)
})

onMounted(() => {
  setTimeout(() => {
    initContainer()
    updateIndicator(0)
  }, 300)
})
</script>

<style scoped>
.tabs-container {
  position: relative;
  height: 48px;
  background: #ffffff;
}

.scroll-container {
  height: 100%;
  white-space: nowrap;
  position: relative;
}

.tab-item {
  display: inline-flex;
  align-items: center;
  padding: 0 24px;
  height: 100%;
  font-size: 14px;
  color: #666;
  position: relative;
  transition: color 0.3s;
}

.tab-active {
  color: #007AFF;
  font-weight: 500;
}

.indicator {
  position: absolute;
  height: 4rpx;
  background: #007AFF;
  border-radius: 1px;
  transition: left 0.3s ease;
  /* 确保显示层级 */
  z-index: 10;
  top: 90rpx;
}
</style>