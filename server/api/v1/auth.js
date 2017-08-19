import { encryption, generateJWTToken } from '../../helpers/auth';

const Model = require('../../models')

class Auth {
  index(req, res) {
    Model.users.findOne({ _id: (req.user || {})._id })
    .then((user) => {
        if (!user) return Promise.reject('Bạn chưa đăng nhập');
        const token = generateJWTToken({ _id: user._id, email: user.email });
        req.session.token = token;
        delete user.password;
        return { user, token };
      })
      .then((rs) => res.json({ success: true, ...rs }))
      .catch((message) => res.json({ success: false, message }))
  }

  create(req, res) {
    const { username = '', password: repassword = '' } = req.body.auth || {};
    const password = encryption(repassword);
    Model.users.findOne({ username, password })
      .then((user) => {
        if (!user) return Promise.reject('Tài khoản hoặc mật khẩu không đúng');
        const token = generateJWTToken({ _id: user._id, email: user.email });
        req.session.token = token;
        return { user, token };
      })
      .then((rs) => res.status(200).send({ success: true, ...rs }))
      .catch((message) => res.json({ success: false, message }))
  }

  delete(req, res) {
    delete req.session.token
    return res.status(200).send({ success: true })
  }
}

module.exports = new Auth()
