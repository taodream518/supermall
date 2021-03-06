import axios from 'axios';

export function request(config) {
  // 创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout: 5000
  })

  // 请求拦截器
  instance.interceptors.request.use(config => {
    // console.log(config);
    return config;
  }, error => {
    console.log(error);
  })

  // 响应拦截器
  instance.interceptors.response.use(res => {
    return res.data;
  }, error => {
    console.log(error);
  })

  // 真正发送网络请求
  return instance(config); // 返回的Promise对象
}