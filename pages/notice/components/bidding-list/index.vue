<template>
  <scroll-list class="bidding-list" :isEffectFetch="true" :isShowFetch="false" :request="fetchData">
    <template #item="{ item, index }">
      <common-list-item :title="item.cgsbt" :itemIndex="index" :itemOptions="[
        {
          label: '中标日期',
          value: item.dGsfbsj,
        },
      ]" @click="handleClickItem(item)"></common-list-item>
    </template>
  </scroll-list>
</template>
<script lang="ts">
export default {
  name: 'BiddingList'
}
</script>
<script lang="ts" setup>
import { getBiddingPageList } from '@/api/notice';
import ScrollList from '@/components/scroll-list/index.vue';
import CommonListItem from '@/components/common-list-item/index.vue';
import { NOTICE_DETAIL_RICH_TEXT } from '../../const';

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

function handleClickItem(item: any) {
  console.log('item.cggnr', item.cgsnr);

  uni.setStorageSync(NOTICE_DETAIL_RICH_TEXT, item.cgsnr)
  uni.navigateTo({
    url: `/pages/notice-detail/index`,
  });
}
</script>
<style lang="scss" scoped>
.bidding-list {
  height: 100%;
}
</style>