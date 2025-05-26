<template>
  <scroll-view :scroll-y="true" class="personnel-qualifications">
    <view v-for="item in unitObj.perTypeList" :key="item.id" class="detail-item">
      <view class="detail-title">{{ item.pertype }}</view>
      <up-table>
        <up-tr>
          <up-td width="30%">注册单位</up-td>
          <up-td :style="{ color: '#fff' }">111</up-td>
        </up-tr>
        <up-tr>
          <up-td width="30%">证书编号</up-td>
          <up-td>0001412</up-td>
        </up-tr>
        <up-tr>
          <up-td width="30%">执业印章号</up-td>
          <up-td :style="{ color: '#fff' }">111</up-td>
        </up-tr>
        <up-tr>
          <up-td width="30%">注册专业</up-td>
          <up-td :style="{ color: '#fff' }">111</up-td>
        </up-tr>
        <up-tr>
          <view style="display: flex;width: 100%;">
            <up-td width="30%">变更记录</up-td>
            <up-td style="flex:1">
              <view>1.certCode</view>
              <view>开始时间: 2024-06-24 09:00:42</view>
              <view>离职时间: 2024-06-24 09:00:42</view>
            </up-td>
          </view>
        </up-tr>
      </up-table>
    </view>
  </scroll-view>
</template>
<script lang="ts">
export default {
  name: 'personnel-qualifications'
}
</script>
<script setup lang="ts">
import { getListByUnitClass, getQueryUnitTypeById } from '@/api/personnel';
import { reactive, onMounted } from 'vue';

const props = defineProps({
  qiyeId: {
    type: String,
    required: true
  }
})
const unitObj = reactive<any>({
  perTypeList: []
})

onMounted(() => {
  getQueryUnitTypeById(props.qiyeId).then(res => {
    getListByUnitClass(res[0].typeCode).then(subRes => {
      Object.assign(unitObj, subRes[0])
    })
  })
})

</script>
<style lang="scss" scoped>
.personnel-base-info {
  box-sizing: border-box;
  background-color: #f0f0f0;
  height: 100%;
  padding: 24rpx;
}
</style>