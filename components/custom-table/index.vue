<template>
  <up-table>
    <template v-for="(item, index) in tableData" :key="index">
      <custom-tr
        :keyTdWidth="keyTdWidth"
        :label="item.key"
        :value="item.value"
      ></custom-tr>
    </template>
  </up-table>
</template>
<script lang="ts">
export default {
  name: "CustomTable",
};
</script>
<script lang="ts" setup>
import CustomTr from "./custom-tr.vue";
const props = withDefaults(
  defineProps<{
    tableData: Array<{
      key: string;
      value: string;
    }>;
    keyTdWidth: string;
  }>(),
  {
    tableData: () => [],
    tdWidth: "35%",
  }
);
</script>
<style lang="scss" scoped></style>
