import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Home from './components/Home';
import Merchant from './components/Merchant';
import BlogPost from './components/blog';
import OrderNumber from './components/order';
import ResultLottery from './components/resultLottery';
import BlogDetailPost from './components/blog/blogDetail';

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
      <Route path={'/trang-chu'} component={Home} />
      <Route path={'/kqxs'} component={ResultLottery} />
      <Route path={'/dai-ly'} component={Merchant} />
      <Route path={'/tin-tuc'} component={BlogPost} />
      <Route path={'/tin-tuc/:id'} component={BlogDetailPost} />
      <Route path={'/dat-so'} component={OrderNumber} />
    </Route>
  </Router>,
  document.getElementById('root')
);
