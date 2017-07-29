import React, { Component } from 'react';
import './styles.css'

export default class ResultLotteryInsert extends Component {

  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="x_panel">
            <div className="x_title">
              <h2>Nhập Danh sách số đã bán</h2>
              <div className="clearfix"></div>
            </div>
            <div className="x_content">
              <br />
              <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left">
                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">Ngày tạo<span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <input type="text" id="first-name" required="required" className="form-control col-md-7 col-xs-12" />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12" for="last-name">Chọn file excel <span className="required"></span>
                  </label>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <input type="file" id="last-name" name="last-name" required="required" className="form-control col-md-7 col-xs-12" />
                  </div>
                </div>
                <div className="ln_solid"></div>
                <div className="form-group">
                  <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                    <a className="btn btn-primary" >Huỷ</a>
                    <a className="btn btn-primary" >Làm mới</a>
                    <a className="btn btn-success" >Lưu lại</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
