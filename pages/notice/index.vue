<template>
  <view class="notice">
    <custom-tabs :tabs="tabList" class="tabs-list" v-model="tabIndex"></custom-tabs>
    <template v-if="tabIndex === 0">
      <tender-list class="list-wrap"></tender-list>
    </template>
    <template v-else-if="tabIndex === 1">
      <candidate-list class="list-wrap"></candidate-list>
    </template>
    <template v-else>
      <bidding-list class="list-wrap"></bidding-list>
    </template>
    <bottom-bar></bottom-bar>
  </view>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
import BottomBar from "@/components/bottom-bar/index.vue";
import CustomTabs from "@/components/custom-tabs/index.vue";
import TenderList from './components/tender-list/index.vue'
import BiddingList from './components/bidding-list/index.vue'
import CandidateList from './components/candidate-list/index.vue'

const tabIndex = ref(0);
const tabList = reactive([
  { label: "招标公告", value: "0" },
  { label: "中标候选人公示", value: "1" },
  { label: "中标结果公告", value: "2" },
]);

</script>
<style scoped lang="scss">
.notice {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.list-wrap {
  flex: 1;
  height: 0;
}
</style>
