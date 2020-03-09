import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from '@/util/axios.init.js';
import style from './login.module.scss';
import './login.module.scss';
import { onLogin } from '@/action/app-action';

const mapStateToProps = (state, ownProps) => {
    return state;
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return bindActionCreators(
        {
            onLogin: onLogin
        },
        dispatch
    )
}

@connect(
    mapStateToProps,
    mapDispatchToProps
)
class login extends Component {
    constructor(props){
        super(props);
        this.state = {
            username: 'biji',
            password: '123456',
            loading: false
        }
        this.inputChange = this.inputChange.bind(this);
        this.onFinish = this.onFinish.bind(this);
    }
    componentDidMount(){
        // 清空缓存信息
        sessionStorage.clear();
    }
    render() {
        const loginDisabled = !(this.state.username && this.state.password);
        return (
            <div className={style.login}>
                <div className={style.left}>

                </div>
                <div className={style.right}>
                    <div className={style.form}>
                        <div className={style.formContent}>
                            <div className={style.title}>
                                <p>欢迎回来！</p>
                                <p>请登录到您的帐户。</p>
                            </div>
                            <div className={style.loginform}>
                                <Form
                                    name="basic"
                                    initialValues={{ 
                                       username : this.state.username,
                                       password:  this.state.password
                                    }}
                                    onFinish={this.onFinish}
                                >
                                    <Form.Item
                                        name="username"
                                        className={style.formItem}
                                        rules={[{ required: true, message: '请输入账号' }]}
                                    >
                                        <Input
                                            className={style.input}
                                            name="username"
                                            placeholder="请输入账号"
                                            suffix={<UserOutlined style={{fontSize: '18px'}}/>}
                                            value={this.state.username}
                                            onChange={this.inputChange}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        className={style.formItem}
                                        rules={[{ required: true, message: '请输入密码' }]}
                                    >
                                        <Input 
                                            type="password"
                                            name="password"
                                            placeholder="请输入密码"
                                            className={style.input}
                                            suffix={<LockOutlined style={{fontSize: '18px'}}/>}
                                            value={this.state.password}
                                            onChange={this.inputChange}
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        className={style.formItem}
                                    >
                                        <Button 
                                            type="primary"
                                            htmlType="submit"
                                            block
                                            size="large"
                                            disabled={loginDisabled}
                                            loading={this.state.loading}
                                        >
                                            登录
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    // 点击登录 验证通过
    onFinish(values){
        this.setState({
            loading: true
        })
        let data = values;
        this.props.onLogin(data).then((res)=>{
            if(res.code === 1){ // 登录成功
                let data = res.data;
                let menuList = data.menuList;
                this.props.history.push(menuList[0].path);
            }else{
                message.error(res.msg);
            }
        }).finally(err=>{
            this.setState({
                loading: false
            })
        })
    }

    // input change
    inputChange(e){
        this.setState({
            [e.target.name]: e.target.value.trim()
        })
    }

    componentWillUnmount(){
        this.setState = (state, callback)=>{
            return
        }
    }
}

export default login;