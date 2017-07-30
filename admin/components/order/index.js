import React, { Component } from 'react';
import superagent from 'superagent';
import { withRouter, Link } from 'react-router';
import ReactPaginate from 'react-paginate';
import moment from 'moment';

import './styles.css'

class Order extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      current: 0,
      orders: []
    };

    this.onPageChange = this.onPageChange.bind(this)
  }

  componentWillMount() {
    const { limit } = this.state;
    superagent
    .get('/api/v1/order')
    .end((err, res) => {
      const orders = (res.body || {}).orders || [];
      const page = Math.ceil(orders.length / limit);
      this.setState({ orders, page });
    })
  }

  onPageChange({selected: current}) {
    this.setState({ current });
  }

  renderChonDanhMuc() {
    return (
      <div>
        <button type="button" className="btn btn-danger customBtnAddNew">Xoá</button>
        <button type="button" className="btn btn-primary customBtnAddNew">Chỉnh sửa</button>
        <button type="button" className="btn btn-success customBtnAddNew">Tạo mới</button>
      </div>
    );
  }

  renderDanhMucCon() {
    const { orders = [], limit, current = 0 } = this.state;
    const newOrders = [...orders].splice(current * limit, limit);

    return (
      <table className="table table-striped jambo_table bulk_action">
        <thead>
          <tr className="headings">
            <td className="a-center ">
              <input type="checkbox" className="flat" name="table_records" />
            </td>
            <th className="column-title">Mã ĐH</th>
            <th className="column-title">Đại lý</th>
            <th className="column-title">Ngày Quay</th>
            <th className="column-title">Số lượng</th>
            <th className="column-title">Tổng tiền</th>
            <th className="column-title"> </th>
          </tr>
        </thead>
        <tbody>
          {newOrders.map(({ _id: id, agency = {}, detail, date }) => (
            <tr className="even pointer" key={id}>
              <td className="a-center ">
                <input type="checkbox" className="flat" name="table_records" value={id} />
              </td>
              <td className=" ">{id}</td>
              <td className=" ">{agency.name}</td>
              <td className=" ">{moment(date).format('DD/MM/YYYY')}</td>
              <td className=" ">{detail.length}</td>
              <td className=" ">{detail.reduce((total, item) => total + (item.quanlity * item.price), 0)}</td>
              <td className=" "><Link to={`/order/${id}`}>Chi tiết</Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }

  renderDanhSachDonHang() {
    return (
      <div className="col-md-12 col-sm-12 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Quản Lý Đơn Hàng</h2>
            <div className="clearfix"></div>
          </div>
          <div>
          </div>
          {this.renderChonDanhMuc()}
          <div className="x_content">
            <div className="table-responsive">
              {this.renderDanhMucCon()}
            </div>
          </div>
          <div className="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
            {this.renderPaginate()}
          </div>
        </div>
      </div>
    );
  }

  renderPaginate() {
    const { page, current } = this.state;
    if (page === 0) return null;

    return (
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={<span>...</span>}
        pageCount={page}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        initialPage={current}
        onPageChange={this.onPageChange}
        containerClassName={"pagination"}
        subContainerClassName={"pages paginate_button"}
        activeClassName={"active"}
      />
    );
  }

  render() {
    return (
      <div className="row">
        {this.renderDanhSachDonHang()}
      </div>
    );
  }
}

export default withRouter(Order)
