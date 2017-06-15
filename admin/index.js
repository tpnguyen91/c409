import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Home from './App';

render(
  <Router history={browserHistory}>
    <Route path={'/admin'}>
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
);
