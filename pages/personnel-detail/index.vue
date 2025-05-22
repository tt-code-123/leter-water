<template>
  <view class="personal-detail">
    <view class="personal-detail-header">
      <view class="flex-between">
        <text class="header-name">张三</text>
        <up-icon :name="isCollect ? 'star-fill' : 'star'" :color="isCollect ? '#fadb14' : '#999'" size="24"
          @click="handleClickStar"></up-icon>
      </view>
      <view class="flex-between">
        <text class="header-title">证件类型</text>
        <text class="header-value">教授高级工程师</text>
      </view>
      <view class="flex-between">
        <text class="header-title">证件号码</text>
        <text class="header-value">50015454645646456464</text>
      </view>
      <view class="flex-between">
        <text class="header-title">性别</text>
        <text class="header-value">男</text>
      </view>
      <view class="flex-between">
        <text class="header-title">注册证书所在地单位名称</text>
        <text class="header-value">长江水利委员会水文局长江口水文水文水文水文水文水文</text>
      </view>
    </view>
    <custom-tabs :tabs="tabList" class="tabs-list" v-model="tabIndex"></custom-tabs>
    <scroll-view :scroll-y="true" class="personal-detail-content">
      <template v-if="tabIndex === 0">
        <view v-for="item in detailList" :key="item.id" class="detail-item">
          <view class="detail-title">{{ item.title }}</view>
          <up-table>
            <up-tr>
              <up-td width="30%">注册单位</up-td>
              <up-td :style="{ color: '#fff' }">111</up-td>
            </up-tr>
            <up-tr>
              <up-td width="30%">证书编号</up-td>
              <up-td>0001412</up-td>
            </up-tr>
            <up-tr>
              <up-td width="30%">执业印章号</up-td>
              <up-td :style="{ color: '#fff' }">111</up-td>
            </up-tr>
            <up-tr>
              <up-td width="30%">注册专业</up-td>
              <up-td :style="{ color: '#fff' }">111</up-td>
            </up-tr>
            <up-tr>
              <view style="display: flex;width: 100%;">
                <up-td width="30%">变更记录</up-td>
                <up-td style="flex:1">
                  <view>1.certCode</view>
                  <view>开始时间: 2024-06-24 09:00:42</view>
                  <view>离职时间: 2024-06-24 09:00:42</view>
                </up-td>
              </view>
            </up-tr>
          </up-table>
        </view>
      </template>
      <view class="no-data" v-else>
        <text>暂无数据</text>
      </view>
    </scroll-view>
  </view>
</template>
<script lang="ts" setup>
import { ref, reactive } from 'vue';
import { onLoad } from '@dcloudio/uni-app'
import CustomTabs from '@/components/custom-tabs/index.vue';

const tabIndex = ref(0);
const detailId = ref('');
const isCollect = ref(false);
const tabList = reactive([
  { label: '个人资质信息', value: '0' },
  { label: '个人工程业绩', value: '1' },
]);
const detailList = reactive([
  {
    id: 1,
    title: '一级注册建造师',
  },
  {
    id: 2,
    title: '二级注册建造师',
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
  box-sizing: border-box;
  background-color: #fff;
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
  margin-bottom: 40rpx;

  &:last-child {
    margin-bottom: 0;
  }
}

.detail-title {
  color: #1677ff;
  margin-bottom: 40rpx;
}

.no-data {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>