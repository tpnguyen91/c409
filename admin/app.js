import React from 'react';
import { Link } from 'react-router';
import Auth from './services/auth';

const App = ({ children, currentUser = {} }) => {
  const name = currentUser.first_name ? [currentUser.first_name, currentUser.last_name].join(' ') : currentUser.username;

  return (
    <div className="main_container">
      <div className="col-md-3 left_col" style={{ height: '100%' }}>
        <div className="left_col scroll-view">
          <div className="navbar nav_title" style={{ border: 0 }}>
            <Link to="/" className="site_title"><i className="fa fa-paw"></i> <span>Cty C409</span></Link>
          </div>
          <div className="clearfix"></div>
          <div className="profile">
            <div className="profile_pic">
              <img src="http://endlesstheme.com/Endless1.5.1/img/user.jpg" alt="..." className="img-circle profile_img" />
            </div>
            <div className="profile_info">
              <span>Welcome,</span>
              <h2>{name}</h2>
            </div>
          </div>
          <br />
        <div id="sidebar-menu" className="main_menu_side hidden-print main_menu">
          <div style={{ height: 80, width: '100%' }}></div>
          <div className="menu_section">
            <ul className="nav side-menu">
              <li><Link to="/admin/tin-tuc"><i className="fa fa-caret-right"></i>Tin Tức </Link></li>
              <li><Link to="/admin/dai-ly"><i className="fa fa-caret-right"></i>Danh Sách Đại Lý </Link></li>
              <li><Link to="/admin/kq-xs"><i className="fa fa-caret-right"></i>Kết Quả Lô Tô </Link></li>
              <li><Link to="/admin/order"><i className="fa fa-caret-right"></i>Đơn hàng </Link></li>
            </ul>
          </div>
        </div>
          <div className="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
              <span className="glyphicon glyphicon-cog" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
              <span className="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
              <span className="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Logout">
              <span className="glyphicon glyphicon-off" aria-hidden="true"></span>
            </a>
          </div>
        </div>
      </div>
      <div className="top_nav">
        <div className="nav_menu">
          <nav className="">
            <div className="nav toggle">
              <a id="menu_toggle"><i className="fa fa-bars"></i></a>
            </div>
            <ul className="nav navbar-nav navbar-right">
              <li className="">
                <a href="javascript:;" className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                  <img src="http://endlesstheme.com/Endless1.5.1/img/user.jpg" alt="" />{name}
                  <span className=" fa fa-angle-down"></span>
                </a>
                <ul className="dropdown-menu dropdown-usermenu pull-right">
                  <li><a href="javascript:;"> Profile</a></li>
                  <li>
                    <a href="javascript:;">
                      <span className="badge bg-red pull-right">50%</span>
                      <span>Settings</span>
                    </a>
                  </li>
                  <li><a href="javascript:;">Help</a></li>
                  <li><a onClick={() => Auth.onLogout()}><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                </ul>
              </li>

              <li role="presentation" className="dropdown">
                <a href="javascript:;" className="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                  <i className="fa fa-envelope-o"></i>
                  <span className="badge bg-green">6</span>
                </a>
                <ul id="menu1" className="dropdown-menu list-unstyled msg_list" role="menu">
                  <li>
                    <a>
                      <span className="image"><img src="http://endlesstheme.com/Endless1.5.1/img/user.jpg" alt="Profile Image" /></span>
                      <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="image"><img src="http://endlesstheme.com/Endless1.5.1/img/user.jpg" alt="Profile Image" /></span>
                      <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="image"><img src="http://endlesstheme.com/Endless1.5.1/img/user.jpg" alt="Profile Image" /></span>
                      <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span className="image"><img src="http://endlesstheme.com/Endless1.5.1/img/user.jpg" alt="Profile Image" /></span>
                      <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li>
                    <div className="text-center">
                      <a>
                        <strong>See All Alerts</strong>
                        <i className="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="right_col" role="main">{React.cloneElement(children, { currentUser })}</div>
      <footer>
        <div className="pull-right">
          copyright by tpnguyen91 <a href="tpnguyen91@gmail.com">email</a>
        </div>
        <div className="clearfix"></div>
      </footer>
    </div>
  );
};

export default App;
