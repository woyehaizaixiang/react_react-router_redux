import React, { Component } from 'react';
import axios from 'axios';
// import { Button } from 'antd';

export default class login extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        // 清空缓存信息
        sessionStorage.clear();
    }
    render() {
        return (
            <div>  
                <div>login</div>
                <button onClick={this.handleLogin.bind(this)}>登录</button>
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
        })
        // sessionStorage.setItem('token', '65sdfsdf1sd1f6sd51f6sd4fs6df65sd4');
        // this.props.history.push('/admin');
    }
}
