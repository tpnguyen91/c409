import React, { Component } from 'react';

class Header extends Component {
  
  render() {
    const urlLogo = 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/20708501_1492174620842913_9223091692716436737_n.jpg?oh=26cd48513c9a38c7dd55098ca302ef88&oe=59EAF9A1';
    return (
      <header id="header" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAt": 57, "stickySetTop": "-57px", "stickyChangeLogo": true}'>
        <div className="header-body">
          <div className="header-container container">
            <div className="header-row">
              <div className="header-column">
                <div className="header-logo">
                  <a href="/trang-chu">
                    <img alt="Porto" width="400" height="130" data-sticky-width="82" data-sticky-height="40" data-sticky-top="33" src={urlLogo} />
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
                        <a href="contact-us.html"><i className="fa fa-angle-right"></i> Liên hệ</a>
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
                            <a className="dropdown-toggle" href="/trang-chu">
                              Trang chủ
                            </a>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="/dai-ly">
                              Danh sách Đại Lý
                            </a>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              Thống Kê
                            </a>
                            <ul className="dropdown-menu">
                              <li className="dropdown-submenu">
                                <a href="#">Xổ số kiến thiết</a>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="#">Xổ số kiến thiết</a>
                              </li>
                            </ul>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="/tin-tuc">
                              Tin Tức
                            </a>
                          </li>
                          <li className="dropdown">
                            <a className="dropdown-toggle" href="#">
                              Văn Bản Pháp Luật
                            </a>
                            <ul className="dropdown-menu">
                              <li className="dropdown-submenu">
                                <a href="http://www.xosobinhthuan.com.vn/index.php?module=lawtext&cat_id=6">Luật</a>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="http://www.xosobinhthuan.com.vn/index.php?module=lawtext&cat_id=22">Nghị định</a>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="http://www.xosobinhthuan.com.vn/index.php?module=lawtext&cat_id=21">Thông tư</a>
                              </li>
                              <li className="dropdown-submenu">
                                <a href="http://www.xosobinhthuan.com.vn/index.php?module=lawtext&cat_id=8">Văn bản khác</a>
                              </li>
                            </ul>
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
    );
  }
}

export default Header;
