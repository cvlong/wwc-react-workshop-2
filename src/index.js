import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Route, Router, IndexRoute } from 'react-router'
import Root from './Root';
import App from './App';
import Page from './Page';
import ParamsExample from './ParamsExample';
import QueryExample from './QueryExample';
import './index.css';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
        <IndexRoute component={App} />
        <Route path="/page" component={Page} />
        <Route path="/post/:id" component={ParamsExample} />
    </Route>
  </Router>,
  document.getElementById('root')
);
