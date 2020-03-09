// app 模块的action
import axios from '@/util/axios.init.js';
import { message } from 'antd';

//登录
export const onLogin = (params = {}) => async dispatch => {
    try {
        const res = await axios.post('/login', params);
        if(res.code === 1){
            let data = res.data;
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('menuList', JSON.stringify(data.menuList));
            await dispatch({
                type: 'APP.onLogin',
                payload: data
            })
        }
        return res;
    } catch (err) {
        message.error("网络错误，请重试");
    }
}


// 测试数字增加
export const onTestAdd = num => dispatch => {
    num++;
    dispatch({
        type: 'TEST::add',
        payload: num
    })
}