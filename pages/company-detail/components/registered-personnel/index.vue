<template>
  <view class="registered-personnel">
    <view class="flex-tabs">
      <view v-for="(item, index) in tabList" :key="index" class="tab-item" :class="{ active: currentTab === index }"
        @tap="handleTabClick(index)">
        {{ item }}
      </view>
    </view>
    <scroll-list :styles="{
      height: '100%',
    }" class="scroll-view" :request="fetchData">
      <template #item="{ item, index }">
        <view class="detail-item">
          <view class="desc-container">{{ index + 1 }}、{{ item.perName }}</view>
          <up-table>
            <up-tr>
              <up-td>身份证</up-td>
              <up-td :class="{ empty: !item.idCardNo }">{{ item.idCardNo || '空' }}</up-td>
            </up-tr>
            <up-tr>
              <up-td>注册类别</up-td>
              <up-td :class="{ empty: !item.idCardNo }">福建/南平/三明</up-td>
            </up-tr>
            <up-tr>
              <up-td>注册号(执行印章号)</up-td>
              <up-td :class="{ empty: !item.idCardNo }">明溪县盖洋镇人民政府</up-td>
            </up-tr>
            <up-tr>
              <up-td>注册专业</up-td>
              <up-td :class="{ empty: !item.idCardNo }">shui</up-td>
            </up-tr>
          </up-table>
        </view>
      </template>
    </scroll-list>
  </view>
</template>
<script lang="ts">
export default {
  name: "RegisteredPersonnel"
}
</script>
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { getListByQiyeryId } from '@/api/company'
import ScrollList from '@/components/scroll-list/index.vue'

const props = defineProps({
  qiyeId: {
    type: String,
    required: true
  }
})

const tabList = reactive([
  '全部',
  '注册造价师',
  '监理工程师',
  '造价工程师',
  '质量监员',
  '注册土木工程师',
  '其他'
])
const currentTab = ref(0)

async function fetchData(params: any) {
  const res = await getListByQiyeryId({
    ...params,
    qiyeId: props.qiyeId
  })

  return {
    content: res.list,
    page: {
      size: res.pageSize,
      total: res.total
    }
  }
}

function handleTabClick(index: number) {
  currentTab.value = index
}
</script>
<style lang="scss" scoped>
.registered-personnel {
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 24rpx;
  box-sizing: border-box;
}

.flex-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 28rpx;
  padding: 12rpx 20rpx 24rpx;

  .tab-item {
    height: 36rpx;
    line-height: 36rpx;
    padding: 8rpx 20rpx;
    font-size: 28rpx;
    color: #333;
    background: #f5f5f5;
    border-radius: 16rpx;
    text-align: center;
    font-size: 24rpx;
    border: 2rpx solid #E6E6E6;

    &.active {
      color: #1677FF;
      background: #E6F4FF;
      border-color: #1677FF;
    }
  }
}

.scroll-view {
  flex: 1;
  height: 0;
  box-sizing: border-box;
}

.empty {
  color: #fff;
}

.detail-item {
  margin-bottom: 12rpx;
}

.desc-container {
  margin-bottom: 20rpx;
  font-size: 28rpx;
  color: #2979ff;
}
</style>