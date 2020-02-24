import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators  } from 'redux';
import { onTestAdd } from '../action/app-action';

import { Link } from 'react-router-dom';

@connect(
    state => ({
        num: state.app.num
    }),
    dispatch => ({
        actions: bindActionCreators(
            {
                onTestAdd
            },
            dispatch
        )
    })
)

class index extends Component {
    render() {
        return (
            <div>
                <div onClick={this.hanldeNum.bind(this, this.props.num)}>
                    {this.props.num}
                </div>
                <div>
                    我是官网
                </div>
                <div>
                    <Link to="/login">登录</Link>
                </div>
            </div>
        )
    }

    // 点击数字
    hanldeNum(num){
        this.props.actions.onTestAdd(num);
    }
}

export default index;