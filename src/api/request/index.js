import Fly from 'flyio/dist/npm/wx';
import { getBaseUrl } from '../apiConfig';

const fly = new Fly();

/**
 * @param {*} url 请求子路径
 * @param {*} params 请求参数
 * @param {*} method 请求类型
 * @param {*} headers 请求头
 * @param {*} describe 请求失败时描述
 * @param {*} callback 请求失败回调
 */
export const request = ({ url, params, method = 'GET', headers = {}, describe = '', callback }) => {
  const baseUrl = getBaseUrl();
  return new Promise((resolve, reject) => {
    fly
      .request(`${baseUrl}${url}`, params, {
        method,
        headers: {
          'content-type': 'application/json',
          accept: '*/*',
          ...headers, // 可覆盖原配置
        },
      })
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        console.log('error', e);
        uni.showToast({
          icon: 'error',
          title: `请求${describe}失败：${e?.message}`,
          duration: 3000
        });
        if (callback) callback(e);
        reject(e);
      });
  });
};

export default request;
