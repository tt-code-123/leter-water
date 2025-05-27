<template>
  <scroll-view class="base-info" :scroll-y="true">
    <up-table>
      <custom-tr keyTdWidth="35%" label="统一社会信用代码" :value="baseInfo.enterpriseCreditCode"></custom-tr>
      <custom-tr keyTdWidth="35%" label="单位名称" :value="baseInfo.qiyeName"></custom-tr>
      <custom-tr keyTdWidth="35%" label="单位类型" :value="dictInfo.qiyeType"></custom-tr>
      <custom-tr keyTdWidth="35%" label="是否驻青企业" :value="baseInfo.isLocal"></custom-tr>
      <custom-tr keyTdWidth="35%" label="驻青地址" :value="baseInfo.zhuqAddress"></custom-tr>
      <custom-tr keyTdWidth="35%" label="驻青联系人" :value="baseInfo.zhuqPerson"></custom-tr>
      <custom-tr keyTdWidth="35%" label="驻青联系方式" :value="baseInfo.zhuqPhone"></custom-tr>
      <custom-tr keyTdWidth="35%" label="所属省(市)" :value="baseInfo.qiyeProvince"></custom-tr>
      <custom-tr keyTdWidth="35%" label="注册资本金(万元)" :value="baseInfo.registeredCapital"></custom-tr>
      <custom-tr keyTdWidth="35%" label="成立日期" :value="baseInfo.establishmentDate"></custom-tr>
      <custom-tr keyTdWidth="35%" label="发证机关" :value="baseInfo.fzOrg"></custom-tr>
      <custom-tr keyTdWidth="35%" label="登记注册类型" :value="dictInfo.djzcType1"></custom-tr>
      <custom-tr keyTdWidth="35%" label="登记注册类型" :value="RegistrationTypeMap2[baseInfo.djzcType2]"></custom-tr>
      <custom-tr keyTdWidth="35%" label="注册地址" :value="baseInfo.zcAddress"></custom-tr>
      <custom-tr keyTdWidth="35%" label="注册地址邮政编码" :value="baseInfo.zcdyzbm"></custom-tr>
      <custom-tr keyTdWidth="35%" label="管理制度" :value="dictInfo.glzd"></custom-tr>
      <custom-tr keyTdWidth="35%" label="经营范围" :value="baseInfo.jyfw"></custom-tr>
      <custom-tr keyTdWidth="35%" label="单位社保编号" :value="baseInfo.dwsbNo"></custom-tr>
      <custom-tr keyTdWidth="35%" label="单位社保登记机关" :value="baseInfo.sbdjOrgName"></custom-tr>
      <custom-tr keyTdWidth="35%" label="主营业务" :value="baseInfo.mainYewu"></custom-tr>
      <custom-tr keyTdWidth="35%" label="主要产品" :value="baseInfo.mainProduct"></custom-tr>
    </up-table>
  </scroll-view>
</template>
<script lang="ts">
export default {
  name: "BaseInfo",
};
</script>
<script setup lang="ts">
import { GwDictEnum } from "@/api/common";
import CustomTr from "@/components/custom-table/custom-tr.vue";
import { RegistrationTypeMap2 } from "@/types/index";
import { computed, ref, onMounted } from "vue";

const props = defineProps({
  baseInfo: {
    type: Object,
    default: () => ({}),
  },
});

const unitClass = ref([])
const registrationType = ref([])
const managementSystem = ref([])
const areaJson = ref([])

onMounted(() => {
  unitClass.value = uni.getStorageSync(GwDictEnum.unitClass)
  registrationType.value = uni.getStorageSync(GwDictEnum.registrationType)
  managementSystem.value = uni.getStorageSync(GwDictEnum.managementSystem)
  areaJson.value = uni.getStorageSync('areaJson')
})

function getAreaLabel(array: Array<any>, findStr: Array<string>, str = '') {
  for (let i = 0; i < areaJson.value.length; i++) {
    const element = array[i];
    if (findStr.includes(element.codeValue)) {
      str += element.codeName + ','
    }
  }

}

const dictInfo = computed(() => {
  const baseInfo = props.baseInfo
  const qiyeType: Array<string> = []
  const qiyeProvince: Array<string> = []
  const djzcType1: Array<string> = []
  const djzcType2: Array<string> = []
  const glzd: Array<string> = []
  unitClass.value.forEach((item: any) => {
    if (baseInfo.qiyeType?.split(',').includes(item.codeValue)) {
      qiyeType.push(item.codeName)
    }
  })
  registrationType.value.forEach((item: any) => {
    if (baseInfo.djzcType1?.split(',').includes(item.codeValue)) {
      djzcType1.push(item.codeName)
    }
  })
  managementSystem.value.forEach((item: any) => {
    if (baseInfo.glzd?.split(',').includes(item.codeValue)) {
      glzd.push(item.codeName)
    }
  })
  return {
    qiyeType: qiyeType.join(','),
    djzcType1: djzcType1.join(','),
    glzd: glzd.join(','),
    qiyeProvince: qiyeProvince.join(',')
  };
})

GwDictEnum
</script>
<style lang="scss" scoped>
.base-info {
  box-sizing: border-box;
  background-color: #f0f0f0;
  height: 100%;
  padding: 24rpx;
}
</style>
