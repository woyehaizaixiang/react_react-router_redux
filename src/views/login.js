import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import style from './login.module.scss';

export default class login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    componentDidMount(){
        // 清空缓存信息
        sessionStorage.clear();
    }
    render() {
        const loginDisabled = !(this.username && this.password);
        return (
            <div className={style.login}>  
                <div>login</div>
                <button onClick={this.handleLogin.bind(this)}>登录</button>
                <Button disabled={loginDisabled} type="primary">登 录</Button>
            </div>
        )
    }
    // 点击登录
    handleLogin(){
        let data = {
            uname: 'kuangsong',
            password: '123456'
        }
        axios.post('/login', data).then((res)=>{
            console.log(res);
            sessionStorage.setItem('token', '65sdfsdf1sd1f6sd51f6sd4fs6df65sd4');
            this.props.history.push('/admin');
        })
        
    }
}
