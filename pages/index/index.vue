<template>
  <view class="index">
    <image
      class="banner-img"
      src="./images/banner_bg.png"
      mode="widthFix"
    ></image>
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
import { reactive } from "vue";
import company_icon from "./images/company.png";
import personnel_icon from "./images/personnel.png";
import notice_icon from "./images/notice.png";
import mine_icon from "./images/mine.png";

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
