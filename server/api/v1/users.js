import { encryption } from '../../helpers/auth';

const Model = require('../../models');

const fields = ['username', 'email', 'password', 'last_name','first_name', 'phone', 'address', 'image_url'];

class User {
  create(req, res) {
    const { user = {} } = req.body || {};
    const params = fields.reduce((obj, key) => user[key] ? ({...obj, [key]: user[key]}) : obj, {});
    params.password = encryption(params.password);

    const newUser = new Model.users(params);
    newUser.save()
      .then((rs) => res.json({ success: true, user: rs }))
      .catch((error) => res.json({ success: false, error }))
  }

  update(req, res) {
    const { _id } = req.params

    Model.users.findOne({ _id })
      .then((rs) => {
        const { user = {} } = req.body || {};
        fields.forEach((key) => {
          if (user[key]) rs[key] = user[key]
        })

        if (user.password) rs.password = encryption(user.password);

        return rs.save()
      })
      .then((rs) => res.json({ success: true, user: rs }))
      .catch((error) => res.json({ success: false, error }))
  }

  delete(req, res) {
    const { _id } = req.params

    Model.users.findOne({ _id })
      .then((rs) => rs.remove())
      .then((rs) => res.json({ success: rs, user: rs }))
      .catch((error) => res.json({ success: false, error }))
  }

  getById(req, res) {
     const { _id } = req.params
     Model.users.findOne({ _id })
      .then((rs) => res.json({ success: rs, user: rs }))
      .catch((error) => res.json({ success: false, error }))
  }
}

module.exports = new User()
