<template>
  <view class="good-conduct">
    <up-picker v-model:show="show" :columns="columns" confirmColor="#42B983" @confirm="handleConfirm"></up-picker>
    <view class="open-btn" @click="handleOpen">
      <view class="type-text-box">
        <text class="type-text">类别：{{ type }}</text>
      </view>
    </view>
    <scroll-view class="scroll-view" :scroll-y="true">
      <view v-for="item in detailList" :key="item.id" class="detail-item">
        <view class="title">{{ item.title }}</view>
        <view v-for="tableItem in item.data" :key="tableItem.id" class="detail-table-wrap">
          <up-table>
            <up-tr>
              <up-td width="40%">专利名称</up-td>
              <up-td>一种地下岩土体热物性测试装置</up-td>
            </up-tr>
            <up-tr>
              <up-td width="40%">专利号</up-td>
              <up-td>202121313213</up-td>
            </up-tr>
            <up-tr>
              <up-td width="40%">授权日期</up-td>
              <up-td>2013-12-24</up-td>
            </up-tr>
            <up-tr>
              <up-td width="40%">有效期至</up-td>
              <up-td>200.1979</up-td>
            </up-tr>
            <up-tr>
              <up-td width="40%">专利类别</up-td>
              <up-td>发明专利</up-td>
            </up-tr>
            <up-tr>
              <up-td width="40%">可查询网址链接</up-td>
              <up-td class="empty">空</up-td>
            </up-tr>
          </up-table>
        </view>
      </view>
    </scroll-view>
  </view>
</template>

<script lang="ts">
export default {
  name: 'GoodConduct'
}
</script>

<script lang="ts" setup>
import { ref, reactive } from 'vue';

const show = ref(false);
const type = ref('全部');
const columns = reactive([
  ['全部', '社会信用评价', '专利信息', '正式期刊发表论文', '软件著作权信息', '抢险救灾、慈善公益活动', '单位获奖、表彰、表扬情况']
]);
const detailList = reactive([
  {
    id: 1,
    title: '专利信息',
    data: [
      { id: 7 }
    ]
  },
  {
    id: 2,
    title: '单位获奖、表彰、表扬情况',
    data: [
      { id: 8 }
    ]
  },
  {
    id: 3,
    title: '社会信用评价',
    data: [
      { id: 9 },
      { id: 10 }
    ]
  }
])


function handleOpen() {
  show.value = true
}

function handleConfirm(arg: any) {
  type.value = arg.value[0];
}

</script>

<style lang="scss" scoped>
.good-conduct {
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 24rpx;
  box-sizing: border-box;
}

.scroll-view {
  flex: 1;
  height: 0;
}

.open-btn {
  margin-bottom: 16rpx;
  width: 100%;
}

.detail-item {
  margin-bottom: 24rpx;
}

.type-text-box {
  margin: 0 auto;
  width: 70%;
  text-align: center;
  background-color: #E6F4FF;
  border: 2rpx solid #1677FF;
  border-radius: 12rpx;
}

.type-text {
  color: #1677FF;
  font-size: 24rpx;
}

.detail-table-wrap {
  margin-bottom: 24rpx;
}

.empty {
  color: #fff;
}

.title {
  text-align: center;
  width: 100%;
  margin-bottom: 12rpx;
  font-size: 26rpx;
}
</style>