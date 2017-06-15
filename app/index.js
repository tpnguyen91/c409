import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Home from './containers/Home';

render(
  <Router history={browserHistory}>
    <Route
      path={'/'}
      onChange={(prevState, nextState) => {
        if (nextState.location.action !== 'POP') {
          window.scrollTo(0, 0);
        }
      }}
    >
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('root')
);
