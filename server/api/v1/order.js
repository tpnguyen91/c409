const Model = require('../../models')
const fields = ['customer', 'agency', 'cusName', 'cusAddress', 'cusPhone', 'province', 'date']
const detailField = ['seri', 'number', 'quanlity', 'price', 'type', 'provinceCode', 'releaseBy']

class Order {
  index(req, res) {
    Model.orders.find({})
        .populate(['agency'])
        .sort({ createdAt: 'desc' })
        .then((orders) => res.json({ success: true, orders }))
        .catch((error) => res.json({ success: false, error }))
  }

  create(req, res) {
    const { order = {} } = req.body || {};
    const params = fields.reduce((obj, key) => order[key] ? ({...obj, [key]: order[key]}) : obj, {});
    params.detail = order.details.map((item) => detailField.reduce((obj, key) => item[key] ? ({...obj, [key]: item[key]}) : obj, {}));
    const newOrder = new Model.orders(params);
    newOrder.save()
      .then((rs) => res.json({ success: true, order: rs }))
      .catch((error) => res.json({ success: false, error }))
  }

  show(req, res) {
    const { _id } = req.params
    Model.orders.findOne({ _id })
        .populate(['agency'])
        .sort({ createdAt: 'desc' })
        .then((order) => res.json({ success: true, order }))
        .catch((error) => res.json({ success: false, error }))
  }
}

module.exports = new Order()
