import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

// import Index from '../views/index';
import Login from '../views/login';
import NotFound from '../views/404';
import Admin from '../views/admin';

import PrivadeRouter from './privadeRouter';

export default class router extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Switch>
                        {/* <Route path="/" exact component={Index} /> */}
                        <Route path="/" exact render={() => <Redirect to="/login" />} />
                        <Route path="/login" exact component={ Login } />
                        <Route path="/404" exact component={ NotFound } />
                        
                        {/* 需要鉴权的路由 */}
                        <PrivadeRouter path="/admin" component={ Admin } />

                        <Route component={ NotFound } />
                    </Switch>
                </Router>
            </Provider>
        )
    }
}
