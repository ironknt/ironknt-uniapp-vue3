<template>
  <view class="content">
    <view class="area animate__animated animate__backInUp">
		  <u-avatar class="block animate__animated animate__jackInTheBox animate__delay-1s" src="../../static/person.svg"></u-avatar>
	    <u-form class="block animate__animated animate__jackInTheBox animate__delay-1s">
		    <u-form-item class="input" label="帐号"><u-input v-model="form.name" :custom-style="{color: '#fff'}" /></u-form-item>
		    <u-form-item class="input" label="密码"><u-input type="password" v-model="form.password" :custom-style="{color: '#fff'}" /></u-form-item>
        <u-button :ripple="true" :plain="true" shape="circle" @click="onLogin">Login</u-button>
      </u-form>
    </view>
  </view>
</template>

<script setup>
// 组件级生命周期
import { reactive, onMounted } from 'vue';
import { login, } from '@/services/login';
import { useUserStore } from '@/store/login/user';
import { checkInput, } from './utils';
import { storeToRefs, } from 'pinia';

const userStore = useUserStore();
const { userName, token, } = storeToRefs(userStore);
// 获取store数据
console.log (userName, token);

// 根据store恢复form
const form = reactive({
  name: userStore?.userInfo?.name,
  password: userStore?.userInfo?.password,
});

onMounted(() => {
  // 生命周期，通过函数调用形式
  // 文档：https://staging-cn.vuejs.org/guide/essentials/lifecycle.html#registering-lifecycle-hooks
});

const onLogin = async () => {
  if (!checkInput(form)) return;
  try {
    const result = await login({
      loginName: form.name,
      loginPass: form.password
    });
    if (result?.token) {
      uni.showToast({
        icon: 'success',
        title: '登录成功'
      });
      // 保存用户信息
      userStore.keepUser(result);
      setTimeout(() => {
        //  跳转主页
        uni.navigateTo({
          url: '/pages/index/index?says=uniapp'
        });
      }, 1000);
    }
  } catch (err) {
    uni.showToast({
      icon: 'error',
      title: `${err}`
    });
  }
};
</script>

<style lang="scss" scoped>
  @import './index.scss';
</style>
