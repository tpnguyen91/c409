import React, { Component } from 'react';
import './styles.css'


const DSTinhThanh = [
  'Chọn Tỉnh/Thành Phố',
  'Thành phố Hà Nội',
  'Tỉnh Hà Giang',
  'Tỉnh Cao Bằng',
  'Tỉnh Bắc Kạn',
  'Tỉnh Tuyên Quang',
  'Tỉnh Lào Cai',
  'Tỉnh Điện Biên',
  'Tỉnh Lai Châu',
  'Tỉnh Yên Bái',
  'Tỉnh Hoà Bình',
  'Tỉnh Sơn La',
  'Tỉnh Thái Nguyên',
  'Tỉnh Lạng Sơn',
  'Tỉnh Quảng Ninh',
  'Tỉnh Bắc Giang',
  'Tỉnh Phú Thọ',
  'Tỉnh Vĩnh Phúc',
  'Tỉnh Bắc Ninh',
  'Tỉnh Hải Dương',
  'Thành phố Hải Phòng',
  'Tỉnh Hưng Yên',
  'Tỉnh Thái Bình',
  'Tỉnh Hà Nam',
  'Tỉnh Nam Định',
  'Tỉnh Ninh Bình',
  'Tỉnh Thanh Hóa',
  'Tỉnh Nghệ An',
  'Tỉnh Hà Tĩnh',
  'Tỉnh Quảng Bình',
  'Tỉnh Quảng Trị',
  'Tỉnh Thừa Thiên Huế',
  'Thành phố Đà Nẵng',
  'Tỉnh Quảng Nam',
  'Tỉnh Quảng Ngãi',
  'Tỉnh Bình Định',
  'Tỉnh Phú Yên',
  'Tỉnh Khánh Hòa',
  'Tỉnh Ninh Thuận',
  'Tỉnh Bình Thuận',
  'Tỉnh Kon Tum',
  'Tỉnh Gia Lai',
  'Tỉnh Đắk Lắk',
  'Tỉnh Đắk Nông',
  'Tỉnh Lâm Đồng',
  'Tỉnh Bình Phước',
  'Tỉnh Tây Ninh',
  'Tỉnh Bình Dương',
  'Tỉnh Đồng Nai',
  'Tỉnh Bà Rịa - Vũng Tàu',
  'Thành phố Hồ Chí Minh',
  'Tỉnh Long An',
  'Tỉnh Tiền Giang',
  'Tỉnh Bến Tre',
  'Tỉnh Trà Vinh',
  'Tỉnh Vĩnh Long',
  'Tỉnh Đồng Tháp',
  'Tỉnh An Giang',
  'Tỉnh Kiên Giang',
  'Thành phố Cần Thơ',
  'Tỉnh Hậu Giang',
  'Tỉnh Sóc Trăng',
  'Tỉnh Bạc Liêu',
  'Tỉnh Cà Mau',
]

export default class Customer extends Component {

  renderChonDanhMuc() {
    return (
      <div>
        <select className="select2_single form-control customDropdown">
          {
            DSTinhThanh.map(item => (
              <option>{item}</option>
            ))
          }
        </select>
        <div className="input-group customInputSearch">
          <input type="text" className="form-control" placeholder="Tìm kiếm khách hàng..." />
          <span className="input-group-btn">
            <button className="btn btn-default" type="button"><i className="fa fa-search"></i></button>
          </span>
        </div>
        <div>
          <a className="btn btn-danger customBtnAddNew">Xoá</a>
          <a className="btn btn-primary customBtnAddNew">Chỉnh sửa</a>
          <a className="btn btn-success customBtnAddNew" href='/khach-hang/tao-moi'>Tạo mới</a>
        </div>
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
            <th className="column-title">Họ & Tên </th>
            <th className="column-title">Điện Thoại </th>
            <th className="column-title">Email </th>
            <th className="column-title">Địa chỉ</th>
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
                <h2>Quản Lý Khách hàng</h2>
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
