import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import ReduxPromise from "redux-promise-middleware"
import './styles/index.css';

import App from './App';
import Goal_page from './containers/Goal_page';
import Group_page from './containers/Group_page';
import store from "./store"

const createStoreWithMiddleware =  applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Goal_page} />
        <Route path="group" component={Group_page} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
