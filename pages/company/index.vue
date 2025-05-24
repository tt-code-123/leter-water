<template>
  <view>
    <search-box placeholder="请输入关键字" @search="handleSearch"></search-box>
    <scroll-list :styles="{
      height: containerHeight,
    }" :params="{
      qiyeName: searchKeyword
    }" :request="fetchData" @request-end="handleFetchEnd">
      <template #item="{ item, index }">
        <common-list-item :title="item.qiyeName" :itemIndex="index" :itemOptions="[
          {
            label: '统一社会信用代码',
            value: item.enterpriseCreditCode
          },
          {
            label: '法人',
            value: item.frdbName
          },
          {
            label: '企业地址',
            value: item.zcAddress
          },
        ]" @click="handleClickItem(item.id)"></common-list-item>
      </template>
    </scroll-list>
    <bottom-bar></bottom-bar>
  </view>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import BottomBar from '@/components/bottom-bar/index.vue'
import SearchBox from '@/components/search-box/index.vue'
import ScrollList from '@/components/scroll-list/index.vue'
import CommonListItem from '@/components/common-list-item/index.vue'
import { rpxToPx, getWindowHeight } from '@/utils'
import { getHomeList } from '@/api/company'

const searchKeyword = ref('')

function handleSearch(searchText: string) {
  if (!searchText && !searchKeyword.value) return
  uni.showLoading({
    title: '数据查询中...',
    mask: true
  })
  searchKeyword.value = searchText
}

function handleFetchEnd() {
  uni.hideLoading()
}
async function fetchData(params: any) {
  const res = await getHomeList({
    ...params,
  })

  return {
    content: res.list,
    page: {
      size: res.pageSize,
      total: res.total
    }
  }
}


function handleClickItem(id: number) {
  uni.navigateTo({
    url: `/pages/company-detail/index?id=${id}`
  })
}

const containerHeight = computed(() => {
  const windowHeight = getWindowHeight()
  return windowHeight - rpxToPx(294) + 'px'
})

</script>
<style lang="scss" scoped></style>