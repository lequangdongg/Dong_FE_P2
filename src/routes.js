import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Admin from './pages/Admin';
import User from './pages/User';
import LayOut from './layout/LayOut';
import ProductsDetail from './pages/ProductsDetail';
import UserDetail from './pages/UserDetail';
import { history } from './helper/history';
import PrivateRoute from './service/PrivateRoute';
import UpdateUser from "./pages/UpdateUser";

export default function routes() {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute path='/admin' exact component={Admin} />
        <PrivateRoute path='/user/:id' exact component={User} />
        <Route path='/' exact component={LayOut} />
        <Route path='/user/update/:id' exact component={UpdateUser} />
        <Route path='/product/:id' exact component={ProductsDetail} />
        <Route path='/product/history/:id' exact component={UserDetail} />
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
      </Switch>
    </Router>
  );
}
