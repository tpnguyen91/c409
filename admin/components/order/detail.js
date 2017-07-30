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
      order: {}
    };

    this.onPageChange = this.onPageChange.bind(this)
  }

  componentWillMount() {
    const { limit } = this.state;
    const { id } = this.props.params;
    superagent
    .get(`/api/v1/order/${id}`)
    .end((err, res) => {
      const order = (res.body || {}).order || {};
      const page = Math.ceil((order.detail || []).length / limit);
      this.setState({ order, page });
    })
  }

  onPageChange({selected: current}) {
    this.setState({ current });
  }

  renderDanhMucCon() {
    const { order = {}, limit, current = 0 } = this.state;
    if (!order.detail) return null;

    const newOrders = [...order.detail].splice(current * limit, limit);
    let total = 0, quanlities = 0;

    return (
      <table className="table table-striped jambo_table bulk_action">
        <thead>
          <tr className="headings">
            <th className="column-title">Số Mua</th>
            <th className="column-title">Đài Quay</th>
            <th className="column-title">Loại</th>
            <th className="column-title">Số lượng</th>
            <th className="column-title">Giá</th>
            <th className="column-title">Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {newOrders.map(({ number, quanlity, price, type, provinceCode, _id: id }) => {
            quanlities += quanlity;
            total += quanlity * price;

            return (
              <tr className="even pointer" key={id}>
                <td className=" ">{number}</td>
                <td className=" ">{provinceCode}</td>
                <td className=" ">{type}</td>
                <td className=" ">{quanlity}</td>
                <td className=" ">{price}</td>
                <td className=" ">{quanlity * price}</td>
              </tr>
            )
          })}
          <tr className="even pointer" key={'a'}>
            <th colSpan={3}>Tổng</th>
            <td colSpan={2}>{quanlities}</td>
            <td className=" ">{total}</td>
          </tr>
        </tbody>
      </table>
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

  renderDetail() {
    const { order } = this.state;
    if (!order) return null;
    const agency = order.agency || {}

    return (
      <div className="order_detail">
        <div className="title"><b>Mã đơn hàng: </b> <span>{order._id}</span></div>
        <div className="title"><b>Đại lý: </b> <span>{agency.name}</span></div>
        <div className="title"><b>Số điện thoại: </b> <span>{agency.phone}</span></div>
        <div className="title"><b>Địa chỉ: </b> <span>{agency.address}</span></div>
        <div className="title"><b>Chi tiết đặt</b></div>
      </div>
    )
  }

  render() {
    return (
      <div className="x_panel">
        <div className="x_title">
          <h2>Chi Tiết Đơn Hàng</h2>
          <ul className="nav navbar-right panel_toolbox">
            <li><button type="button" className="btn btn-xs btn-danger customBtnAddNew">Xoá</button></li>
            <li><button type="button" className="btn btn-xs btn-primary customBtnAddNew">Chỉnh sửa</button></li>
            <li><button type="button" className="btn btn-xs btn-success customBtnAddNew">Tạo mới</button></li>
          </ul>
        </div>
        <div className="x_content">
          {this.renderDetail()}
          <div className="clearfix"></div>
          <div className="table-responsive">
            {this.renderDanhMucCon()}
          </div>
        </div>
        <div className="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
          {this.renderPaginate()}
        </div>
      </div>
    );
  }
}

export default withRouter(Order)
