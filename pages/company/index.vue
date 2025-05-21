<template>
  <view>
    <search-box placeholder="请输入关键字" @search="handleSearch"></search-box>
    <scroll-list :containerHeight="containerHeight" :params="{
      keywords: searchKeyword
    }" :fetchData="fetchData" @fetchEnd="handleFetchEnd">
      <template #default="{ list }">
        <common-list-item v-for="(item, index) in list" :key="item.id" :title="item.title" :itemIndex="index"
          :itemOptions="[
            {
              label: '统一社会信用代码',
              value: item.code
            },
            {
              label: '企业法人代表',
              value: item.legal_person
            },
            {
              label: '企业注册属地',
              value: item.address
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

const searchKeyword = ref('')

function handleSearch(searchText: string) {
  uni.showLoading({
    title: '数据查询中...',
    mask: true
  })
  searchKeyword.value = searchText
}

function handleFetchEnd() {
  uni.hideLoading()
}
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, 2000)
  }).then(() => {
    return {
      data: [
        {
          id: 1,
          title: '标题1',
          code: '156456456132132',
          legal_person: '张三',
          address: '陕西'
        },
        {
          id: 2,
          title: '标题2',
          code: '5132132132',
          legal_person: '李四',
          address: '南明'
        },
        {
          id: 3,
          title: '标题3',
          code: '121324564564',
          legal_person: '王五',
          address: '永春'
        }
      ]
    }
  })
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