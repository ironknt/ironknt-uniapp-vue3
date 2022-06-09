<template>
  <view class="content">
    <view class="area animate__animated animate__backInUp">
		  <u-avatar class="block animate__animated animate__jackInTheBox animate__delay-1s" :src="src"></u-avatar>
	    <u-form class="block animate__animated animate__jackInTheBox animate__delay-1s">
		    <u-form-item class="input" label="帐号"><u-input v-model="form.name" :custom-style="{color: '#fff'}" /></u-form-item>
		    <u-form-item class="input" label="密码"><u-input type="password" v-model="form.password" :custom-style="{color: '#fff'}" /></u-form-item>
        <u-button :ripple="true" :plain="true" shape="circle" @click="onLogin">Login</u-button>
      </u-form>
		  <u-toast ref="uToast" />
    </view>
  </view>
</template>

<script>
import { reactive, ref, onMounted } from 'vue'
import { useUserStore } from '@/store/login/user';

export default {
  setup() {
    const form = reactive({
      name: '',
      password: '',
    });

    const useStore = useUserStore();
    const onLogin = async () => {
      if (!form.name || !form.password) {
        uToast?.value?.show({
          type: 'error',
          title: `${!form.name ? '账号' : ''}${!form.password ? '密码' : ''}未填写`
        });
        return;
      }
      try {
        const result = await useStore.Login({
          loginName: form.name,
          loginPass: form.password
        });
        if (result.token) {
          uToast?.value?.show({
            type: 'success',
            title: '登录成功'
          });
          setTimeout(() => {
            //  跳转主页
          }, 1000);
        }
      } catch (err) {
        uToast?.value?.show({
          type: 'error',
          title: 'err.message'
        });
      }
    };

    const uToast = ref(null);

    return {
      form,
      title: 'Hello',
      src: '../../static/person.svg',
      onLogin,
      uToast
    }
  },
}
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
  background-image: url('../../static/camp.png');
  width: 100vw;
  height: 100vh;
}

.area {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
  width: 90vw;
  background: rgba(0, 0, 0, .5);
  border-radius: 22px;

  .block {
    color: #fff;
    height: 70%;
    width: 70%;

    .input {
      margin-bottom: 40px;
      color: #fff;
    }
  }
}
</style>
