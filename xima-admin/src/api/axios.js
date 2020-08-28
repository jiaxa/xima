import axios from 'axios';
import { Loading, Notification } from 'element-ui';
import router from '../router';

// axios.defaults.baseURL = '/ev-vehicle-x/v1';
// axios.defaults.headers.Authorization =  localStorage.token ? localStorage.token : '';
// axios.defaults.headers.common['Authorization'] = localStorage.token ? localStorage.token : '';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//添加请求拦截器
axios.interceptors.request.use(
  config => {
    config.baseURL = '/api';
    config.headers = {
      Authorization: localStorage.token ? 'Bearer ' + localStorage.token : '' //设置跨域头部,虽然很多浏览器默认都是使用json传数据，但咱要考虑IE浏览器。
    };
    window.loadingInstance = Loading.service({ fullscreen: true, text: '拼命加载中' });
    return config; //在发送请求之前做某事
  },
  error => {
    if (error) {
      window.loadingInstance.close();
    }
    // console.log(error);
    // return Promise.reject(error); //请求错误时做些事
  }
);

//添加响应拦截器
axios.interceptors.response.use(
  response => {
    window.loadingInstance.close();
    // router.push('home');
    if (response.data.code) {
      return response.data; //对响应数据做些事
    } else {
      Notification.closeAll();
      Notification.warning({
        // offset: 50,
        message: response.data.message ? response.data.message : '请求繁忙，接口遇到问题稍等'
      });
      return { code: false, data: null };
    }
  },
  error => {
    window.loadingInstance.close();
    Notification.closeAll();
    if (error && error.response) {
      if (error.response.status == 401) {
        Notification.error({ message: '登录信息失效，请重新登录' });
        localStorage.token = '';
        router.push('login');
      } else {
        Notification.error({ message: '暂时无法访问服务器，请稍后' });
        // console.log(error);
      }
    }
    // return Promise.reject(error); //请求错误时做些事
  }
);

export default axios;
