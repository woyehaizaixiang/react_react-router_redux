// 后台界面app
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivadeRouter from '@/router/privadeRouter';
import NotFound from '@/views/404';
import Dashboard from './dashboard';

import { Layout, Menu, Avatar } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import './index.scss';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class app extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        }
    }
    render() {
        const defaultSelectedKeys = this.props.location.pathname;
        const defaultOpenKeys = '/'+defaultSelectedKeys.split('/')[1];
        return (
            <Layout className="layout">
                <Sider 
                    trigger={null} 
                    collapsible 
                    collapsed={this.state.collapsed}
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                    }}
                >
                <div className="logo" />
                <Menu 
                    theme="dark" 
                    mode="inline" 
                    defaultSelectedKeys={[defaultSelectedKeys]}
                    defaultOpenKeys={[defaultOpenKeys]}
                    onClick={this.handleMenuItem.bind(this)}
                >
                    <Menu.Item key="/dashboard">
                        <UserOutlined />
                        <span>首页</span>
                    </Menu.Item>
                    <SubMenu
                        key="/auth"
                        title={
                        <span>
                            <AppstoreOutlined />
                            <span>权限管理</span>
                        </span>
                        }
                    >
                        <Menu.Item key="/auth/roleadmin">角色管理</Menu.Item>
                    </SubMenu>
                </Menu>
                </Sider>
                <Layout className="site-layout">
                <Header className="site-layout-background">
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                    className: 'trigger',
                    onClick: this.toggle,
                    })}
                    <ul className="headmenu">
                        <li className="avatar">
                            <Avatar size={40} icon={<UserOutlined />}/>
                            <div className="dropdown">
                                <div className="list">
                                    <div className="item">退出登录</div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        <Redirect exact from='/' to='/dashboard' />
                        <PrivadeRouter path="/dashboard" exact component={ Dashboard } />
                        <Route component={ NotFound } />
                    </Switch>
                </Content>
                </Layout>
            </Layout>
        )
    }

    // 展开/收缩菜单栏
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    // 点击菜单
    handleMenuItem(data){
        let key = data.key;
        this.props.history.push(key);
    }

    // 点击退出登录
    
}
