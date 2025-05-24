<template>
  <view>
    <search-box placeholder="请输入关键字" @search="handleSearch"></search-box>
    <scroll-list :styles="{ height: containerHeight }" :params="{
      name: searchKeyword
    }" :request="fetchData" @request-end="handleFetchEnd">
      <template #item="{ item, index }">
        <common-list-item :title="item.perName" :itemIndex="index" :itemOptions="[
          {
            label: '联系电话',
            value: item.phone
          },
          {
            label: '所属企业',
            value: item.qiyeName
          },
          {
            label: '人员类型',
            value: item.pertype
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
import { getListByQiyeryId } from '@/api/personnel'

const searchKeyword = ref('')

function handleSearch(searchText: string) {
  if (!searchText && !searchKeyword.value) return
  uni.showLoading({
    title: '数据查询中...',
    mask: true
  })
  searchKeyword.value = searchText
}

async function fetchData(params: any) {
  const res = await getListByQiyeryId({
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

function handleFetchEnd() {
  uni.hideLoading()
}

function handleClickItem(id: number) {
  uni.navigateTo({
    url: `/pages/personnel-detail/index?id=${id}`
  })
}


const containerHeight = computed(() => {
  const windowHeight = getWindowHeight()
  return windowHeight - rpxToPx(294) + 'px'
})

</script>
<style scoped></style>