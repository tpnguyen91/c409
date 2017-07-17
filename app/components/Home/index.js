import React, { Component } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import LeftColumn from './LeftColumn';
import RightColumn from './RightColumn';
import './styles.css';
import './templateConGiap.css';

import {
  listLogo,
  DayOfWeedk,
  ListDaiDongNai,
  ListDaiBinhThuan,
  DataGiaiThuong2So,
  DataGiaiThuong3So,
  DataGiaiThuong4So,
  COLOR_HILIGHT,
} from './data';

class Home extends Component {

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

  renderKQSX() {
    return (
      <div style={{ marginBottom: 20 }}>
        <div className="divTitle"><span>KẾT QUẢ XỔ SỐ MIỀN NAM - 30/6/2017</span></div>
        <table className="kqxs" width="100%" border="0" cellpadding="0" cellspacing="0">
          <tbody>
            <tr id="kqxs">
              <th></th>
              <th><b>Vĩnh Long</b><br/><span>Mã: VL</span></th>
              <th><b>Bình Dương</b><br/><span>Mã: BD</span></th>
              <th><b>Trà Vinh</b><br/><span>Mã: TV</span></th>
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G8</td>
              <td><div style={{ color: 'red', fontSize: 20 }}>78</div></td>
              <td><div style={{ color: 'red', fontSize: 20 }}>80</div></td>
              <td><div style={{ color: 'red', fontSize: 20 }}>71</div></td>
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>aa</td>
              <td><div>800</div></td>
              <td><div>037</div></td>
              <td><div>976</div></td>
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G6</td>
              <td><div>1338</div><div>0463</div><div>4646</div></td>
              <td><div>4508</div><div>7905</div><div>2236</div></td>
              <td><div>5530</div><div>3612</div><div>8071</div></td>
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G5</td>
              <td><div>7935</div></td>
              <td><div>3568</div></td>
              <td><div>4693</div></td>
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G4</td>
              <td><div>19103</div><div>50080</div><div>33739</div><div>84402</div><div>16314</div><div>14772</div><div>08106</div></td>
              <td><div>80582</div><div>29932</div><div>55026</div><div>02092</div><div>20279</div><div>35916</div><div>23648</div></td>
              <td><div>20938</div><div>09870</div><div>49444</div><div>73521</div><div>55528</div><div>24804</div><div>99785</div></td>
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G3</td>
              <td><div>27447</div><div>58355</div></td>
              <td><div>61451</div><div>33462</div></td>
              <td><div>22064</div><div>50606</div></td>
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G2</td><td><div>17690</div></td>
              <td><div>63085</div></td>
              <td><div>67504</div></td>
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>G1</td>
              <td><div>47120</div></td>
              <td><div>48964</div></td>
              <td><div>13817</div></td>
            </tr>
            <tr id="kqxs">
              <td style={{ color: '#0088cc' }}>ĐB</td>
              <td><div style={{ color: 'red', fontSize: 20 }}>505417</div></td>
              <td><div style={{ color: 'red', fontSize: 20 }}>807494</div></td>
              <td><div style={{ color: 'red', fontSize: 20 }}>522149</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  renderMain() {
    return (
      <div className="col-md-6">
        {this.renderCoCauGiaiThuong()}
        {this.renderDaiDuThuong()}
        {this.renderKQSX()}
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

export default Home;
