import React, { Component } from 'react';

import {
  DanhSachThoCung,
  DanhSach12ConGiap,
  DanhSach100ConSo
} from './data';


class RightColumn extends Component {

  renderThoCung() {
    return (
      <table border="0" cellpadding="2" cellspacing="0" width="100%">
        <tbody>
          {
            DanhSachThoCung.map(item => (
              <tr>
                <td style={{ fontSize: 12 }}>
                  <span className={'conso100 ' + item.code}></span>{item.name}</td>
                {
                  item.cot ?
                  <td align="center" width="19%">
                    <span className={'bol30 ' + item.cot_style}>{item.cot}</span></td> :
                  <td align="center" width="19%">
                      &nbsp;</td>
                }
                {
                  item.cot1 ?
                  <td align="center" width="19%">
                    <span className={'bol30 ' + item.cot_style1}>{item.cot1}</span></td> :
                  <td align="center" width="19%">
                      &nbsp;</td>
                }
                {
                  item.cot2 ?
                  <td align="center" width="19%">
                    <span className={'bol30 ' + item.cot_style2}>{item.cot2}</span></td> :
                  <td align="center" width="19%">
                      &nbsp;</td>
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }

  render12ConGiap() {
    return (
      <table border="0" cellpadding="2" cellspacing="0" width="100%">
        <tbody>
          {
            DanhSach12ConGiap.map(item => (
              <tr>
                <td style={{ fontSize: 12 }}>
                  <span className={'conso100 ' + item.code}></span>{item.name}</td>
                {
                  item.cot ?
                  <td align="center" width="19%">
                    <span className={'bol30 ' + item.cot_style}>{item.cot}</span></td> :
                  <td align="center" width="19%">
                      &nbsp;</td>
                }
                {
                  item.cot1 ?
                  <td align="center" width="19%">
                    <span className={'bol30 ' + item.cot_style1}>{item.cot1}</span></td> :
                  <td align="center" width="19%">
                      &nbsp;</td>
                }
                {
                  item.cot2 ?
                  <td align="center" width="19%">
                    <span className={'bol30 ' + item.cot_style2}>{item.cot2}</span></td> :
                  <td align="center" width="19%">
                      &nbsp;</td>
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }

  render100ConSo() {
    return (
        <table border="0" cellpadding="2" cellspacing="0" width="100%">
          <tbody>
            {
              DanhSach100ConSo.map(item => (
                <tr>
                  <td style={{ fontSize: 12 }}>
                    <span className={'conso100 ' + item.code}></span>{item.name}</td>
                  {
                    item.cot ?
                    <td align="center" width="19%">
                      <span className={'bol30 ' + item.cot_style}>{item.cot}</span></td> :
                    <td align="center" width="19%">
                        &nbsp;</td>
                  }
                  {
                    item.cot1 ?
                    <td align="center" width="19%">
                      <span className={'bol30 ' + item.cot_style1}>{item.cot1}</span></td> :
                    <td align="center" width="19%">
                        &nbsp;</td>
                  }
                  {
                    item.cot2 ?
                    <td align="center" width="19%">
                      <span className={'bol30 ' + item.cot_style2}>{item.cot2}</span></td> :
                    <td align="center" width="19%">
                        &nbsp;</td>
                  }
                </tr>
              ))
            }
          </tbody>
        </table>
    );
  }

  render() {
    return (
        <div className="col-md-3">
          <div className="panel-group panel-group-sm" id="accordion3">
            <div className="panel panel-default">
  						<div className="panel-heading">
  							<h4 className="panel-title">
  								<a className="accordion-toggle" data-toggle="collapse" data-parent="#accordion4" href="#collapse4One" aria-expanded="true">
  									<b>Tin Tức</b>
  								</a>
  							</h4>
  						</div>
  						<div id="collapse4One" className="accordion-body collapse in" aria-expanded="true">
  							<div className="panel-body">
                  <ul className="nav nav-list narrow">
									<li><a href="shortcodes-accordions.html">Mức chi hoa hồng đại lý xổ số</a></li>
									<li><a href="shortcodes-toggles.html">Chuyện cổ tích sau tờ vé số độc đắc</a></li>
									<li><a href="shortcodes-tabs.html">Trúng số triệu USD, thưởng Tết cho nhân viên</a></li>
									<li><a href="shortcodes-icons.html">Cấm khuyến mại xổ số dưới mọi hình thức</a></li>
									<li><a href="shortcodes-icon-boxes.html">  Tự “chế” vé số trúng giải đặc biệt 1,5 tỷ đồng</a></li>
									<li><a href="shortcodes-carousels.html">Thay đổi giờ mở thưởng Xổ số Miền Bắc</a></li>
								</ul>
  							</div>
  					  </div>
  					</div>
          </div>
    			<div className="toggle toggle-secondary toggle-sm" data-plugin-toggle>
    				<section className="toggle active">
    					<label><b>100 con số</b></label>
    					<div className="toggle-content customBoxSo">
    						{this.render100ConSo()}
    					</div>
    				</section>
    				<section className="toggle">
    					<label><b>12 con giáp</b></label>
    					<div className="toggle-content customBoxSo">
                {this.render12ConGiap()}
    					</div>
    				</section>
    				<section className="toggle">
    					<label><b>Thờ cúng</b></label>
    					<div className="toggle-content customBoxSo">
                {this.renderThoCung()}
    					</div>
    				</section>
    			</div>
          <div className="divAds" />
          <div className="divAds" />
    	</div>
    );
  }
}

export default RightColumn;
