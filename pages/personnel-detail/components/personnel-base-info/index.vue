<template>
  <scroll-view class="personnel-base-info" :scroll-y="true">
    <up-table>
      <custom-tr keyTdWidth="35%" label="姓名" :value="baseInfo.perName"></custom-tr>
      <custom-tr keyTdWidth="35%" label="性别" :value="baseInfo.perSex"></custom-tr>
      <custom-tr keyTdWidth="35%" label="联系电话" :value="baseInfo.phone"></custom-tr>
      <custom-tr keyTdWidth="35%" label="身份证号" :value="baseInfo.idCardNo"></custom-tr>
      <custom-tr keyTdWidth="35%" label="社保编号" :value="baseInfo.sheBaoNo"></custom-tr>
      <custom-tr keyTdWidth="35%" label="学历" :value="dictInfo.xueLi"></custom-tr>
    </up-table>
  </scroll-view>
</template>
<script lang="ts">
export default {
  name: 'personnel-base-info'
}
</script>
<script lang="ts" setup>
import { GwDictEnum } from "@/api/common";
import CustomTr from "@/components/custom-table/custom-tr.vue";
import { computed, onMounted, ref } from "vue";

const props = defineProps({
  baseInfo: {
    type: Object,
    default: () => ({}),
  },
});

const educationalBackground = ref([])

onMounted(() => {
  educationalBackground.value = uni.getStorageSync(GwDictEnum.educationalBackground)
})

const dictInfo = computed(() => {
  const baseInfo = props.baseInfo
  const xueli: Array<string> = []

  educationalBackground.value.forEach((item: any) => {
    if (baseInfo.xueLi?.split(',').includes(item.codeValue)) {
      xueli.push(item.codeName)
    }
  })

  return {
    xueLi: xueli.join(','),
  };
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