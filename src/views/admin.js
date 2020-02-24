import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Page1 from './admin/page1';

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
                        <Router>
                            <Redirect to="/admin/page" />
                            <Route path="/admin/page" component={Page1} />
                        </Router>
                    </div>
                </div>
            </div>
        )
    }
}
