<template>
  <scroll-list class="candidate-list" :isEffectFetch="true" :isShowFetch="false" :request="fetchData">
    <template #item="{ item, index }">
      <common-list-item :title="item.title" :itemIndex="index" :itemOptions="[
        {
          label: '招标项目名称',
          value: item.publishTime,
        },
        {
          label: '招标项目编号',
          value: item.cxgbdbBh,
        },
        {
          label: '招标单位名称',
          value: item.cggfbzrr,
        },
        {
          label: '招标代理机构',
          value: item.cggfbzrr,
        },
        {
          label: '预算金额',
          value: item.dggfbsj,
        },
        {
          label: '成交金额',
          value: item.dggfbsj,
        },
        {
          label: '成交日期',
          value: item.dggfbsj,
        },
        {
          label: '成交公示截止日期',
          value: item.dggfbsj,
        },
        {
          label: '中标人名称',
          value: item.dggfbsj,
        },
        {
          label: '中标人统一社会信用代码',
          value: item.dggfbsj,
        }
      ]"></common-list-item>
    </template>
  </scroll-list>
</template>
<script lang="ts">
export default {
  name: 'CandidateList'
}
</script>
<script lang="ts" setup>
import { getBiddingPageList } from '@/api/notice';
import ScrollList from '@/components/scroll-list/index.vue';
import CommonListItem from '@/components/common-list-item/index.vue';

async function fetchData(params: any) {
  const res = await getBiddingPageList({
    ...params,
  })
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
.candidate-list {
  height: 100%;
}
</style>