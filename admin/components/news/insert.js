import React, { Component } from 'react';
import './styles.css'
var CKEditor = require('react-ckeditor-wrapper');


export default class NewsInsert extends Component {

  constructor(props) {
        super(props);
        this.state = {
        content: 'content',
        }
    }

    updateContent(value) {
        this.setState({content:value})
    }


  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="x_panel">
            <div className="x_title">
              <h2>Thêm mới Tin tức</h2>
              <div className="clearfix"></div>
            </div>
            <div className="x_content">
              <br />
              <form id="demo-form2" data-parsley-validate className="form-horizontal form-label-left">
              <div className="row">
                <div className="col-md-6 col-sm-12 form-group">
                  <label htmlFor="ex3">Email address</label>
                  <input type="text" id="ex3" className="form-control" placeholder=" " />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-sm-12 form-group">
                  <label htmlFor="ex3">Email address</label>
                  <input type="text" id="ex3" className="form-control" placeholder=" " />
                </div>
              </div>
              <CKEditor
                value={this.state.content}
                onChange={this.updateContent.bind(this)}
              />
                <div className="ln_solid"></div>
                <div className="form-group">
                  <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                    <button className="btn btn-primary" type="button">Huỷ</button>
                    <button className="btn btn-primary" type="reset">Làm mới</button>
                    <button type="submit" className="btn btn-success">Lưu lại</button>
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
