import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Home from './components/home';
import News from './components/news';
import NewsAdd from './components/news/insert';
import ResultLottery from './components/resultLottery';
import ResultLotteryInsert from './components/resultLottery/insert';
import Customer from './components/customer';
import CustomerInsert from './components/customer/insert';
import User from './components/user';
import Order from './components/order';
import OrderDetail from './components/order/detail';
import Merchant from './components/merchant';
import MerchantAddNew from './components/merchant/insert';
import MerchantImport from './components/merchant/import';
import CommonAddNew from './components/common/insert';


render(
  <Router history={browserHistory}>
    <Route path={'/'}>
      <IndexRoute component={Home} />
      <Route path={'/tin-tuc'} component={News} />
      <Route path={'/tin-tuc/tao-moi'} component={NewsAdd} />
      <Route path={'/kq-xs'} component={ResultLottery} />
      <Route path={'/kq-xs/tao-moi'} component={ResultLotteryInsert} />
      <Route path={'/khach-hang'} component={Customer} />
      <Route path={'/khach-hang/tao-moi'} component={CustomerInsert} />
      <Route path={'/user'} component={User} />
      <Route path={'/order'} component={Order} />
      <Route path={'/order/:id'} component={OrderDetail} />
      <Route path={'/dai-ly'} component={Merchant} />
      <Route path={'/dai-ly/tao-moi'} component={MerchantAddNew} />
      <Route path={'/dai-ly/:id/nhap-du-lieu'} component={MerchantImport} />
      <Route path={'/common/new'} component={CommonAddNew} />
      <Route path={'/common/:id'} component={CommonAddNew} />
    </Route>
  </Router>,
  document.getElementById('root')
);
