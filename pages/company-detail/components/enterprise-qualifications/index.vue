<template>
  <scroll-list
    class="enterprise-qualifications"
    :scroll-y="true"
    :request="fetchData"
    :isEffectFetch="true"
  >
    <template #item="{ item }">
      <view class="detail-item">
        <up-table>
          <custom-tr
            keyTdWidth="35%"
            label="专业/资质类别"
            :value="item.zizType"
          ></custom-tr>
          <custom-tr
            keyTdWidth="35%"
            label="专业类别/许可证"
            :value="item.zyType"
          ></custom-tr>
          <custom-tr
            keyTdWidth="35%"
            label="等级"
            :value="item.zizLevel"
          ></custom-tr>
          <custom-tr
            keyTdWidth="35%"
            label="证书编号"
            :value="item.certificateNo"
          ></custom-tr>
          <custom-tr
            keyTdWidth="35%"
            label="最新资质取证时间"
            :value="item.zizLatestOEDate"
          ></custom-tr>
          <custom-tr
            keyTdWidth="35%"
            label="有效期至"
            :value="item.zjPeriod"
          ></custom-tr>
          <custom-tr
            keyTdWidth="35%"
            label="首次取证时间"
            :value="item.firstQuzTime"
          ></custom-tr>
          <custom-tr
            keyTdWidth="35%"
            label="核发机关"
            :value="item.hefaOrg"
          ></custom-tr>
        </up-table>
      </view>
    </template>
  </scroll-list>
</template>
<script lang="ts">
export default {
  name: "EnterpriseQualifications",
};
</script>
<script setup lang="ts">
import ScrollList from "@/components/scroll-list/index.vue";
import CustomTr from "@/components/custom-table/custom-tr.vue";
import { getListByQiye } from "@/api/company";

const props = defineProps({
  qiyeId: {
    type: String,
    required: true,
  },
});

async function fetchData(params: any) {
  const res = await getListByQiye({
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
.enterprise-qualifications {
  box-sizing: border-box;
  background-color: #fff;
  height: 100%;
}

.detail-item {
  margin-bottom: 12rpx;
}
</style>
