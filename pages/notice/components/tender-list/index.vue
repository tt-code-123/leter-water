<template>
  <scroll-list class="tender-list" :isEffectFetch="true" :isShowFetch="false" :request="fetchData">
    <template #item="{ item, index }">
      <common-list-item :title="item.cggbt" :itemIndex="index" :itemOptions="[
        {
          label: '招标发布日期',
          value: item.dGgfbsj,
        },
      ]" @click="handleClickItem(item)"></common-list-item>
    </template>
  </scroll-list>
</template>
<script lang="ts">
export default {
  name: "TenderList",
};
</script>
<script lang="ts" setup>
import { getTenderPageList } from "@/api/notice";
import ScrollList from "@/components/scroll-list/index.vue";
import CommonListItem from "@/components/common-list-item/index.vue";
import { NOTICE_DETAIL_RICH_TEXT } from "../../const";

async function fetchData(params: any) {
  const res = await getTenderPageList({
    ...params,
    cGglx: '1'
  });
  return {
    content: res.list,
    page: {
      size: res.pageSize,
      total: res.total,
    },
  };
}

function handleClickItem(item: any) {
  uni.setStorageSync(NOTICE_DETAIL_RICH_TEXT, item.cggnr)
  uni.navigateTo({
    url: `/pages/notice-detail/index`,
  });
}

</script>
<style lang="scss" scoped>
.tender-list {
  height: 100%;
}
</style>
