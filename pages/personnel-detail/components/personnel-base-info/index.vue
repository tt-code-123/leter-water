<template>
  <scroll-view class="personnel-base-info" :scroll-y="true">
    <up-table>
      <custom-tr keyTdWidth="35%" label="姓名" :value="baseInfo.perName"></custom-tr>
      <custom-tr keyTdWidth="35%" label="性别" :value="baseInfo.perSex"></custom-tr>
      <custom-tr keyTdWidth="35%" label="联系电话" :value="baseInfo.phone"></custom-tr>
      <custom-tr keyTdWidth="35%" label="身份证号" :value="baseInfo.idCardNo"></custom-tr>
      <custom-tr keyTdWidth="35%" label="社保编号" :value="baseInfo.sheBaoNo"></custom-tr>
      <custom-tr keyTdWidth="35%" label="学历" :value="baseInfo.xueLi"></custom-tr>
    </up-table>
  </scroll-view>
</template>
<script lang="ts">
export default {
  name: 'personnel-base-info'
}
</script>
<script lang="ts" setup>
import CustomTr from "@/components/custom-table/custom-tr.vue";

const props = defineProps({
  baseInfo: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style lang="scss" scoped>
.personnel-base-info {
  box-sizing: border-box;
  background-color: #f0f0f0;
  height: 100%;
  padding: 24rpx;
}
</style>