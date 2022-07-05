import { defineStore } from 'pinia';

export const useUserStore = defineStore('drag', {
  state: () => ({
    userName: '',
    token: '',
  }),
  getters: {
    userInfo: (state) => {
      return {
        name: state.userName,
        password: '*******',
      }
    },
  },
  actions: {
    keepUser (data) {
      this.$patch((state) => {
        Object.assign(state, {
          userName: data?.user,
          token: data?.token,
        });
      });
    },
  }
});
