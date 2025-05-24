<template>
  <scroll-list
    class="enterprise-qualifications"
    :scroll-y="true"
    :request="fetchData"
    :isEffectFetch="true"
  >
    <template #item="{ item }">
      <view class="detail-item">
        <up-table>
          <up-tr>
            <view class="tr-wrap">
              <up-td width="35%"><view>专业/资质类别</view></up-td>
              <up-td style="flex: 1">
                <view>{{ item.zizType }}</view>
              </up-td>
            </view>
          </up-tr>
          <up-tr>
            <view class="tr-wrap">
              <up-td width="35%"><view>专业类别/许可证</view></up-td>
              <up-td style="flex: 1">
                <view>{{ item.zyType }}</view>
              </up-td>
            </view>
          </up-tr>
          <up-tr>
            <view class="tr-wrap">
              <up-td width="35%"><view>等级</view></up-td>
              <up-td style="flex: 1">
                <view>{{ item.zizLevel }}</view>
              </up-td>
            </view>
          </up-tr>
          <up-tr>
            <view class="tr-wrap">
              <up-td width="35%"><view>证书编号</view></up-td>
              <up-td style="flex: 1">
                <view>{{ item.certificateNo }}</view>
              </up-td>
            </view>
          </up-tr>
          <up-tr>
            <view class="tr-wrap">
              <up-td width="35%"><view>最新资质取证时间</view></up-td>
              <up-td style="flex: 1">
                <view>{{ item.zizLatestOEDate }}</view>
              </up-td>
            </view>
          </up-tr>
          <up-tr>
            <view class="tr-wrap">
              <up-td width="35%"><view>有效期至</view></up-td>
              <up-td style="flex: 1">
                <view>{{ item.zjPeriod }}</view>
              </up-td>
            </view>
          </up-tr>
          <up-tr>
            <view class="tr-wrap">
              <up-td width="35%"><view>首次取证时间</view></up-td>
              <up-td style="flex: 1">
                <view>{{ item.firstQuzTime }}</view>
              </up-td>
            </view>
          </up-tr>
          <up-tr>
            <view class="tr-wrap">
              <up-td width="35%">
                <view>核发机关</view>
              </up-td>
              <up-td style="flex: 1">
                <view>{{ item.hefaOrg }}</view>
              </up-td>
            </view>
          </up-tr>
        </up-table>
      </view>
    </template>
  </scroll-list>
</template>
<script lang="ts">
export default {
  name: "EnterpriseQualifications",
};
</script>
<script setup lang="ts">
import { reactive } from "vue";

import ScrollList from "@/components/scroll-list/index.vue";
import { getListByQiye } from "@/api/company";

const detailList = reactive([
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
]);

async function fetchData(params: any) {
  const res = await getListByQiye({
    ...params,
  });

  return {
    content: res.list,
    page: {
      size: res.pageSize,
      total: res.total,
    },
  };
}
</script>
<style lang="scss" scoped>
.enterprise-qualifications {
  box-sizing: border-box;
  background-color: #fff;
  height: 100%;
}

.detail-item {
  margin-bottom: 12rpx;
}

.empty {
  color: #fff;
}

.tr-wrap {
  display: flex;
  width: 100%;
}
</style>
