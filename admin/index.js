import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Home from './components/home';
import News from './components/news';
import NewsAdd from './components/news/insert';
import NewsUpdate from './components/news/update';
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
import MerchantUpdate from './components/merchant/update';
import CommonAddNew from './components/common/insert';


render(
  <Router history={browserHistory}>
    <Route path={'/admin'}>
      <IndexRoute component={Home} />
      <Route path={'/admin/tin-tuc'} component={News} />
      <Route path={'/admin/tin-tuc/tao-moi'} component={NewsAdd} />
      <Route path={'/admin/tin-tuc/:id'} component={NewsUpdate} />
      <Route path={'/admin/kq-xs'} component={ResultLottery} />
      <Route path={'/admin/kq-xs/tao-moi'} component={ResultLotteryInsert} />
      <Route path={'/admin/khach-hang'} component={Customer} />
      <Route path={'/admin/khach-hang/tao-moi'} component={CustomerInsert} />
      <Route path={'/admin/user'} component={User} />
      <Route path={'/admin/order'} component={Order} />
      <Route path={'/admin/order/:id'} component={OrderDetail} />
      <Route path={'/admin/dai-ly'} component={Merchant} />
      <Route path={'/admin/dai-ly/tao-moi'} component={MerchantAddNew} />
      <Route path={'/admin/dai-ly/:id/nhap-du-lieu'} component={MerchantImport} />
      <Route path={'/admin/dai-ly/:id'} component={MerchantUpdate} />
      <Route path={'/admin/common/new'} component={CommonAddNew} />
      <Route path={'/admin/common/:id'} component={CommonAddNew} />
    </Route>
  </Router>,
  document.getElementById('root')
);
