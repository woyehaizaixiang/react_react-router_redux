import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import NotFound from '../views/404';

@connect(
    state => ({
        menuList: state.app.menuList
    })
)

class privadeRouter extends Component {
    render() {
        const isLogin = sessionStorage.getItem('token') ? true : false; // 是否登录
        const path = this.props.path;
        let menuList = [...this.props.menuList];
        let spreadMenuList = this.steamroller(menuList) || [];
        let isAuthor = false; // 是否有当前路由权限
        for(let i=0; i < spreadMenuList.length; i++){
            if(spreadMenuList[i].path === path){ // 当前路径存在menuList中，即：权限存在
                isAuthor = true;
                break;
            }
        }
        const {component:Component, ...rest} = this.props;
        return (
            isLogin ?
            isAuthor ?
            <Route {...rest} render={(props)=> <Component {...props}/>} /> :
            <Route {...rest} component={ NotFound } /> :
            <Redirect to="/login" />
        )
    }

    // 铺平menuList为一维数组
    steamroller(menuList){
        function spreadArr(arr, initArr=[]){
            arr.forEach(item=>{
                initArr.push(item);
                if(item.children && item.children.length){
                    spreadArr(item.children, initArr);
                }
            })
            return initArr;
        }
        return spreadArr(menuList);
    }
}

export default privadeRouter;