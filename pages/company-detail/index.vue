<template>
  <view class="company-detail">
    <view class="company-detail-header">
      <view class="flex-between">
        <text class="header-name">长沙核工业工程勘察院有限公司</text>
        <up-icon :name="isCollect ? 'star-fill' : 'star'" :color="isCollect ? '#fadb14' : '#999'" size="24"
          @click="handleClickStar"></up-icon>
      </view>
      <view class="address">
        <up-icon name="map-fill" color="#1677FF" size="16"></up-icon>
        <text class="header-address">宁乡</text>
      </view>
      <view class="flex-between">
        <text class="header-title">统一社会信用代码</text>
        <text class="header-value">145215486544</text>
      </view>
      <view class="flex-between">
        <text class="header-title">企业法人代表</text>
        <text class="header-value">张三</text>
      </view>
      <view class="flex-between">
        <text class="header-title">企业等级注册类型</text>
        <text class="header-value">啊啊</text>
      </view>
      <view class="flex-between">
        <text class="header-title">企业注册属地</text>
        <text class="header-value">宁乡</text>
      </view>
      <view class="flex-between">
        <text class="header-title">企业经营地址</text>
        <text class="header-value">长沙市雨花区想听蓝天</text>
      </view>
      <view class="chart-container">
        <view class="chart-item">
          <view class="icon-container">
            <up-icon name="account-fill" size="24" color="#1677FF"></up-icon>
          </view>
          <view class="chart-box">
            <text>资质项</text>
            <text><text class="highlight">1</text>项</text>
          </view>
        </view>
        <view class="chart-item">
          <view class="icon-container">
            <up-icon name="account-fill" size="24" color="#1677FF"></up-icon>
          </view>
          <view class="chart-box">
            <text>注册人员</text>
            <text><text class="highlight">3</text>项</text>
          </view>
        </view>
        <view class="chart-item">
          <view class="icon-container">
            <up-icon name="account-fill" size="24" color="#1677FF"></up-icon>
          </view>
          <view class="chart-box">
            <text>工程项目</text>
            <text><text class="highlight">8</text>项</text>
          </view>
        </view>
      </view>
    </view>
    <up-tabs :list="tabList" :lineHeight="2" :activeStyle="{
      color: '#1677ff'
    }" class="tabs-list" v-model:current="tabIndex"></up-tabs>
    <template v-if="tabIndex === 0">
      <scroll-view class="scroll-view" :scroll-y="true">
        <view v-for="(item, index) in detailList" :key="item.id" class="detail-item">
          <view>{{ index + 1 }}、</view>
          <up-table>
            <up-tr>
              <up-td width="30%">资质类别</up-td>
              <up-td>勘察</up-td>
            </up-tr>
            <up-tr>
              <up-td width="30%">专业类别/许可证</up-td>
              <up-td>0001412</up-td>
            </up-tr>
            <up-tr>
              <up-td width="30%">等级</up-td>
              <up-td>111</up-td>
            </up-tr>
            <up-tr>
              <up-td width="30%">资质证书号</up-td>
              <up-td>111</up-td>
            </up-tr>
            <up-tr>
              <up-td width="30%">发证日期</up-td>
              <up-td>111</up-td>
            </up-tr>
            <up-tr>
              <up-td width="30%">发证有效期</up-td>
              <up-td>111</up-td>
            </up-tr>
            <up-tr>
              <up-td width="30%">发证机关</up-td>
              <up-td>中华人民共和国住房和城乡建设部</up-td>
            </up-tr>
          </up-table>
        </view>
      </scroll-view>
    </template>
    <template v-else-if="tabIndex === 1"></template>
    <template v-else-if="tabIndex === 2"></template>
    <template v-else-if="tabIndex === 3"></template>
    <template v-else-if="tabIndex === 4"></template>
    <template v-else-if="tabIndex === 5"></template>
    <template v-else-if="tabIndex === 6"></template>
    <template v-else-if="tabIndex === 7"></template>
    <template v-else-if="tabIndex === 8"></template>
  </view>

</template>
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import { ref, reactive } from 'vue';

const detailId = ref('');
const isCollect = ref(false);
const tabIndex = ref(0);
const tabList = reactive([
  { name: '企业资质资格' },
  { name: '注册人员' },
  { name: '工程人员' },
  { name: '工程项目' },
  { name: '良好行为' },
  { name: '不良行为' },
  { name: '重点关注名单' },
  { name: '黑名单记录' },
  { name: '变更记录' },
]);
const detailList = reactive([
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  }
])

onLoad((options) => {
  detailId.value = options!.id;
})

function handleClickStar() {
  uni.showToast({
    title: !isCollect.value ? '收藏成功' : '取消收藏成功',
    duration: 1000
  })
  isCollect.value = !isCollect.value;
}

</script>
<style lang="scss" scoped>
.company-detail {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  height: 100vh;
}

.company-detail-header {
  padding: 32rpx;
  background-color: #fff;
  border-top: 2rpx solid #f0f0f0;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16rpx;

  &:last-child {
    margin-bottom: 0;
  }
}

.address {
  display: flex;
  align-items: center;
  margin-bottom: 16rpx;
}

.header-address {
  color: #333;
  margin-left: 24rpx;
  font-size: 24rpx;
}

.header-name {
  color: #333;
  font-size: 38rpx;
}

.header-title {
  color: #bebebe;
  font-size: 28rpx;
  flex: 1;
}

.header-value {
  color: #212121;
  font-size: 28rpx;
  text-align: right;
  margin-left: 36rpx;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 50%;
  word-break: break-all;
  box-sizing: border-box;
}

.chart-container {
  display: flex;
  justify-content: space-between;
  padding-top: 32rpx;
  border-top: 2rpx solid #f0f0f0;
  margin-top: 32rpx;
}

.chart-item {
  display: flex;
  align-items: center;
}

.icon-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80rpx;
  height: 80rpx;
  border-radius: 50%;
  background-color: #69aaf4;
}

.chart-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 26rpx;
  margin-left: 20rpx;
}

.highlight {
  color: red;
}

.tabs-list {
  width: 100vw;
  margin-top: 24rpx;
  background-color: #fff;
}

.scroll-view {
  flex: 1;
  box-sizing: border-box;
  background-color: #fff;
  height: 0;
}
</style>