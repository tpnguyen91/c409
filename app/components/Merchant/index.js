import React, { Component } from 'react';
import Header from '../Header'
import Footer from '../Footer'

const list =[1, 2, 3, 4, 6, 7, 6, 1];

class Merchant extends Component {

  constructor (props) {
   super(props)
   this.state = {
   };
 }

  render() {
    return (
      <div className="body">
      <Header />
        <div className="container">
          <h3 style={{ marginLeft: 50 ,marginTop: 20, color: '#0088cc' }}><b>DANH SÁCH CÁC ĐẠI LÝ</b></h3>
          <div className="row row-centered">
            {
              list.map(item => (
                <div className="col-xs-3 card">
                <img
                  src="http://thoibaotaichinhvietnam.vn/Pictures122014/dauhuysau-tbtc/xskttphcm.jpg"
                  style={{ width: 250, height:  250 }}
                />
                <hr className="short" />
                <div className="containerCard">
                  <span style={{ color: 'red', fontSize: 16 }}><b>Đại Lý Biên Hoà</b></span><br />
                  <span style={{ fontSize: 14 }}><b>Điện thoại:</b> 0902 787 038</span><br />
                  <span style={{ fontSize: 14 }}><b>Địa chỉ:</b> 181 Trương Phước Phan, Bình Trị Đông, Bình Tân, TP HCM</span>
                 </div>
                </div>
              ))
            }
          </div>
        </div>
      <Footer />
    </div>
    );
  }
}

export default Merchant;
