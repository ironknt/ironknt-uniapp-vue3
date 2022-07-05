<template>
  <view>
    <u-alert-tips type="warning" :title="props.name" :description="props.say"></u-alert-tips>
    <u-button type="primary" @tap="onEmit">emit1</u-button>
    <u-button type="success" @tap="$emit('someEvent', 123)">emit2</u-button>
  </view>
</template>

<script setup>
// peops获取
const props = defineProps(['name', 'say']);
const emit = defineEmits(['someEvent']);
console.log(props);

// 两种方式都可以自定义事件：emit1， emit2按钮
const onEmit = () => {
  emit('someEvent', 123);
};
</script>
