// ajax 请求接口封装
import axios from 'axios';
import { message } from 'antd';
import Qs from 'qs';


axios.defaults.baseURL = '/api'; // 请求地址
axios.defaults.timeout = 60000; // 请求超时限制
//开始请求设置，发起请求拦截
axios.interceptors.request.use(config => {
    // 序列化get请求
    if (config.method === 'get') {
        config.paramsSerializer = function(params) {
            return Qs.stringify(params, { arrayFormat: 'repeat' })
        }
    }

    let token = sessionStorage.getItem('token');
    config.headers.common['authorization'] = `Bearer ${token}`; // 添加请求头
    if(config.method == 'get'){ // get请求参数添加时间戳,阻止缓存
        config.params = {
            ...config.params,
            _t: Date.parse(new Date())
        }
    }
    return config;
}, error => {
    // 请求 错误处理
    return Promise.reject(error);
})

// respone 响应拦截器
axios.interceptors.response.use(
    response => {
        const res = response.data;
        //这里根据后台返回来设置
        if (res._code === 1) { // 响应成功
            return response.data;
        } else { // 响应的信息为 error
            return response.data;
        }
    },
    error => {
        // 系统错误 500 404
        if(error.response.status === 401){ // 401 - 用户信息过期
            // 修改redux中state app.isTokenTimeout
        }else{
            message.error('网络异常')
        }
        return Promise.reject(error)
    }
)
export default axios;