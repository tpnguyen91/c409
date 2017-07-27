import React, { Component } from 'react';
import './styles.css'

export default class Order extends Component {

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
            <th className="column-title">Mã ĐH </th>
            <th className="column-title">Khách hàng </th>
            <th className="column-title">Ngày tạo </th>
            <th className="column-title">Số lượng </th>
            <th className="column-title">Tổng tiền </th>
            <th className="column-title"> </th>
          </tr>
        </thead>
        <tbody>
          <tr className="even pointer">
            <td className="a-center" style={{ verticalAlign: 'middle' }}>
              <input type="checkbox" className="flat" name="table_records" />
            </td>
            <td style={{ verticalAlign: 'middle' }} >121000040</td>
            <td style={{ verticalAlign: 'middle' }} >May 23, 2014 11:47:56 PM </td>
            <td style={{ verticalAlign: 'middle' }} >May 23, 2014 11:47:56 PM </td>
            <td style={{ verticalAlign: 'middle' }} >121000210 <i className="success fa fa-long-arrow-up"></i></td>
            <td style={{ verticalAlign: 'middle' }} >John Blank L</td>
            <td style={{ verticalAlign: 'middle' }} ><a className="btn btn-default">In</a></td>
          </tr>
          <tr className="odd pointer">
            <td className="a-center tdAlign">
              <input type="checkbox" className="flat" name="table_records" />
            </td>
            <td style={{ verticalAlign: 'middle' }} >121000039</td>
            <td style={{ verticalAlign: 'middle' }} >May 23, 2014 11:30:12 PM</td>
            <td style={{ verticalAlign: 'middle' }} >May 23, 2014 11:30:12 PM</td>
            <td style={{ verticalAlign: 'middle' }} >121000208 <i className="success fa fa-long-arrow-up"></i>
            </td>
            <td style={{ verticalAlign: 'middle' }} >John Blank L</td>
            <td style={{ verticalAlign: 'middle' }} ><a className="btn btn-default">In</a></td>
          </tr>
        </tbody>
      </table>

    );
  }

  renderThongTinKH() {
    return (
      <div className="col-md-6 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Thông tin Khách hàng</h2>
            <div className="clearfix"></div>
          </div>
          <div className="x_content">
            <br />
            <form className="form-horizontal form-label-left input_mask">
              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Họ & Tên</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="Default Input" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Số Điện thoại </label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" disabled="disabled" placeholder="Disabled Input" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Địa chỉ</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" readonly="readonly" placeholder="Read-Only Input" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Trạng thái ĐH
                </label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input className="date-picker form-control col-md-7 col-xs-12" required="required" type="text" />
                </div>
              </div>
              <div className="ln_solid"></div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  renderChiTietDonHang() {
    return (
      <div className="col-md-6 col-xs-12">
        <div className="x_panel">
          <div className="x_title">
            <h2>Chi tiết đơn hàng</h2>
            <div className="clearfix"></div>
          </div>
          <div className="x_content">
            <br />
            <form className="form-horizontal form-label-left input_mask">
              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Họ & Tên</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" placeholder="Default Input" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Số Điện thoại </label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" disabled="disabled" placeholder="Disabled Input" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Địa chỉ</label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input type="text" className="form-control" readonly="readonly" placeholder="Read-Only Input" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-md-3 col-sm-3 col-xs-12">Trạng thái ĐH
                </label>
                <div className="col-md-9 col-sm-9 col-xs-12">
                  <input className="date-picker form-control col-md-7 col-xs-12" required="required" type="text" />
                </div>
              </div>
              <div className="ln_solid"></div>
            </form>
          </div>
        </div>
      </div>
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
    );
  }


  render() {
    return (
      <div>
        <div className="row">
          {this.renderDanhSachDonHang()}
        </div>
        <div className="row">
          {this.renderThongTinKH()}
          {this.renderChiTietDonHang()}
        </div>
      </div>
    );
  }
}
