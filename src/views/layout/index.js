// 后台界面app
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivadeRouter from '@/router/privadeRouter';
import NotFound from '@/views/404';
import Dashboard from './dashboard';
export default class app extends Component {
    render() {
        return (
            <div>
                app
                <Switch>
                    <Redirect exact from='/app' to='/app/dashboard' />
                    <Route path="/app/dashboard" exact component={ Dashboard } />
                    <Route component={ NotFound } />
                </Switch>
            </div>
        )
    }
}
