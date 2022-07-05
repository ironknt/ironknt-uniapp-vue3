export const checkInput = (form) => {
  if (!form.name || !form.password) {
    uni.showToast({
      icon: 'error',
      title: `${!form.name ? '账号' : ''}${!form.password ? '密码' : ''}未填写`
    });
    return false;
  }
  return true;
};
