import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
import Register from './components/Register';
import {history} from './helper/history';
import PrivateRoute from './service/PrivateRoute';
export default function routes() {
  
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path='/' exact component={Main} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </Router>
  );
}
