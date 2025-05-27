<template>
  <scroll-view class="legal-person-info" :scroll-y="true">
    <up-table>
      <custom-tr keyTdWidth="40%" label="法人代表名称" :value="legalPersonInfo.frdbName"></custom-tr>
      <custom-tr keyTdWidth="40%" label="身份证号" :value="legalPersonInfo.idCard"></custom-tr>
      <custom-tr keyTdWidth="40%" label="性别" :value="legalPersonInfo.sex"></custom-tr>
      <custom-tr keyTdWidth="40%" label="职称" :value="dictInfo.zhic"></custom-tr>
      <custom-tr keyTdWidth="40%" label="职务" :value="dictInfo.zhiw"></custom-tr>
      <custom-tr keyTdWidth="40%" label="学历" :value="dictInfo.xuel"></custom-tr>
      <custom-tr keyTdWidth="40%" label="从事本行业起始年份" :value="legalPersonInfo.benhyStartDate"></custom-tr>
      <custom-tr keyTdWidth="40%" label="联系电话" :value="legalPersonInfo.phone"></custom-tr>
    </up-table>
  </scroll-view>
</template>
<script lang="ts">
export default {
  name: "LegalPersonInfo",
};
</script>
<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import CustomTr from "@/components/custom-table/custom-tr.vue";
import { GwDictEnum } from "@/api/common";
const props = defineProps({
  legalPersonInfo: {
    type: Object,
    default: () => ({}),
  },
});

const professionalTitle = ref([])
const position = ref([])
const educationalBackground = ref([])

onMounted(() => {
  professionalTitle.value = uni.getStorageSync(GwDictEnum.professionalTitle)
  position.value = uni.getStorageSync(GwDictEnum.position)
  educationalBackground.value = uni.getStorageSync(GwDictEnum.educationalBackground)
})

const dictInfo = computed(() => {
  const legalPersonInfo = props.legalPersonInfo
  const zhic: Array<string> = []
  const zhiw: Array<string> = []
  const xuel: Array<string> = []
  professionalTitle.value.forEach((item: any) => {
    if (legalPersonInfo.zhic?.split(',').includes(item.codeValue)) {
      zhic.push(item.codeName)
    }
  })
  position.value.forEach((item: any) => {
    if (legalPersonInfo.zhiw?.split(',').includes(item.codeValue)) {
      zhiw.push(item.codeName)
    }
  })
  educationalBackground.value.forEach((item: any) => {
    if (legalPersonInfo.xuel?.split(',').includes(item.codeValue)) {
      xuel.push(item.codeName)
    }
  })

  return {
    zhic: zhic.join(','),
    zhiw: zhiw.join(','),
    xuel: xuel.join(','),
  };
})

</script>
<style lang="scss" scoped>
.legal-person-info {
  box-sizing: border-box;
  background-color: #f0f0f0;
  height: 100%;
  padding: 24rpx;
}
</style>
