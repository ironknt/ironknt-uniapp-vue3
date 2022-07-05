<template>
  <view>
    <Info :name="userName" :say="says" @someEvent="onEvent" />
  </view>
</template>

<script setup>
import { useUserStore } from '@/store/login/user';
import { storeToRefs, } from 'pinia';
import { ref, } from 'vue';
// 页面级生命周期，详细看uniapp文档
import { onLoad, onShow, } from '@dcloudio/uni-app';
import Info from '@/components/info';

const userStore = useUserStore();
const { userName, } = storeToRefs(userStore);
const says = ref('');

// onLoad 接受页面传递的参数
onLoad((params) => {
  console.log(params)
  says.value = params?.says;
});

// 子组件自定义事件
const onEvent = (params) => {
  console.log('收到参数', params)
};
</script>
