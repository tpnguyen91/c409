import React, { Component } from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import superagent from 'superagent';
import Header from '../Header'
import Footer from '../Footer'
import LeftColumn from '../Home/LeftColumn';
import RightColumn from '../Home/RightColumn';
import '../Home/styles.css';
import '../Home/templateConGiap.css';

import {
  listLogo,
  DayOfWeedk,
  ListDaiDongNai,
  ListDaiBinhThuan,
  DataGiaiThuong2So,
  DataGiaiThuong3So,
  DataGiaiThuong4So,
  COLOR_HILIGHT,
} from '../Home/data';

export default class ResultLottery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment(),
      isOpen: false,
      resultLottery: [],
    }
    this.onChangeDate = this.onChangeDate.bind(this);
    this.toggleCalendar = this.toggleCalendar.bind(this);
  }

  componentWillMount() {
    this.fetchData();
  }

  fetchData() {
    const { resultLottery, selectedDate } = this.state;
    const urlDate = selectedDate.format('DD-MM-YYYY');
     superagent
      .get(`/api/v1/crawler/${urlDate}`)
      .end((err, res) => {
        const arr = (res.body || {}).result || [];
        console.log(arr);
        this.setState({ resultLottery: arr });
      })
  }

  onChangeDate(selectedDate) {
    this.setState({
      selectedDate,
      isOpen: !this.state.isOpen
    }, () => {
      this.fetchData();
    });
  }

  toggleCalendar (e) {
    e && e.preventDefault()
    this.setState({isOpen: !this.state.isOpen})
  }

  renderCoCauGiaiThuong() {
    return (
      <div className="tabs">
          <div className="divTitle1"><span>CƠ CẤU GIẢI THƯỞNG VÉ SỐ LÔ TÔ BÌNH THUẬN</span></div>
          <ul className="nav nav-tabs nav-justified">
            <li className="active">
              <a href="#2so" data-toggle="tab" className="text-center" aria-expanded="true">Vé số Lô Tô loại 2 số</a>
            </li>
            <li className="">
              <a href="#3so" data-toggle="tab" className="text-center" aria-expanded="false">Vé số Lô Tô loại 3 số</a>
            </li>
            <li className="">
              <a href="#4so" data-toggle="tab" className="text-center" aria-expanded="true">Vé số Lô Tô loại 4 số</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="2so" className="tab-pane active">
              <table className="kqxs" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    {
                      DataGiaiThuong2So.map((item, index) => (
                        <th style={{ fontSize: 13, color: 'red' }}><b>{item.name}</b><br/></th>
                      ))
                    }
                  </tr>
                  {
                    DataGiaiThuong2So[0].money.map((item, indexRow) => (
                      <tr>
                        {
                          DataGiaiThuong2So.map((itemMoney, index) => (
                            <td><div style={{ fontSize: 13 }}>{itemMoney.money[indexRow]}</div></td>
                          ))
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div id="3so" className="tab-pane">
              <table className="kqxs" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    {
                      DataGiaiThuong3So.map((item, index) => (
                        <th style={{ fontSize: 13, color: 'red' }}><b>{item.name}</b><br/></th>
                      ))
                    }
                  </tr>
                  {
                    DataGiaiThuong3So[0].money.map((item, indexRow) => (
                      <tr>
                        {
                          DataGiaiThuong3So.map((itemMoney, index) => (
                            <td><div style={{ fontSize: 13 }}>{itemMoney.money[indexRow]}</div></td>
                          ))
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
            <div id="4so" className="tab-pane">
              <table className="kqxs" width="100%" border="0" cellpadding="0" cellspacing="0">
                <tbody>
                  <tr>
                    {
                      DataGiaiThuong4So.map((item, index) => (
                        <th style={{ fontSize: 13, color: 'red' }}><b>{item.name}</b><br/></th>
                      ))
                    }
                  </tr>
                  {
                    DataGiaiThuong4So[0].money.map((item, indexRow) => (
                      <tr>
                        {
                          DataGiaiThuong4So.map((itemMoney, index) => (
                            <td><div style={{ fontSize: 13 }}>{itemMoney.money[indexRow]}</div></td>
                          ))
                        }
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
      </div>
    );
  }

  renderDaiDuThuong() {
    let d = new Date();
    let n = d.getDay();
    return (
      <div style={{ marginBottom: 20 }}>
        <div className="divTitle"><span>ĐÀI DỰ THƯỞNG LÔ TÔ</span></div>
        <table className="kqxs" width="100%" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr>
              <th></th>
              <th style={{ color: 'red', fontSize: 20 }}><b>Bình Thuận</b><br/></th>
              <th style={{ color: 'red', fontSize: 20 }}><b>Đồng Nai</b><br/></th>
            </tr>
            {
              DayOfWeedk.map((item, index) => (
                <tr>
                  <td style={{ color: '#0088cc' }}>{item}</td>
                  <td><div style={{ backgroundColor: n === index ? COLOR_HILIGHT : 'white', color: n === index ? 'white' : 'black' }}>{ListDaiBinhThuan[index]}</div></td>
                  <td><div style={{ backgroundColor: n === index ? COLOR_HILIGHT : 'white', color: n === index ? 'white' : 'black' }}>{ListDaiDongNai[index]}</div></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }

  renderKQSX(item) {
    return (
      <div style={{ marginBottom: 20 }}>
        <div className="divTitle">
          <span>KẾT QUẢ XỔ SỐ MIỀN NAM - <a
            href='#' style={{ color: 'white' }}
            onClick={this.toggleCalendar}>
              {item.date}
            </a>
          {
            this.state.isOpen && (
              <DatePicker
                  selected={this.state.selectedDate}
                  onChange={this.onChangeDate}
                  withPortal
                  inline />
            )
          }
          </span>
          <a
            href='#'
            onClick={() => alert('Tính năng đang được hoàn thiện!')}
            style={{
              position: 'relative',
              float: 'right',
              top: '2',
              right: '5',

            }}
          ><i className="fa fa-bar-chart" style={{ color: 'white', fontSize: 20 }} aria-hidden="true"></i></a>
        </div>
        <table className="kqxs" width="100%" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr id="kqxs">
              <th></th>
              {
                item.data.map(v => {
                  return (
                     <th><b>{v.title}</b><br/><span>{v.code}</span></th>
                  );
                })
              }
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G8</td>
              {
                 item.data.map(v => {
                  return (
                     <td><div style={{ color: 'red', fontSize: 20 }}>{v.giai8}</div></td>
                  );
                })
              }
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G7</td>
              {
                 item.data.map(v => {
                  return (
                     <td><div>{v.giai7}</div></td>
                  );
                })
              }
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G6</td>
              {
                 item.data.map(v => {
                  return (
                    <td>
                    {
                      v.giai6.split('-').map(item => {
                        return (
                          <div>{item}</div>
                        );
                      })
                    }
                    </td>
                  );
                })
              }
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G5</td>
                {
                 item.data.map(v => {
                  return (
                    <td>{v.giai5}</td>
                  );
                })
              }
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G4</td>
              {
                 item.data.map(v => {
                  return (
                    <td>
                    {
                      v.giai4.split('-').map(item => {
                        return (
                          <div>{item}</div>
                        );
                      })
                    }
                    </td>
                  );
                })
              }
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G3</td>
               {
                 item.data.map(v => {
                  return (
                    <td>
                    {
                      v.giai3.split('-').map(item => {
                        return (
                          <div>{item}</div>
                        );
                      })
                    }
                    </td>
                  );
                })
              }
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G2</td>
               {
                 item.data.map(v => {
                  return (
                    <td>{v.giai2}</td>
                  );
                })
              }
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G1</td>
               {
                 item.data.map(v => {
                  return (
                    <td>{v.giai1}</td>
                  );
                })
              }
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>ĐB</td>
               {
                 item.data.map(v => {
                  return (
                    <td style={{ color: 'red', fontSize: 20 }}>{v.giaidb}</td>
                  );
                 })
               }
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  renderMain() {
    const { resultLottery } = this.state;
    return (
      <div className="col-md-6">
      {
        resultLottery.map(item => {
          return (
            this.renderKQSX(item)
          );
        })
      }
      </div>
    );
  }

  renderListCty() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="owl-carousel owl-theme show-nav-hover" data-plugin-options='{"items": 6, "margin": 10, "loop": false, "nav": true, "dots": false}'>
            {
              listLogo.map(item => (
                <div>
                  <img alt="" className="img-responsive img-rounded sizeImageLogo" src={item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="body">
      <Header />
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <marquee
                  className="row_marquee"
                  direction="left">
                    <p className="title">Thứ 2: Đồng Tháp - Thứ 3: Bà Rịa - Thứ 4: Sóc Trăng - Thứ 5: Bình Thuận - Thứ 6: Bình Dương - Thứ 7: Bình Phước - Chủ Nhật: Lâm Đồng</p>
                </marquee>
              </div>
        </div>
        <div className="row">
          <LeftColumn />
          {this.renderMain()}
          <RightColumn />
        </div>
        <hr />
        {this.renderListCty()}
      </div>
      <hr />
      <Footer />
    </div>
    );
  }
}

