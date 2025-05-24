<template>
  <scroll-view
    scroll-y
    :show-scrollbar="false"
    :lower-threshold="lowerThreshold"
    @scrolltolower="handleScrollToLower"
    :style="scrollStyle"
    :class="['scroll-list-wrap', className]"
  >
    <!-- 空状态 -->
    <up-empty
      v-if="!loading && !list.length"
      mode="data"
      :text="emptyDescription"
      style="height: 100%; box-sizing: border-box"
    >
      <template v-if="emptyIcon">
        <slot name="empty-icon" />
      </template>
      <slot v-if="$slots.extra && !list.length" name="extra" />
    </up-empty>

    <!-- 加载中状态 -->
    <up-loading-page
      v-if="loading && !list.length"
      :loading-text="loadingText"
      icon-size="40"
    />

    <!-- 列表内容 -->
    <view v-for="(item, index) in list" :key="index" :style="itemStyle">
      <slot name="item" :item="item" :index="index" :total="list.length" />
    </view>

    <!-- 底部加载状态 -->
    <view class="loading-footer">
      <up-loadmore
        v-if="list.length"
        :status="loadStatus"
        :load-text="loadText"
      />
      <slot v-if="$slots.extra && list.length" name="extra" />
    </view>
  </scroll-view>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
  computed,
  useAttrs,
  onMounted,
  nextTick,
  CSSProperties,
  watch,
} from "vue";
import { onShow } from "@dcloudio/uni-app";

interface PageData<T> {
  page: {
    size: number;
    total: number;
  };
  content: T[];
}

const props = withDefaults(
  defineProps<{
    isScroll?: boolean;
    loadingText?: string;
    loadMoreText?: string;
    defaultSize?: number;
    emptyIcon?: string;
    emptyDescription?: string;
    isEffectFetch?: boolean;
    isShowFetch?: boolean;
    col?: number;
    className?: string;
    lowerThreshold?: number;
    styles?: CSSProperties;
    params?: Record<string, any>;
    request: (
      page: { pageNo: number; pageSize: number } & Record<string, any>
    ) => Promise<PageData<any>>;
  }>(),
  {
    isScroll: true,
    defaultSize: 10,
    col: 1,
    lowerThreshold: 50,
    isEffectFetch: false,
    isShowFetch: true,
    emptyDescription: "暂无数据",
    styles: {} as any,
    params: () => ({}),
  }
);

const emits = defineEmits(["request-end"]);

const attrs = useAttrs();
const loading = ref(false);
const hasMore = ref(true);
const list = ref<any[]>([]);
const page = reactive({
  index: 1,
  size: props.defaultSize,
});
const pageTotal = ref(0);

// 添加params监听
watch(
  () => props.params,
  (newVal, oldVal) => {
    if (JSON.stringify(newVal) !== JSON.stringify(oldVal)) {
      reload();
    }
  },
  { deep: true }
);

// 计算属性
const scrollStyle = computed(() => ({
  textAlign: props.col === 1 ? "left" : "center",
  ...props.styles,
}));

const itemStyle = computed(() => ({
  width: `${100 / props.col - (props.col === 1 ? 0 : 2)}%`,
}));

const loadStatus = computed(() => {
  if (loading.value) return "loading";
  return hasMore.value ? "loadmore" : "nomore";
});

const loadText = computed(() => ({
  loadmore: props.loadMoreText || "上拉加载更多",
  loading: props.loadingText || "正在加载...",
  nomore: "没有更多了",
}));

// 方法
const refetchAllData = async () => {
  const pageSize = page.size * page.index;
  await refetchData({
    fetchSize: pageSize,
    fetchIndex: 1,
    reset: true,
  });
};

const updateDataSource = (data: any[]) => {
  list.value = data;
};

const reload = async () => {
  page.index = 1;
  page.size = props.defaultSize;
  await refetchData({ reset: true });
};

const getDataSource = () => {
  return list.value;
};

const refetchData = async (params?: {
  reset?: boolean;
  fetchSize?: number;
  fetchIndex?: number;
}) => {
  loading.value = true;
  const { reset, fetchSize, fetchIndex } = params || {};

  try {
    const res = await props.request({
      pageNo: fetchIndex || (reset ? 1 : page.index),
      pageSize: fetchSize || page.size,
      ...props.params,
    });

    const content = res.content;
    const total = res.page.total;
    const allData = reset ? [...content] : [...list.value, ...content];

    pageTotal.value = total;
    hasMore.value = allData.length < total;
    list.value = allData;
    emits("request-end", { data: allData });

    await nextTick();
  } finally {
    loading.value = false;
  }
};

const handleScrollToLower = async () => {
  if (!hasMore.value || loading.value) return;
  page.index++;
  await refetchData({ fetchIndex: page.index });
};

// 生命周期
onShow(() => {
  if (props.isShowFetch) refetchAllData();
});

onMounted(() => {
  if (props.isEffectFetch) refetchAllData();
});

// 暴露方法
defineExpose({
  refetchAllData,
  reload,
  getDataSource,
  updateDataSource,
});
</script>

<style lang="scss" scoped>
.scroll-list-wrap {
  position: relative;
  box-sizing: border-box;
  background-color: #f0f0f0;
  padding: 16rpx;
  height: 100%;

  .loading-footer {
    padding: 20rpx 0;
    text-align: center;
  }
}
</style>
