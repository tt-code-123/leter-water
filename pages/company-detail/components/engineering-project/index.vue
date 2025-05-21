<template>
  <scroll-view class="scroll-view" :scroll-y="true">
    <view v-for="(item, index) in detailList" :key="item.id" class="detail-item">
      <view class="desc-container">{{ index + 1 }}、<text class="desc">2020年度中央预算内投资项目南安市综合治理工程</text></view>
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
</template>
<script lang="ts">
export default {
  name: 'EngineeringProject'
}
</script>
<script setup lang="ts">
import { reactive } from 'vue';

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
</script>
<style lang="scss" scoped>
.scroll-view {
  box-sizing: border-box;
  background-color: #fff;
  height: 100%;
  padding: 24rpx;
}

.detail-item {
  margin-bottom: 12rpx;
}

.desc-container {
  margin-bottom: 20rpx;
  font-size: 28rpx;
}

.desc {
  color: #2979ff;
}

.empty {
  color: #fff;
}
</style>