<template>
  <scroll-list class="basic-information-personnel" :scroll-y="true" :request="fetchData" :isEffectFetch="true">
    <template #item="{ item }">
      <view class="detail-item">
        <up-table>
          <custom-tr keyTdWidth="35%" label="姓名" :value="item.perName"></custom-tr>
          <custom-tr keyTdWidth="35%" label="性别" :value="item.perSex"></custom-tr>
          <custom-tr keyTdWidth="35%" label="联系电话" :value="item.phone"></custom-tr>
          <custom-tr keyTdWidth="35%" label="身份证号" :value="item.idCardNo"></custom-tr>
          <custom-tr keyTdWidth="35%" label="人员类型" :value="item.pertype"></custom-tr>
          <custom-tr keyTdWidth="35%" label="职称专业" :value="item.major"></custom-tr>
          <custom-tr keyTdWidth="35%" label="学历" :value="getXueLi(item.xueLi)"></custom-tr>
          <custom-tr keyTdWidth="35%" label="社保编号" :value="item.sheBaoNo"></custom-tr>
        </up-table>
      </view>
    </template>
  </scroll-list>
</template>
<script lang="ts">
export default {
  name: "BasicInformationPersonnel",
};
</script>
<script setup lang="ts">
import ScrollList from "@/components/scroll-list/index.vue";
import CustomTr from "@/components/custom-table/custom-tr.vue";
import { getListByQiyeryId } from "@/api/company";
import { computed, onMounted, ref } from "vue";
import { GwDictEnum } from "@/api/common";

const props = defineProps({
  qiyeId: {
    type: String,
    required: true,
  },
});

const educationalBackground = ref([])

onMounted(() => {
  educationalBackground.value = uni.getStorageSync(GwDictEnum.educationalBackground)
})


function getXueLi(xueLi: string) {
  const xueli: Array<string> = []

  educationalBackground.value.forEach((item: any) => {
    if (xueLi?.split(',').includes(item.codeValue)) {
      xueli.push(item.codeName)
    }
  })
  return xueli.join(',')
}

async function fetchData(params: any) {
  const res = await getListByQiyeryId({
    ...params,
    qiyeId: props.qiyeId,
  });

  return {
    content: res.list,
    page: {
      size: res.pageSize,
      total: res.total,
    },
  };
}
</script>
<style lang="scss" scoped>
.basic-information-personnel {
  box-sizing: border-box;
  background-color: #fff;
  height: 100%;
}

.detail-item {
  margin-bottom: 12rpx;
}
</style>
