const Model = require('../../models')
const moment = require('moment')

class Award {
  index(req, res) {
    const { date = moment().format('DD/MM/YYYY') } = req.query || {};
    const time = moment(date, 'DD/MM/YYYY').toISOString()
    Model.awards.find({ date: time })
        .populate(['agency'])
        .sort({ createdAt: 'desc' })
        .then((awards) => res.json({ success: true, awards }))
        .catch((error) => res.json({ success: false, error }))
  }
}

module.exports = new Award()
