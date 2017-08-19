import React, { Component } from 'react';
import superagent from 'superagent';
import { withRouter } from 'react-router';
import './styles.css'

class MerchantInsert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      agency: {
        name: '',
        phone: '',
        address: '',
        email: '',
      },
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onReset = this.onReset.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }


  onSubmit(e) {
    e.preventDefault();
    superagent
      .post('/api/v1/agency')
      .set('token', this.props.currentUser.token)
      .send({ agency: this.state.agency })
      .end((err, res) => {
        if (!err) this.props.router.push('/admin/dai-ly')
      })
  }

  onCancel() {
    this.props.router.push('/admin/dai-ly');
  }

  onReset() {
    this.setState({
      agency: {
        name: '',
        phone: '',
        address: '',
        email: '',
      },
    })
  }

  onChange(e) {
    const { name, value } = e.target;
    const { agency = {} } = this.state;
    if (name === 'phone' && value) agency.phone = value.replace(/\D/g, '');
    else agency[name] = value;
    this.setState({ agency });
  }

  render() {
    const { name = '', email = '', phone = '', address = '' } = this.state.agency || {};

    return (
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <div className="x_panel">
            <div className="x_title">
              <h2>Thêm mới Đại Lý</h2>
              <div className="clearfix"></div>
            </div>
            <div className="x_content">
              <br />
              <form
                data-parsley-validate
                onSubmit={this.onSubmit}
                className="form-horizontal form-label-left"
              >
                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="first-name">Tên Đại Lý <span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <input value={name} name="name" required  className="form-control col-md-7 col-xs-12" onChange={this.onChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="last-name">Số điện thoại <span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <input value={phone} name="phone" required className="form-control col-md-7 col-xs-12" onChange={this.onChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="last-name">Email <span className="required"> </span>
                  </label>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <input type="email" value={email} name="email" className="form-control col-md-7 col-xs-12" onChange={this.onChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-md-3 col-sm-3 col-xs-12" htmlFor="last-name">Địa chỉ <span className="required">*</span>
                  </label>
                  <div className="col-md-6 col-sm-6 col-xs-12">
                    <input value={address} name="address" required className="form-control col-md-7 col-xs-12" onChange={this.onChange}/>
                  </div>
                </div>
                <div className="ln_solid"></div>
                <div className="form-group">
                  <div className="col-md-6 col-sm-6 col-xs-12 col-md-offset-3">
                    <button onClick={this.onCancel} className="btn btn-primary" type="button">Huỷ</button>
                    <button type="submit" className="btn btn-success">Lưu lại</button>
                    <button onClick={this.onReset} className="btn btn-primary" type="reset">Làm mới</button>
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

export default withRouter(MerchantInsert);
