import React, { Component } from 'react';
import './styles.css'

export default class User extends Component {

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
    return (
      <table className="table table-striped jambo_table bulk_action">
        <thead>
          <tr className="headings">
            <th>
              <input type="checkbox" id="check-all" className="flat" />
            </th>
            <th className="column-title">Invoice </th>
            <th className="column-title">Invoice Date </th>
            <th className="column-title">Order </th>
            <th className="column-title">Bill to Name </th>
            <th className="column-title">Status </th>
            <th className="column-title">Amount </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even pointer">
            <td className="a-center ">
              <input type="checkbox" className="flat" name="table_records" />
            </td>
            <td className=" ">121000040</td>
            <td className=" ">May 23, 2014 11:47:56 PM </td>
            <td className=" ">121000210 <i className="success fa fa-long-arrow-up"></i></td>
            <td className=" ">John Blank L</td>
            <td className=" ">Paid</td>
            <td className="a-right a-right ">$7.45</td>
          </tr>
          <tr className="odd pointer">
            <td className="a-center ">
              <input type="checkbox" className="flat" name="table_records" />
            </td>
            <td className=" ">121000039</td>
            <td className=" ">May 23, 2014 11:30:12 PM</td>
            <td className=" ">121000208 <i className="success fa fa-long-arrow-up"></i>
            </td>
            <td className=" ">John Blank L</td>
            <td className=" ">Paid</td>
            <td className="a-right a-right ">$741.20</td>
          </tr>
        </tbody>
      </table>

    );
  }

  render() {
    return (
        <div className="row">
          <div className="col-md-12 col-sm-12 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <h2>Quản Lý Users</h2>
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
              <div>
                  <div className="dataTables_info" id="datatable_info" role="status" aria-live="polite">Showing 41 to 50 of 57 entries</div>
                  <div className="dataTables_paginate paging_simple_numbers" id="datatable_paginate">
                    <ul className="pagination">
                      <li className="paginate_button previous" id="datatable_previous"><a href="#" aria-controls="datatable" data-dt-idx="0" tabindex="0">Previous</a></li>
                      <li className="paginate_button "><a href="#" aria-controls="datatable" data-dt-idx="1" tabindex="0">1</a></li>
                      <li className="paginate_button "><a href="#" aria-controls="datatable" data-dt-idx="2" tabindex="0">2</a></li>
                      <li className="paginate_button "><a href="#" aria-controls="datatable" data-dt-idx="3" tabindex="0">3</a></li>
                      <li className="paginate_button "><a href="#" aria-controls="datatable" data-dt-idx="4" tabindex="0">4</a></li>
                      <li className="paginate_button active"><a href="#" aria-controls="datatable" data-dt-idx="5" tabindex="0">5</a></li>
                      <li className="paginate_button "><a href="#" aria-controls="datatable" data-dt-idx="6" tabindex="0">6</a></li>
                      <li className="paginate_button next" id="datatable_next"><a href="#" aria-controls="datatable" data-dt-idx="7" tabindex="0">Next</a></li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
