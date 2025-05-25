<template>
  <scroll-view class="legal-person-info" :scroll-y="true">
    <up-table>
      <custom-tr
        keyTdWidth="40%"
        label="法人代表名称"
        :value="legalPersonInfo.frdbName"
      ></custom-tr>
      <custom-tr
        keyTdWidth="40%"
        label="身份证号"
        :value="legalPersonInfo.idCard"
      ></custom-tr>
      <custom-tr
        keyTdWidth="40%"
        label="性别"
        :value="legalPersonInfo.sex"
      ></custom-tr>
      <custom-tr
        keyTdWidth="40%"
        label="职称"
        :value="legalPersonInfo.zhic"
      ></custom-tr>
      <custom-tr
        keyTdWidth="40%"
        label="职务"
        :value="legalPersonInfo.zhiw"
      ></custom-tr>
      <custom-tr
        keyTdWidth="40%"
        label="学历"
        :value="legalPersonInfo.xuel"
      ></custom-tr>
      <custom-tr
        keyTdWidth="40%"
        label="从事本行业起始年份"
        :value="legalPersonInfo.benhyStartDate"
      ></custom-tr>
      <custom-tr
        keyTdWidth="40%"
        label="联系电话"
        :value="legalPersonInfo.phone"
      ></custom-tr>
    </up-table>
  </scroll-view>
</template>
<script lang="ts">
export default {
  name: "LegalPersonInfo",
};
</script>
<script setup lang="ts">
import CustomTr from "@/components/custom-table/custom-tr.vue";
const props = defineProps({
  legalPersonInfo: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style lang="scss" scoped>
.legal-person-info {
  box-sizing: border-box;
  background-color: #f0f0f0;
  height: 100%;
  padding: 24rpx;
}
</style>
