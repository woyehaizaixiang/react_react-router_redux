import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './mock'; // mock 数据拦截
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Index from './views/index';
import Admin from './views/admin';
import Login from './views/login';

function App() {
  const isLogin = sessionStorage.getItem('token') ? true : false;
  return (
    <Provider store={store}>
      <Router>
          <Switch>
            <Route path="/" exact component={Index} />
            <Route path="/login" exact component={Login} />
            {
              isLogin
              ? <>
                <Route path="/admin" component={Admin} />
              </>
              : <Redirect from="/*" to="/login" />
            }
          </Switch>
      </Router>
    </Provider>
  );
}

export default App;
