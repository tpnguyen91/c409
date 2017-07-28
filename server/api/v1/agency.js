const Model = require('../../models')
const fields = ['name', 'address','email','phone','image_url', 'description']

class Agency {
  index(req, res) {
    Model.agencies.find({})
        .sort({ createdAt: 'desc' })
        .then((agencies) => res.json({ success: true, agencies }))
        .catch((error) => res.json({ success: false, error }))
  }

  create(req, res) {
    const { agency = {} } = req.body || {};
    const params = fields.reduce((obj, key) => agency[key] ? ({...obj, [key]: agency[key]}) : obj, {});

    const newAgency = new Model.agencies(params);
    newAgency.save()
      .then((rs) => res.json({ success: true, agency: rs }))
      .catch((error) => res.json({ success: false, error }))
  }

  update(req, res) {
    const { _id } = req.params

    Model.agencies.findOne({ _id })
      .then((rs) => {
        const { agency = {} } = req.body || {};
        fields.forEach((key) => {
          if (agency[key]) rs[key] = agency[key]
        })

        return rs.save()
      })
      .then((rs) => res.json({ success: true, agency: rs }))
      .catch((error) => res.json({ success: false, error }))
  }

  delete(req, res) {
    const { _id } = req.params

    Model.agencies.findOne({ _id })
      .then((rs) => rs.remove())
      .then((rs) => res.json({ success: rs, agency: rs }))
      .catch((error) => res.json({ success: false, error }))
  }
}

module.exports = new Agency()
