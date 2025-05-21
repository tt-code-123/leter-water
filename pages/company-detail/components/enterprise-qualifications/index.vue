<template>
  <scroll-view class="enterprise-qualifications" :scroll-y="true">
    <view v-for="(item, index) in detailList" :key="item.id" class="detail-item">
      <view class="serial-number">{{ index + 1 }}、</view>
      <up-table>
        <up-tr>
          <up-td width="35%">资质类别</up-td>
          <up-td>勘察</up-td>
        </up-tr>
        <up-tr>
          <up-td width="35%">专业类别/许可证</up-td>
          <up-td>0001412</up-td>
        </up-tr>
        <up-tr>
          <up-td width="35%">等级</up-td>
          <up-td>111</up-td>
        </up-tr>
        <up-tr>
          <up-td width="35%">资质证书号</up-td>
          <up-td>111</up-td>
        </up-tr>
        <up-tr>
          <up-td width="35%">发证日期</up-td>
          <up-td>111</up-td>
        </up-tr>
        <up-tr>
          <up-td width="35%">发证有效期</up-td>
          <up-td>111</up-td>
        </up-tr>
        <up-tr>
          <up-td width="35%">发证机关</up-td>
          <up-td>中华人民共和国住房和城乡建设部</up-td>
        </up-tr>
      </up-table>
    </view>
  </scroll-view>
</template>
<script lang="ts">
export default {
  name: 'EnterpriseQualifications'
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
.enterprise-qualifications {
  box-sizing: border-box;
  background-color: #fff;
  height: 100%;
  padding: 24rpx;
}

.detail-item {
  margin-bottom: 12rpx;
}

.serial-number {
  margin-bottom: 20rpx;
  font-size: 28rpx;
}
</style>