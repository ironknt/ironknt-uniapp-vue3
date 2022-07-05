import request from '@/api/request';

export function login (query) {
  // return request({
  //   url: `/login`,
  //   method: 'post',
  //   params: query
  // });
  // mock
  console.log(1, query)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        token: '1',
        user: '张三'
      })
    }, 1000)
  })
}
