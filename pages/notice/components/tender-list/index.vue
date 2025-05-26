<template>
  <scroll-list class="tender-list" :isEffectFetch="true" :isShowFetch="false" :request="fetchData">
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
          label: '招标人名称',
          value: item.cggfbzrr,
        },
        {
          label: '招标发布日期',
          value: item.dggfbsj,
        },
      ]"></common-list-item>
    </template>
  </scroll-list>
</template>
<script lang="ts">
export default {
  name: 'TenderList'
}
</script>
<script lang="ts" setup>
import { getTenderPageList } from '@/api/notice';
import ScrollList from '@/components/scroll-list/index.vue';
import CommonListItem from '@/components/common-list-item/index.vue';

async function fetchData(params: any) {
  const res = await getTenderPageList({
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
.tender-list {
  height: 100%;
}
</style>