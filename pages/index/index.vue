<template>
  <view class="index">
    <image class="banner-img" src="./images/banner_bg.png" mode="widthFix"></image>
    <view class="grid">
      <template v-for="item in options" :key="item.value">
        <view class="grid-item" @click="handleClick(item.value)">
          <image :src="item.icon" mode="aspectFit" class="icon"></image>
          <text class="text">{{ item.label }}</text>
        </view>
      </template>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import company_icon from "./images/company.png";
import personnel_icon from "./images/personnel.png";
import notice_icon from "./images/notice.png";
import mine_icon from "./images/mine.png";
import { getGwDictList, getAreaJson, GwDictEnum } from '@/api/common'

const options = reactive([
  {
    value: "company",
    label: "从业单位",
    icon: company_icon,
  },
  {
    value: "personnel",
    label: "从业人员",
    icon: personnel_icon,
  },
  {
    value: "notice",
    label: "招标信息",
    icon: notice_icon,
  },
  {
    value: "mine",
    label: "我的",
    icon: mine_icon,
  },
]);

function handleSaveDict(key: string, data = []) {
  uni.setStorage({
    key,
    data: (data || []).map((item: any) => ({
      codeName: item.codeName,
      codeValue: item.codeValue
    }))
  })
}

onMounted(() => {

  getAreaJson().then(res => {
    uni.setStorage({
      key: 'areaJson',
      data: (res || [])
    })
  })
  getGwDictList(GwDictEnum.professionalTitle).then(res => {
    // 职称列表
    handleSaveDict(GwDictEnum.professionalTitle, res)
  })
  getGwDictList(GwDictEnum.position).then(res => {
    // 职务列表
    handleSaveDict(GwDictEnum.position, res)
  })
  getGwDictList(GwDictEnum.educationalBackground).then(res => {
    // 学历列表
    handleSaveDict(GwDictEnum.educationalBackground, res)
  })
  getGwDictList(GwDictEnum.unitProperty).then(res => {
    // 单位性质
    handleSaveDict(GwDictEnum.unitProperty, res)
  })
  getGwDictList(GwDictEnum.registrationType).then(res => {
    // 登记注册类型
    handleSaveDict(GwDictEnum.registrationType, res)
  })
  getGwDictList(GwDictEnum.managementSystem).then(res => {
    // 管理制度
    handleSaveDict(GwDictEnum.managementSystem, res)
  })
  getGwDictList(GwDictEnum.unitClass).then(res => {
    // 单位类型
    handleSaveDict(GwDictEnum.unitClass, res)
  })
})

function handleClick(type: string) {
  // 处理点击事件,根据type跳转到不同页面
  uni.navigateTo({
    url: `/pages/${type}/index`,
  });
}
</script>

<style scoped>
.index {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.banner-img {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.grid {
  padding: 30rpx;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20rpx;
  width: 100%;
}

.grid-item {
  display: flex;
  flex-direction: column;
  gap: 14rpx;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 12rpx;
  padding: 30rpx;
}

.icon {
  width: 150rpx;
  height: 150rpx;
  margin-bottom: 10rpx;
}

.text {
  font-size: 28rpx;
  color: #000;
  font-weight: 500;
}
</style>
