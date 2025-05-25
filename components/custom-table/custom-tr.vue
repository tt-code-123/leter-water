<template>
  <up-tr>
    <view class="tr-wrap">
      <up-td :width="keyTdWidth"
        ><view>{{ label }}</view></up-td
      >
      <up-td style="flex: 1">
        <view>{{ value }}</view>
      </up-td>
    </view>
  </up-tr>
</template>
<script lang="ts">
export default {
  name: "CustomTr",
};
</script>
<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    label: string;
    value: string;
    keyTdWidth: string;
  }>(),
  {
    keyTdWidth: "35%",
  }
);
</script>
<style lang="scss" scoped>
.tr-wrap {
  display: flex;
  width: 100%;
}
</style>
