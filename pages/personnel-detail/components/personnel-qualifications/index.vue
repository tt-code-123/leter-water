<template>
  <scroll-view :scroll-y="true" class="personnel-qualifications">
    <view v-for="item in xaQiyeryRgZhiCList" :key="item.id" class="detail-item">
      <view class="detail-title">{{ item.unitclass }}人员类型：{{ item.pertype }}</view>
      <custom-table :tableData="[{
        key: '主修',
        value: item.major
      },
      {
        key: '证书编号',
        value: item.perZhicNo
      },
      {
        key: '证书有效期',
        value: item.perZhicPeriod
      }
      ]" keyTdWidth="35%"></custom-table>
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
import { reactive, ref, onMounted } from 'vue';
import CustomTable from '@/components/custom-table/index.vue';

const props = defineProps({
  qiyeId: {
    type: String,
    required: true
  },
  xaQiyeryRgZhiCList: {
    type: Array<any>,
    default: () => ([])
  }
})
const unitObj = reactive<any>({
  perTypeList: []
})

onMounted(() => {
  // getQueryUnitTypeById(props.qiyeId).then(res => {
  //   getListByUnitClass(res[0].typeCode).then(subRes => {
  //     Object.assign(unitObj, subRes[0])
  //   })
  // })
})

</script>
<style lang="scss" scoped>
.personnel-qualifications {
  box-sizing: border-box;
  background-color: #f0f0f0;
  height: 100%;
  padding: 24rpx;
}

.detail-item {
  margin-bottom: 24rpx;

  &:last-child {
    margin-bottom: 0;
  }
}

.detail-title {
  color: #1677ff;
  background-color: #fff;
  text-align: center;
  border: 2rpx solid #e4e7ed;
  border-bottom: 0rpx;
  box-sizing: border-box;
  padding: 12rpx 0;
}
</style>