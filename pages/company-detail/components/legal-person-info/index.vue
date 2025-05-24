<template>
  <scroll-view class="legal-person-info" :scroll-y="true">
    <up-table>
      <up-tr>
        <up-td width="40%">法人代表名称</up-td>
        <up-td>
          <text
            :class="{
              empty: !legalPersonInfo.frdbName,
            }"
            >{{ legalPersonInfo.frdbName || "空" }}</text
          ></up-td
        >
      </up-tr>
      <up-tr>
        <up-td width="40%">身份证号</up-td>
        <up-td
          ><text :class="{ empty: !legalPersonInfo.idCard }">{{
            legalPersonInfo.idCard || "空"
          }}</text></up-td
        >
      </up-tr>
      <up-tr>
        <up-td width="40%">性别</up-td>
        <up-td
          ><text :class="{ empty: !legalPersonInfo.sex }">{{
            legalPersonInfo.sex || "空"
          }}</text></up-td
        >
      </up-tr>
      <up-tr>
        <up-td width="40%">职称</up-td>
        <up-td>
          <text :class="{ empty: !legalPersonInfo.zhic }">{{
            legalPersonInfo.zhic || "空"
          }}</text>
        </up-td>
      </up-tr>
      <up-tr>
        <up-td width="40%">职务</up-td>
        <up-td
          ><text :class="{ empty: !legalPersonInfo.zhiw }">{{
            legalPersonInfo.zhiw || "空"
          }}</text></up-td
        >
      </up-tr>
      <up-tr>
        <up-td width="40%">学历</up-td>
        <up-td
          ><text :class="{ empty: !legalPersonInfo.xuel }">
            {{ legalPersonInfo.xuel || "空" }}
          </text></up-td
        >
      </up-tr>
      <up-tr>
        <up-td width="40%">从事本行业起始年份</up-td>
        <up-td
          ><text :class="{ empty: !legalPersonInfo.benhyStartDate }">{{
            legalPersonInfo.benhyStartDate || "空"
          }}</text></up-td
        >
      </up-tr>
      <up-tr>
        <up-td width="40%">联系电话</up-td>
        <up-td
          ><text :class="{ empty: !legalPersonInfo.phone }">{{
            legalPersonInfo.phone || "空"
          }}</text></up-td
        >
      </up-tr>
    </up-table>
  </scroll-view>
</template>
<script lang="ts">
export default {
  name: "LegalPersonInfo",
};
</script>
<script setup lang="ts">
const props = defineProps({
  legalPersonInfo: {
    type: Object,
    default: () => ({}),
  },
});
</script>
<style lang="scss" scoped>
.legal-person-info {
  box-sizing: border-box;
  background-color: #fff;
  height: 100%;
  padding: 24rpx;
}

.empty {
  color: #fff;
}
</style>
