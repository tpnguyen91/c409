import React, { Component } from 'react';
import {
  DanhSachDaSoXoMN,
} from './data';
import moment from 'moment';
var DatePicker = require("react-bootstrap-date-picker");

const list =[
  { name: 'KQXS TP Hồ Chí Minh', isDayResult: 0},
  { name: 'KQXS Bình Dương', isDayResult: 0},
  { name: 'KQXS Trà Vinh', isDayResult: 0},
  { name: 'KQXS Vĩnh Long', isDayResult: 0},
  { name: 'KQXS Cà Mau', isDayResult: 0},
  { name: 'KQXS Đồng Tháp', isDayResult: 0},
  { name: 'KQXS Bạc Liêu', isDayResult: 0},
  { name: 'KQXS Bến Tre', isDayResult: 0},
  { name: 'KQXS Vũng Tàu', isDayResult: 0},
  { name: 'KQXS Cần Thơ', isDayResult: 0},
  { name: 'KQXS Đồng Nai', isDayResult: 0},
  { name: 'KQXS Sóc Trăng', isDayResult: 0},
  { name: 'KQXS An Giang', isDayResult: 0},
  { name: 'KQXS Bình Thuận', isDayResult: 0},
  { name: 'KQXS Tây Ninh', isDayResult: 0},
  { name: 'KQXS Bình Phước', isDayResult: 0},
  { name: 'KQXS Hậu Giang', isDayResult: 0},
  { name: 'KQXS Long An', isDayResult: 0},
  { name: 'KQXS Đà Lạt', isDayResult: 0},
  { name: 'KQXS Kiên Giang', isDayResult: 1},
  { name: 'KQXS Tiền Giang', isDayResult: 0},
];

class LeftColumn extends Component {

  constructor (props) {
   super(props)
   this.state = {
      value: new Date().toISOString(),
   };
   this.handleChange = this.handleChange.bind(this);
 }

 handleChange(value, formattedValue) {
   this.setState({
     value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
     formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
   });
 }

  renderTraCuuLoto() {
    return (
      <div class="col-md-3">
							<div className="panel-group panel-group-sm" id="accordion">
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse1One">
												<b>TRA CỨU KẾT QUẢ LÔ TÔ</b>
											</a>
										</h4>
									</div>
									<div id="" className="accordion-body collapse in">
  						<div className="panel-body">
                <form className="form-group wrapper">
                  <div className="widthDiv">
                    <label className="radio-inline"><input type="radio" checked name="optradio" /><b>Kiểm tra vé trúng thưởng</b></label>
                  </div>
                  <hr />
                  <div className="widthDiv">
                    <label className="radio-inline"><input type="radio" name="optradio" /><b>Xem Kết quả theo ngày</b></label>
                  </div>
                  <hr />
                  <DatePicker
                    id="example-datepicker"
                    value={this.state.value}
                    onChange={this.handleChange}
                    dateFormat={'DD/MM/YYYY'}
                  />
                  <input className="form-control inputSeri" placeholder="Nhập số sêri" id="pwd" />
                  <button type="button" className="btn btn-secondary marginTop">Xem Kết Quả</button>
                </form>
  						</div>
  					</div>
  				</div>
  			</div>
  		</div>
    );
  }

  renderItem() {
    let d = new Date();
    let n = d.getDay();
    return (
      <div class="col-md-3">
							<div className="panel-group panel-group-sm" id="accordion">
								<div className="panel panel-default">
									<div className="panel-heading">
										<h4 className="panel-title">
											<a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#collapse1One">
												<b>KẾT QUẢ XỔ SỐ MIỀN NAM <i class="fa fa-calendar" style={{ fontSize: 24 }}></i></b>
											</a>
										</h4>
									</div>
									<div id="collapse1One" className="accordion-body collapse in">
										<div className="panel-body">
                      <div className="tabs tabs-vertical tabs-left tabs-navigation">
                        <ul className="nav nav-tabs col-sm-3">
                          {
                            DanhSachDaSoXoMN[n].data.map(item => (
                              <li>
                                <a
                                  href="#tabsNavigation1"
                                  data-toggle="tab"
                                >
                                  {item}
                                  <span style={{ marginLeft: 5, fontSize: 10 }} className="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span>
                                </a>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
										</div>
									</div>
								</div>
							</div>
						</div>
    );
  }

  render() {
    return (
      <div className="col-md-3" >
          {this.renderItem()}
          {this.renderTraCuuLoto()}
          <div className='divAds' />
          <div className='divAds' />
      </div>
    );
  }
}

export default LeftColumn;
