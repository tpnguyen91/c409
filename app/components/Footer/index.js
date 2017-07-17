import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="color color-primary">
        <div className="container">
          <div className="row">
            <div className="footer-ribbon">
              <span>Thông tin liên hệ</span>
            </div>
            <div className="col-md-4">
              <div className="contact-details">
                <h4>Thông tin liên hệ</h4>
                <ul className="contact">
                  <li><p><i className="fa fa-map-marker"></i> <strong>Địa chỉ:</strong> 409 Lê Đại Hành, Quận 11, TP HCM</p></li>
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
                <p>© Copyright 2017. Bản Quyền thuộc công ty c409.</p>
              </div>
            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
