import React, { Component } from 'react';
import superagent from 'superagent';
import {
  DanhSachThoCung,
  DanhSach12ConGiap,
  DanhSach100ConSo
} from './data';


class RightColumn extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [],
    }
  }
  
  componentWillMount() {
    this.fetchNews();
  }

  fetchNews() {
    superagent
    .get(`/apiClient/v1/news/`)
    .end((err, res) => {
      const news = (res.body || {}).news || [];
      const page = Math.ceil(news.length / 10);
      this.setState({ news, page });
    })
  }

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
    const { news } = this.state;
    return (
        <div className="col-md-3">
          <a href='/dat-so' className="btn btn-secondary btn-lg fullWidthBtn">Mua Số Online</a>
          {
            news.length > 0 ?
              <div className="panel-group panel-group-sm" id="accordion3">
                <div className="panel panel-default">
                  <div id="collapse4One" className="accordion-body collapse in" aria-expanded="true">
                    <div className="panel-body">
                      <ul className="nav nav-list narrow">
                        {
                          news.map(item => {
                            return (
                              <li><a href={`/tin-tuc/${item._id}`}>{item.title}</a></li>
                            );
                          })
                        }
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              : null
          }
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
