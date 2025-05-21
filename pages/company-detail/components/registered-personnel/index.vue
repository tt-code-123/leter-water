<template>
  <view class="registered-personnel">
    <view class="flex-tabs">
      <view v-for="(item, index) in tabList" :key="index" class="tab-item" :class="{ active: currentTab === index }"
        @tap="handleTabClick(index)">
        {{ item }}
      </view>
    </view>
    <scroll-view class="scroll-view" :scroll-y="true">
      <view v-for="(item, index) in detailList" :key="item.id" class="detail-item">
        <view class="desc-container">{{ index + 1 }}、刘文云</view>
        <up-table>
          <up-tr>
            <up-td>项目编码</up-td>
            <up-td class="empty">空</up-td>
          </up-tr>
          <up-tr>
            <up-td>项目属地</up-td>
            <up-td>福建/南平/三明</up-td>
          </up-tr>
          <up-tr>
            <up-td>建设单位</up-td>
            <up-td>明溪县盖洋镇人民政府</up-td>
          </up-tr>
          <up-tr>
            <up-td>总投资(万元)</up-td>
            <up-td>200.1979</up-td>
          </up-tr>
        </up-table>
      </view>
    </scroll-view>
  </view>
</template>
<script lang="ts">
export default {
  name: "RegisteredPersonnel"
}
</script>
<script lang="ts" setup>
import { reactive, ref } from 'vue'

const tabList = reactive([
  '全部',
  '注册造价师',
  '监理工程师',
  '造价工程师',
  '质量监员',
  '注册土木工程师',
  '其他'
])
const detailList = reactive([
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  }
])
const currentTab = ref(0)

const handleTabClick = (index: number) => {
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

.detail-item {
  margin-bottom: 12rpx;
}

.desc-container {
  margin-bottom: 20rpx;
  font-size: 28rpx;
  color: #2979ff;
}
</style>