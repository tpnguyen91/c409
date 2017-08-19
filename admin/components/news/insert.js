import React, { Component } from 'react';
import superagent from 'superagent';
import AlertContainer from 'react-alert'
import './styles.css'

var CKEditor = require('react-ckeditor-wrapper');


export default class NewsInsert extends Component {

  constructor(props) {
      super(props);
      this.state = {
      news: {
        title: '',
        content: '',
        description: '',
      },
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  alertOptions = {
    offset: 14,
    position: 'top left',
    theme: 'light',
    time: 5000,
    transition: 'scale'
  }

  showAlert = () => {
    this.msg.show('Đặt số thành công', {
      time: 4000,
      type: 'success',
    })
  }

   showAlertFail = () => {
    this.msg.show('Đặt số thất bại', {
      time: 4000,
      type: 'error',
    })
  }

   showAlertInfo = (msg) => {
    this.msg.show(msg, {
      time: 4000,
      type: 'info',
    })
  }

  updateContent(value) {
    const { news } = this.state;
    news.content = value;
    this.setState({ news });
  }

  onChange(e) {
    const { name, value } = e.target;
    console.log(name +  + value);
    const { news } = this.state;
    news[name] = value;
    this.setState({ news });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(this.state.news);
    superagent
      .post('/api/v1/news')
      .set('token', this.props.currentUser.token)
      .send({ news: this.state.news })
      .end((err, res) => {
        if (!err) this.props.router.push('/admin/tin-tuc')
      })
  }

  onCancel() {
    this.props.router.push('/admin/tin-tuc')
  }

  render() {
    const { title = '', content = '', description = '' } = this.state.news || {};

    return (
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <AlertContainer ref={a => this.msg = a} {...this.alertOptions} />
          <div className="x_panel">
            <div className="x_title">
              <h2>Thêm mới Tin tức</h2>
              <div className="clearfix"></div>
            </div>
            <div className="x_content">
              <br />
              <form
                id="demo-form2"
                data-parsley-validate
                onSubmit={this.onSubmit}
                className="form-horizontal form-label-left">
              <div className="form-group">
                <label for="ex3">Tiêu đề</label>
                <input
                  value={title}
                  name="title"
                  type="text"
                  className="form-control"
                  onChange={this.onChange}
                  placeholder="tên bài viết..." />
              </div>
              <div className="form-group">
                <label for="ex3">Mô tả ngắn</label>
                <textarea
                  value={description}
                  name="description"
                  className="form-control"
                  onChange={this.onChange}
                  placeholder="trích dẫn ngắn của bài viết..." />
              </div>
              <div className="form-group">
                <label for="ex3">Nội dung</label>
                <CKEditor
                  value={content}
                  onChange={this.updateContent.bind(this)}
                  placeholder="nội dung..."
                />
              </div>

                <div className="ln_solid"></div>
                <div className="form-group">
                  <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                    <button onClick={this.onCancel} className="btn btn-primary" type="button">Huỷ</button>
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
