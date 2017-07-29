import React, { Component } from 'react';
import superagent from 'superagent';
import { withRouter, Link } from 'react-router';
import ReactPaginate from 'react-paginate';

import './styles.css'

class Merchant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limit: 10,
      current: 0,
      agencies: []
    };

    this.onPageChange = this.onPageChange.bind(this)
  }

  componentWillMount() {
    const { limit } = this.state;
    superagent
    .get('/api/v1/agency')
    .end((err, res) => {
      const agencies = (res.body || {}).agencies || [];
      const page = Math.ceil(agencies.length / limit);
      this.setState({ agencies, page });
    })
  }

  onPageChange({selected: current}) {
    this.setState({ current });
  }

  renderChonDanhMuc() {
    return (
      <div>
        <a className="btn btn-danger customBtnAddNew">Xoá</a>
        <a className="btn btn-primary customBtnAddNew">Chỉnh sửa</a>
        <a className="btn btn-success customBtnAddNew" href='/dai-ly/tao-moi'>Tạo mới</a>
      </div>
    );
  }

  renderDanhMucCon() {
    const { agencies = [], limit, current = 0 } = this.state;
    const newAgencies = [...agencies].splice(current * limit, limit);

    return (
      <table className="table table-striped jambo_table bulk_action">
        <thead>
          <tr className="headings">
            <th>
              <input type="checkbox" id="check-all" className="flat" />
            </th>
            <th className="column-title">Tên Đại Lý </th>
            <th className="column-title">Điện Thoại </th>
            <th className="column-title">Email</th>
            <th className="column-title">Địa Chỉ </th>
            <th className="column-title"></th>
          </tr>
        </thead>
        <tbody>
          {newAgencies.map(({ _id: id, name, address, phone, email }) => (
            <tr className="even pointer" key={id}>
              <td className="a-center ">
                <input type="checkbox" className="flat" name="table_records" value={id} />
              </td>
              <td className=" ">{name}</td>
              <td className=" ">{phone}</td>
              <td className=" ">{email}</td>
              <td className=" ">{address}</td>
              <td className=" "><Link to={`/dai-ly/${id}/nhap-du-lieu`}>Nhập số đã bán</Link></td>
            </tr>
          ))}
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

  render() {

    return (
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Danh Sách Đại Lý</h2>
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
        </div>
    );
  }
}

export default withRouter(Merchant)
