import React, { Component } from 'react';
import Header from '../Header'
import Footer from '../Footer'
import superagent from 'superagent';
import moment from 'moment';

import {
  DanhSachThoCung,
  DanhSach12ConGiap,
  DanhSach100ConSo
} from '../Home/data';

const blogImg = require('../../images/blog.jpg');
export default class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentWillMount() {
    superagent
      .get(`/api/v1/news/`)
      .end((err, res) => {
        const news = (res.body || {}).news || [];
        const page = Math.ceil(news.length / 10);
        this.setState({ news, page });
      })
  }

  renderBlogItem(item) {
    return (
      <article className="post post-medium">
        <div className="row">
          <div className="col-md-12">
            <div className="post-content">
              <h5 style={{ marginBottom: 0 }}><a href={`/tin-tuc/${item._id}`}><b>{item.title}</b></a></h5>
              <div className="post-meta" style={{ marginTop: 10 }}>
                <span><i className="fa fa-calendar"></i>{moment(item.createdAt).format('DD-MM-YYYY')}</span>
                <span><i className="fa fa-user"></i>
                  <a href="#">Admin</a>
                </span>
              </div>
              <hr style={{ marginTop: 0, marginBottom: 10 }} />
              <div style={{ fontSize: 13 }}>
                {item.description} [...]
              </div>
              <a 
                href={`/tin-tuc/${item._id}`} 
                className="btn btn-xs btn-primary pull-left"
                style={{ marginTop: 10 }}
              >Xem Thêm...</a>
            </div>
          </div>
        </div>
      </article>
    );
  }

  renderRightColumn() {
    return (
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
    );
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

  renderControlSearch() {
    return (
      <div className="input-group input-group-sm" style={{ marginTop: 10 }}>
        <input className="form-control" placeholder="Tìm kiếm tin tức" name="s" id="s" type="text" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary btn-lg"><i className="fa fa-search"></i></button>
        </span>
      </div>
    );
  }

  renderNews() {
    return (
      <div className="panel-group panel-group-sm" style={{ marginTop: 10 }} id="accordion3">
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
    );
  }
  

  renderContent() {
    const { title = '', content = '', createdAt } = this.state.news || {};
    return (
      <div className="row">
        <div className="col-md-9" >
          <div className="blog-posts" style={{ marginTop: 15 }}>
          {
            this.state.news.map(item => (
              this.renderBlogItem(item)
            ))
          }
          </div>
        </div>
        <div className="col-md-3">
          {this.renderControlSearch()}
          {this.renderNews()}
          {this.renderRightColumn()}
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
          {this.renderContent()}
        </div>
        <hr />
      </div>
      <Footer />
    </div>
    );
  }
}

