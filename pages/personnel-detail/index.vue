<template>
  <view class="personal-detail">
    <view class="personal-detail-header">
      <view class="flex-between">
        <text class="header-name">{{ personInfo.perName }}</text>
        <up-icon :name="isCollect ? 'star-fill' : 'star'" :color="isCollect ? '#fadb14' : '#999'" size="24"
          @click="handleClickStar"></up-icon>
      </view>
      <view class="flex-between">
        <text class="header-title">性别</text>
        <text class="header-value">{{ personInfo.perSex }}</text>
      </view>
      <view class="flex-between">
        <text class="header-title">联系电话</text>
        <text class="header-value">{{ personInfo.phone }}</text>
      </view>
      <view class="flex-between">
        <text class="header-title">身份证号</text>
        <text class="header-value">{{ personInfo.idCardNo }}</text>
      </view>
      <view class="flex-between">
        <text class="header-title">社保编号</text>
        <text class="header-value">{{ personInfo.sheBaoNo }}</text>
      </view>
      <view class="flex-between">
        <text class="header-title">学历</text>
        <text class="header-value">{{ personInfo.xueLi }}</text>
      </view>
    </view>
    <custom-tabs :tabs="tabList" class="tabs-list" v-model="tabIndex"></custom-tabs>
    <template v-if="tabIndex === 0">
      <personnel-base-info :base-info="personInfo"></personnel-base-info>
    </template>
    <template v-else>
      <personnel-qualifications :qiyeId="qiyeId"></personnel-qualifications>
    </template>
  </view>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { onLoad } from '@dcloudio/uni-app'
import CustomTabs from '@/components/custom-tabs/index.vue';
import PersonnelBaseInfo from './components/personnel-base-info/index.vue'
import PersonnelQualifications from './components/personnel-qualifications/index.vue'
import { getQueryById } from '@/api/personnel';

const personInfo = reactive<any>({})
const tabIndex = ref(0);
const detailId = ref('');
const qiyeId = ref('');
const isCollect = ref(false);
const tabList = reactive([
  { label: '人员基本信息', value: '0' },
  { label: '人员资质', value: '1' },
]);

onLoad((options) => {
  const id = options!.id;
  detailId.value = id;
  qiyeId.value = options!.qiyeId;
  getQueryById(id).then(res => {
    Object.assign(personInfo, res);
  })
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
.personal-detail {
  display: flex;
  flex-direction: column;
  background-color: #f0f0f0;
  height: 100vh;
}

.personal-detail-header {
  padding: 32rpx;
  background-color: #fff;
  border-top: 2rpx solid #f0f0f0;
}

.tabs-list {
  margin-top: 24rpx;
  background-color: #fff;
}

.personal-detail-content {
  flex: 1;
  height: 0;
  box-sizing: border-box;
  background-color: #f0f0f0;
  padding: 32rpx 24rpx;
}

.flex-between {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16rpx;

  &:last-child {
    margin-bottom: 0;
  }
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

.detail-item {
  margin-bottom: 24rpx;

  &:last-child {
    margin-bottom: 0;
  }
}

.detail-title {
  color: #1677ff;
  // margin-bottom: 40rpx;
  padding: 24rpx 12rpx;
  background-color: #fff;
  box-sizing: border-box;
  border: 2rpx solid transparent;
  text-align: center;
}

.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>