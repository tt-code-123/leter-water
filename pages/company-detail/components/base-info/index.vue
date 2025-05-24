<template>
  <scroll-view class="base-info" :scroll-y="true">
    <up-table>
      <up-tr>
        <up-td width="35%">统一社会信用代码</up-td>
        <up-td>
          <text :class="{ empty: !baseInfo.enterpriseCreditCode }">{{ baseInfo.enterpriseCreditCode || '空'
          }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">单位名称</up-td>
        <up-td><text :class="{ empty: !baseInfo.qiyeName }">{{ baseInfo.qiyeName || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">单位类型</up-td>
        <up-td><text :class="{ empty: !baseInfo.qiyeType }">{{ baseInfo.qiyeType || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">是否驻青企业</up-td>
        <up-td>
          <text :class="{ empty: !baseInfo.isLocal }">{{ baseInfo.isLocal || '空' }}</text>
        </up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">驻青地址</up-td>
        <up-td><text :class="{ empty: !baseInfo.zhuqAddress }">{{ baseInfo.zhuqAddress || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">驻青联系人</up-td>
        <up-td><text :class="{ empty: !baseInfo.zhuqPerson }">
            {{ baseInfo.zhuqPerson || '空' }}
          </text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">驻青联系方式</up-td>
        <up-td><text :class="{ empty: !baseInfo.zhuqPhone }">{{ baseInfo.zhuqPhone || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">所属省(市)</up-td>
        <up-td><text :class="{ empty: !baseInfo.qiyeProvince }">{{ baseInfo.qiyeProvince || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">注册资本金(万元)</up-td>
        <up-td><text :class="{ empty: !baseInfo.registeredCapital }">{{ baseInfo.registeredCapital || '空'
        }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">成立日期</up-td>
        <up-td><text :class="{ empty: !baseInfo.establishmentDate }">{{ baseInfo.establishmentDate || '空'
        }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">发证机关</up-td>
        <up-td><text :class="{ empty: !baseInfo.fzOrg }">{{ baseInfo.fzOrg || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">登记注册类型</up-td>
        <up-td><text :class="{ empty: !baseInfo.djzcType1 }">{{ baseInfo.djzcType1 || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">登记注册类型</up-td>
        <up-td><text :class="{ empty: !baseInfo.djzcType2 }">{{ baseInfo.djzcType2 || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">注册地址</up-td>
        <up-td><text :class="{ empty: !baseInfo.zcAddress }">{{ baseInfo.zcAddress || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">注册地址邮政编码</up-td>
        <up-td><text :class="{ empty: !baseInfo.zcdyzbm }">{{ baseInfo.zcdyzbm || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">管理制度</up-td>
        <up-td><text :class="{ empty: !baseInfo.glzd }">{{ baseInfo.glzd || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">经营范围</up-td>
        <up-td><text :class="{ empty: !baseInfo.jyfw }">{{ baseInfo.jyfw || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">单位社保编号</up-td>
        <up-td><text :class="{ empty: !baseInfo.dwsbNo }">{{ baseInfo.dwsbNo || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">单位社保登记机关</up-td>
        <up-td><text :class="{ empty: !baseInfo.sbdjOrgName }">{{ baseInfo.sbdjOrgName || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">主营业务</up-td>
        <up-td><text :class="{ empty: !baseInfo.mainYewu }">{{ baseInfo.mainYewu || '空' }}</text></up-td>
      </up-tr>
      <up-tr>
        <up-td width="35%">主要产品</up-td>
        <up-td><text :class="{ empty: !baseInfo.mainProduct }">{{ baseInfo.mainProduct || '空' }}</text></up-td>
      </up-tr>
    </up-table>
  </scroll-view>
</template>
<script lang="ts">
export default {
  name: 'BaseInfo'
}
</script>
<script setup lang="ts">

const props = defineProps({
  baseInfo: {
    type: Object,
    default: () => ({})
  }
});
</script>
<style lang="scss" scoped>
.base-info {
  box-sizing: border-box;
  background-color: #fff;
  height: 100%;
  padding: 24rpx;
}

.empty {
  color: #fff;
}
</style>