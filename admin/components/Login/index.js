import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { withRouter } from 'react-router';
import Auth from 'services/auth';

import './style.css';

@observer
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { error: '' };
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    const auth = {
      username: this.username.value,
      password: this.password.value,
    };
    this.setState({ error: '' });

    fetch('/api/v1/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ auth })
    })
    .then((res) => res.json())
    .then(({ success, user, token, message }) => {
      if (success) {
        Auth.onLogIn({ ...user, token });
      } else {
        this.setState({ error: message })
      }
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="login-container">
        <div className="login_wrapper">
          <div className="animate form login_form">
            <section className="login_content">
              <form onSubmit={this.onSubmit}>
                <h1>Đăng nhập</h1>
                {!!this.state.error && <div className="error">{this.state.error}</div>}
                <div>
                  <input ref={(ref) => (this.username = ref)} type="text" className="form-control" placeholder="Tài khoản" required="" />
                </div>
                <div>
                  <input ref={(ref) => (this.password = ref)} type="password" className="form-control" placeholder="Mật khẩu" required="" />
                </div>
                <div>
                  <button type="submit" className="btn btn-default submit" >Đăng nhập</button>
                </div>
              </form>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
