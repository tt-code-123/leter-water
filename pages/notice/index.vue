<template>
  <view>
    <custom-tabs
      :tabs="tabList"
      class="tabs-list"
      v-model="tabIndex"
    ></custom-tabs>
    <scroll-list
      :styles="{ height: containerHeight }"
      :params="{
        keywords: searchKeyword,
      }"
      :request="fetchData"
    >
      <template #item="{ item, index }">
        <common-list-item
          :title="item.title"
          :itemIndex="index"
          :itemOptions="[
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
          ]"
        ></common-list-item>
      </template>
    </scroll-list>
    <bottom-bar></bottom-bar>
  </view>
</template>
<script setup lang="ts">
import { computed, ref, reactive } from "vue";
import BottomBar from "@/components/bottom-bar/index.vue";
import ScrollList from "@/components/scroll-list/index.vue";
import CommonListItem from "@/components/common-list-item/index.vue";
import CustomTabs from "@/components/custom-tabs/index.vue";
import { rpxToPx, getWindowHeight } from "@/utils";
import { getTenderPageList } from "@/api/notice";

const tabIndex = ref(0);
const tabList = reactive([
  { label: "招标公告", value: "0" },
  { label: "中标候选人公示", value: "1" },
  { label: "中标公告", value: "2" },
]);
const searchKeyword = ref("");

async function fetchData(params: any) {
  const res = await getTenderPageList({
    ...params,
  });
  return {
    content: res.list,
    page: {
      size: res.pageSize,
      total: res.total,
    },
  };
}

const containerHeight = computed(() => {
  const windowHeight = getWindowHeight();
  return windowHeight - rpxToPx(294) + "px";
});
</script>
<style scoped></style>
