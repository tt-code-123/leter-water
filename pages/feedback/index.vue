<template>
  <view>
    <up-form labelPosition="top" :model="feedValue" :ref="form">
      <up-form-item label="反馈类型" prop="type" borderBottom labelWidth="80" ref="item3">
        <up-checkbox-group v-model="feedValue.type" shape="square">
          <up-checkbox :customStyle="{ marginRight: '16px' }" v-for="(item, index) in checkboxList" :key="index"
            :label="item.name" :name="item.name">
          </up-checkbox>
        </up-checkbox-group>
      </up-form-item>
      <up-form-item labelWidth="80" label="反馈详情" prop="intro" borderBottom ref="item3">
        <up-textarea placeholder="请详细描述您的问题或意见..." v-model="feedValue.detail" count></up-textarea>
      </up-form-item>
      <view>
        <text>联系方式<text>（选填，如需要反馈结果则必填）</text></text>
      </view>
      <up-form-item label="手机号码" labelWidth="80" prop="userInfo.name" borderBottom ref="item1">
        <up-input v-model="feedValue.phone" border="none" placeholder="姓名,只能为中文"></up-input>
      </up-form-item>
      <up-form-item label="电子邮箱" labelWidth="80" prop="userInfo.name" borderBottom ref="item1">
        <up-input v-model="feedValue.phone" border="none" placeholder="姓名,只能为中文"></up-input>
      </up-form-item>
    </up-form>
    <up-button type="primary" @click="handleSubmit">提交</up-button>
  </view>
</template>
<script lang="ts" setup>
import { reactive, ref } from 'vue';

const form = ref<UniFormRef | null>(null)
const feedValue = reactive({
  type: [],
  detail: '',
  phone: '',
  email: ''
})

const checkboxList = reactive([{
  name: '功能建议',
  disabled: false
},
{
  name: '操作问题',
  disabled: false
},
{
  name: 'Bug反馈',
  disabled: false
},
{
  name: '其他意见',
  disabled: false
}
])

function handleSubmit() {

}

</script>
<style lang="scss" scoped></style>