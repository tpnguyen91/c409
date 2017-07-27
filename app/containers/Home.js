import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="body">
      <header id="header" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAt": 57, "stickySetTop": "-57px", "stickyChangeLogo": true}'>
        <div className="header-body">
          <div className="header-container container">
            <div className="header-row">
              <div className="header-column">
                <div className="header-logo">
                  <a href="index.html">
                    <img alt="Porto" width="111" height="54" data-sticky-width="82" data-sticky-height="40" data-sticky-top="33" src="img/logo.png" />
                  </a>
                </div>
              </div>
              <div className="header-column">
                <div className="header-row">
                  <div className="header-search hidden-xs">
                    <form id="searchForm" action="page-search-results.html" method="get">
                      <div className="input-group">
                        <input type="text" className="form-control" name="q" id="q" placeholder="Tìm kiếm..." required />
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="submit"><i className="fa fa-search"></i></button>
                        </span>
                      </div>
                    </form>
                  </div>
                  <nav className="header-nav-top">
                    <ul className="nav nav-pills">
                      <li className="hidden-xs">
                        <a href="contact-us.html"><i className="fa fa-angle-right"></i> Liên hệ 111</a>
                      </li>
                      <li>
                        <span className="ws-nowrap"><i className="fa fa-phone"></i> (123) 456-789</span>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="header-row">
                  <div className="header-nav">
                    <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main">
                      <i className="fa fa-bars"></i>
                    </button>
                    <ul className="header-social-icons social-icons hidden-xs">
                      <li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                    </ul>
                    <div className="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1 collapse">
                      <nav>
                        <ul className="nav nav-pills" id="mainNav">
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="index-cc409.html">
                              Trang chủ
                            </a>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              Lĩnh vực
                            </a>
                            <ul className="dropdown-menu">
                              <li className="dropdown-submenu">
                                <a href="#">Ngành nghề 1</a>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Ngành nghề 2</a>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Ngành nghề 3</a>
                              </li>

                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              Thông tin Công ty
                            </a>
                            <ul className="dropdown-menu">
                              <li><a href="about-us.html">About Us</a></li>
                              <li><a href="about-us-basic.html">About Us - Basic</a></li>
                              <li><a href="about-me.html">About Me</a></li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="contact-us.html">
                              Liên hệ
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div role="main" className="main">

        <section className="page-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <ul className="breadcrumb">
                  <li><a href="#">Trang chủ</a></li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <h1>Công Ty Cc409</h1>
              </div>
            </div>
          </div>
        </section>

        <div className="container">

          <div className="row">
            <div className="col-md-3">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h6 className="panel-title">
                        <b>Trực Tiếp Kết Quả Xổ Số</b>
                    </h6>
                  </div>
                  <div id="collapse1One" className="accordion-body collapse in">
                    <div className="panel-body">
                      <ul className="list list-icons list-icons-sm">
                        <li><i className="fa fa-caret-right"></i> Trực tiếp Xổ Số Miền Nam</li>
                        <li><i className="fa fa-caret-right"></i> Trực tiếp Xổ Số Miền Bắc</li>
                        <li><i className="fa fa-caret-right"></i> Trực tiếp Xổ Số Miền Trung</li>
                        <li><i className="fa fa-caret-right"></i> Trực tiếp Xổ Số Vietlott</li>
                    </ul>

                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h6 className="panel-title">
                        <b> Lịch xổ số Hôm Nay </b>
                    </h6>
                  </div>
                  <div id="collapse1One" className="accordion-body collapse in">
                    <div className="panel-body">
                      <ul className="list list-icons list-icons-sm">
                        <li><i className="fa fa-caret-right"></i> <b>Trực tiếp Xổ Số Miền Nam</b>
                          <ul className="list list-icons list-primary list-side-borders">
                            <li><i className="fa fa-caret-right"></i> Kết quả xổ số Cần Thơ</li>
                            <li><i className="fa fa-caret-right"></i> Kết quả xổ số Đồng Nai</li>
                            <li><i className="fa fa-caret-right"></i> Kết quả xổ số Sóc Trăng</li>
                          </ul>
                        </li>
                        <li><i className="fa fa-caret-right"></i> <b>Trực tiếp Xổ Số Miền Bắc</b>
                          <ul className="list list-icons list-primary list-side-borders">
                            <li><i className="fa fa-caret-right"></i> Kết quả xổ số Bắc Ninh</li>
                          </ul>
                        </li>
                        <li><i className="fa fa-caret-right"></i> <b>Trực tiếp Xổ Số Miền Trung</b>
                          <ul className="list list-icons list-primary list-side-borders">
                            <li><i className="fa fa-caret-right"></i> Kết quả xổ số Đà Nẵng</li>
                            <li><i className="fa fa-caret-right"></i> Kết quả xổ số Khánh Hoà</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h6 className="panel-title">
                        <b>Tra cứu kết quả xổ số</b>
                    </h6>
                  </div>
                  <div id="collapse1One" className="accordion-body collapse in">
                    <div className="panel-body">
                      <ul className="list list-icons list-icons-sm">
                        <li><i className="fa fa-caret-right"></i> Trực tiếp Xổ Số Miền Nam</li>
                        <li><i className="fa fa-caret-right"></i> Trực tiếp Xổ Số Miền Bắc</li>
                        <li><i className="fa fa-caret-right"></i> Trực tiếp Xổ Số Miền Trung</li>
                        <li><i className="fa fa-caret-right"></i> Trực tiếp Xổ Số Vietlott</li>
                    </ul>
                    </div>
                  </div>
                </div>
            </div>
            <div className="col-md-6">
                    <div className="price_table_container c409_south">
                      <div className="price_table_body">
                            <div className="price_table_row primary-bg c409_table_title"><strong>KẾT QUẢ XỔ SỐ MIỀN NAM</strong></div>
                            <div className="price_table_row">
                              <div className="c409_table_column"><div className="c409_table_column_name"><span>Thứ sáu</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_name"><span>Vĩnh Long</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_name"><span>Bình Dương</span></div></div>
                              <div className="c409_table_column"><div class="c409_table_column_name"><span>Trà Vinh</span></div></div>
                            </div>
                            <div className="price_table_row">
                              <div className="c409_table_column"><div><span><b>05/05/2017</b></span></div></div>
                              <div className="c409_table_column"><div><span>XSVL - 38VL18</span></div></div>
                              <div className="c409_table_column"><div><span>XSBD - 05KS18</span></div></div>
                              <div className="c409_table_column"><div><span>XSTV - 26TV18</span></div></div>
                            </div>
                            <div className="price_table_row">
                              <div className="c409_table_column"><div><span>Giải tám</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_important"><span>57</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_important"><span>03</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_important"><span>45</span></div></div>
                            </div>
                            <div className="price_table_row">
                              <div className="c409_table_column"><div><span>Giải bảy</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>059</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>241</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>749</span></div></div>
                            </div>
                            <div className="price_table_row">
                              <div className="c409_table_column"><div><span>Giải sáu</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>1668</span><span>0742</span><span>1055</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>9911</span><span>6156</span><span>6582</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>2250</span><span>6104</span><span>3526</span></div></div>
                            </div>
                            <div className="price_table_row">
                              <div className="c409_table_column"><div><span>Giải năm</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>0986</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>4345</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>2872</span></div></div>
                            </div>
                            <div className="price_table_row">
                              <div className="c409_table_column"><div><span>Giải sáu</span></div></div>
                              <div className="c409_table_column">
                                <div className="c409_table_column_result">
                                  <span>1668</span>
                                  <span>0742</span>
                                  <span>1055</span>
                                  <span>1668</span>
                                  <span>0742</span>
                                  <span>1055</span>
                                  <span>1055</span>
                                </div>
                              </div>
                              <div className="c409_table_column">
                                <div className="c409_table_column_result">
                                  <span>1668</span>
                                  <span>0742</span>
                                  <span>1055</span>
                                  <span>1668</span>
                                  <span>0742</span>
                                  <span>1055</span>
                                  <span>1055</span>
                                </div>
                              </div>
                              <div className="c409_table_column">
                                <div className="c409_table_column_result">
                                  <span>1668</span>
                                  <span>0742</span>
                                  <span>1055</span>
                                  <span>1668</span>
                                  <span>0742</span>
                                  <span>1055</span>
                                  <span>1055</span>
                                </div>
                              </div>
                            </div>
                            <div className="price_table_row">
                              <div className="c409_table_column"><div><span>Giải ba</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>16687</span><span>07423</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>99118</span><span>61563</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>22502</span><span>61040</span></div></div>
                            </div>
                            <div className="price_table_row">
                              <div className="c409_table_column"><div><span>Giải nhì</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>16689</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>99117</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>22505</span></div></div>
                            </div>
                            <div className="price_table_row">
                              <div className="c409_table_column"><div><span>Giải nhất</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>16689</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>99117</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_result"><span>22505</span></div></div>
                            </div>
                            <div className="price_table_row">
                              <div className="c409_table_column"><div><span>Giải đặc biệt</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_important"><span>300182</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_important"><span>510511</span></div></div>
                              <div className="c409_table_column"><div className="c409_table_column_important"><span>718532</span></div></div>
                            </div>
                      </div>
                  </div>
                  <div className="price_table_container c409_north">
                    <div className="price_table_body">
                          <div className="price_table_row primary-bg c409_table_title"><strong>KẾT QUẢ XỔ SỐ MIỀN BẮC - 05/05/2017</strong></div>
                          <div className="price_table_row">
                            <div className="c409_table_column_1"><div><span>Thứ sáu</span></div></div>
                            <div className="c409_table_column_3"><div><span>Ký hiệu trùng đặc biệt: 5UZ-10UZ-9UZ</span></div></div>
                          </div>
                          <div className="price_table_row">
                            <div className="c409_table_column_1"><div><span>Giải DB</span></div></div>
                            <div className="c409_table_column_3"><div className="c409_table_column_important"><span className="col_1">95129</span></div></div>
                          </div>
                          <div className="price_table_row">
                            <div className="c409_table_column_1"><div><span>Giải nhất</span></div></div>
                            <div className="c409_table_column_3"><div className="c409_table_column_result">
                              <span className="col_1">94246</span>
                            </div></div>
                          </div>
                          <div className="price_table_row">
                            <div className="c409_table_column_1"><div><span>Giải nhì</span></div></div>
                            <div className="c409_table_column_3"><div className="c409_table_column_result">
                              <span className="col_2">16368</span>
                              <span className="col_2">07542</span>
                            </div></div>
                          </div>
                          <div className="price_table_row">
                            <div className="c409_table_column_1"><div><span>Giải ba</span></div></div>
                            <div className="c409_table_column_3"><div className="c409_table_column_result">
                              <span className="col_3">16638</span>
                              <span className="col_3">07442</span>
                              <span className="col_3">99151</span>
                              <span className="col_3">61563</span>
                              <span className="col_3">99171</span>
                              <span className="col_3">61583</span>
                            </div></div>
                          </div>
                          <div className="price_table_row">
                            <div className="c409_table_column_1"><div><span>Giải tư</span></div></div>
                            <div className="c409_table_column_3"><div className="c409_table_column_result">
                              <span className="col_2">1668</span>
                              <span className="col_2">0742</span>
                              <span className="col_2">9911</span>
                              <span className="col_2">6153</span>
                            </div></div>
                          </div>
                          <div className="price_table_row">
                            <div className="c409_table_column_1"><div><span>Giải năm</span></div></div>
                            <div className="c409_table_column_3"><div className="c409_table_column_result">
                              <span className="col_3">1638</span>
                              <span className="col_3">0442</span>
                              <span className="col_3">9151</span>
                              <span className="col_3">1563</span>
                              <span className="col_3">9171</span>
                              <span className="col_3">6583</span>
                            </div></div>
                          </div>
                          <div className="price_table_row">
                            <div className="c409_table_column_1"><div><span>Giải sáu</span></div></div>
                            <div className="c409_table_column_3"><div className="c409_table_column_result">
                              <span className="col_3">558</span>
                              <span className="col_3">021</span>
                              <span className="col_3">463</span>
                            </div></div>
                          </div>
                          <div className="price_table_row">
                            <div className="c409_table_column_1"><div><span>Giải bảy</span></div></div>
                            <div className="c409_table_column_3"><div className="c409_table_column_important">
                              <span className="col_4">76</span>
                              <span className="col_4">32</span>
                              <span className="col_4">14</span>
                              <span className="col_4">07</span>
                            </div></div>
                          </div>
                    </div>
                </div>
                <div className="price_table_container c409_center">
                  <div className="price_table_body">
                        <div className="price_table_row primary-bg c409_table_title"><strong>KẾT QUẢ XỔ SỐ MIỀN TRUNG</strong></div>
                        <div className="price_table_row">
                          <div className="c409_table_column"><div className="c409_table_column_name"><span>Thứ sáu</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_name"><span>Gia Lai</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_name"><span>Ninh Thuan</span></div></div>
                        </div>
                        <div className="price_table_row">
                          <div className="c409_table_column"><div><span><b>05/05/2017</b></span></div></div>
                          <div className="c409_table_column"><div><span>XSVL - 38VL18</span></div></div>
                          <div className="c409_table_column"><div><span>XSBD - 05KS18</span></div></div>
                        </div>
                        <div className="price_table_row">
                          <div className="c409_table_column"><div><span>Giải tám</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_important"><span>57</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_important"><span>03</span></div></div>
                        </div>
                        <div className="price_table_row">
                          <div className="c409_table_column"><div><span>Giải bảy</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_result"><span>059</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_result"><span>241</span></div></div>
                        </div>
                        <div className="price_table_row">
                          <div className="c409_table_column"><div><span>Giải sáu</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_result"><span>1668</span><span>0742</span><span>1055</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_result"><span>9911</span><span>6156</span><span>6582</span></div></div>
                        </div>
                        <div className="price_table_row">
                          <div className="c409_table_column"><div><span>Giải năm</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_result"><span>0986</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_result"><span>4345</span></div></div>
                        </div>
                        <div className="price_table_row">
                          <div className="c409_table_column"><div><span>Giải sáu</span></div></div>
                          <div className="c409_table_column">
                            <div className="c409_table_column_result">
                              <span>1668</span>
                              <span>0742</span>
                              <span>1055</span>
                              <span>1668</span>
                              <span>0742</span>
                              <span>1055</span>
                              <span>1055</span>
                            </div>
                          </div>
                          <div className="c409_table_column">
                            <div className="c409_table_column_result">
                              <span>1668</span>
                              <span>0742</span>
                              <span>1055</span>
                              <span>1668</span>
                              <span>0742</span>
                              <span>1055</span>
                              <span>1055</span>
                            </div>
                          </div>                    </div>
                        <div className="price_table_row">
                          <div className="c409_table_column"><div><span>Giải ba</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_result"><span>16687</span><span>07423</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_result"><span>99118</span><span>61563</span></div></div>
                        </div>
                        <div className="price_table_row">
                          <div className="c409_table_column"><div><span>Giải nhì</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_result"><span>16689</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_result"><span>99117</span></div></div>
                        </div>
                        <div className="price_table_row">
                          <div className="c409_table_column"><div><span>Giải nhất</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_result"><span>16689</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_result"><span>99117</span></div></div>
                        </div>
                        <div className="price_table_row">
                          <div className="c409_table_column"><div><span>Giải đặc biệt</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_important"><span>300182</span></div></div>
                          <div className="c409_table_column"><div className="c409_table_column_important"><span>510511</span></div></div>
                        </div>
                  </div>
                </div>
                <hr />
            </div>

            <div className="col-md-3">
              <aside className="sidebar">
                <div className="tabs mb-xlg">
                  <ul className="nav nav-tabs">
                    <li className="active"><a href="#popularPosts" data-toggle="tab"><i className="fa fa-star"></i> Popular</a></li>
                    <li><a href="#recentPosts" data-toggle="tab">Recent</a></li>
                  </ul>
                  <div className="tab-content">
                    <div className="tab-pane active" id="popularPosts">
                      <ul className="simple-post-list">
                        <li>
                          <div className="post-image">
                            <div className="img-thumbnail">
                              <a href="blog-post.html">
                                <img src="img/blog/blog-thumb-1.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="post-info">
                            <a href="blog-post.html">Nullam Vitae Nibh Un Odiosters</a>
                            <div className="post-meta">
                               Jan 10, 2015
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-image">
                            <div className="img-thumbnail">
                              <a href="blog-post.html">
                                <img src="img/blog/blog-thumb-2.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="post-info">
                            <a href="blog-post.html">Vitae Nibh Un Odiosters</a>
                            <div className="post-meta">
                               Jan 10, 2015
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-image">
                            <div className="img-thumbnail">
                              <a href="blog-post.html">
                                <img src="img/blog/blog-thumb-3.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="post-info">
                            <a href="blog-post.html">Odiosters Nullam Vitae</a>
                            <div className="post-meta">
                               Jan 10, 2015
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="tab-pane" id="recentPosts">
                      <ul className="simple-post-list">
                        <li>
                          <div className="post-image">
                            <div className="img-thumbnail">
                              <a href="blog-post.html">
                                <img src="img/blog/blog-thumb-2.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="post-info">
                            <a href="blog-post.html">Vitae Nibh Un Odiosters</a>
                            <div className="post-meta">
                               Jan 10, 2015
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-image">
                            <div className="img-thumbnail">
                              <a href="blog-post.html">
                                <img src="img/blog/blog-thumb-3.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="post-info">
                            <a href="blog-post.html">Odiosters Nullam Vitae</a>
                            <div className="post-meta">
                               Jan 10, 2015
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="post-image">
                            <div className="img-thumbnail">
                              <a href="blog-post.html">
                                <img src="img/blog/blog-thumb-1.jpg" alt="" />
                              </a>
                            </div>
                          </div>
                          <div className="post-info">
                            <a href="blog-post.html">Nullam Vitae Nibh Un Odiosters</a>
                            <div className="post-meta">
                               Jan 10, 2015
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="ads"><img src="img/ads.gif" /></div>
                <div className="ads"><img src="img/ads2.jpg" /></div>
                <div className="ads"><img src="img/ads3.png" /></div>
              </aside>
            </div>

          </div>

        </div>

      </div>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="footer-ribbon">
              <span>Thông tin liên hệ</span>
            </div>
            <div className="col-md-3">
              <div className="newsletter">
                <h4>Lời mở đầu</h4>
                <p>"Giới thiệu về công ty....."</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contact-details">
                <h4>Thông tin liên hệ</h4>
                <ul className="contact">
                  <li><p><i className="fa fa-map-marker"></i> <strong>Địa chỉ:</strong> c409 Lê Đại Hành, Quận 11, TP HCM</p></li>
                  <li><p><i className="fa fa-phone"></i> <strong>Điện thoại:</strong> (123) 456-789</p></li>
                  <li><p><i className="fa fa-envelope"></i> <strong>Email:</strong> <a href="mailto:mail@example.com">mail@example.com</a></p></li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <h4>Facebook</h4>
              <ul className="social-icons">
                <li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fa fa-facebook"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <p>© Copyright 2015. All Rights Reserved.</p>
              </div>
            </div>
        </div>
      </footer>
    </div>
    );
  }
}

export default App;
