import React, { Component } from 'react';
import Page1 from './page1';

export default class admin extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                <div>
                    admin a
                    <div>
                        <span onClick={this.handleToLogin.bind(this)}>to login</span>
                    </div>
                </div>
            </div>
        )
    }

    // 点击去登录页
    handleToLogin(){
        this.props.history.push('/login');
    }
}
