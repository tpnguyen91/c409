import React, { Component } from 'react';
import superagent from 'superagent';
import './styles.css'
var CKEditor = require('react-ckeditor-wrapper');


export default class NewsInsert extends Component {

  constructor(props) {
      super(props);
      this.state = {
      news: {
        title: '',
        content: '',
      },
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onCancel = this.onCancel.bind(this);
    this.onChange = this.onChange.bind(this);
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
      .send({ news: this.state.news })
      .end((err, res) => {
        if (!err) this.props.router.push('/tin-tuc')
      })
  }

  onCancel() {
    this.props.router.push('/tin-tuc')
  }

  render() {
    const { title = '', content = '' } = this.state.news || {};

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
                  id="ex3"
                  className="form-control"
                  onChange={this.onChange}
                  placeholder=" " />
              </div>
              <div className="form-group">
                <label for="ex3">Nội dung</label>
                <CKEditor
                  value={content}
                  onChange={this.updateContent.bind(this)}
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
