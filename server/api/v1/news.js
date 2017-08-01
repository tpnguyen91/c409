const Model = require('../../models');
const fields = ['title', 'content','category','image_url','tags', 'keywords', 'description', 'createdBy'];
class News {

  index(req, res) {
    Model.news.find({})
      .sort({ createdAt: 'desc' })
      .then((news) => res.json({ success: true, news }))
      .catch((error) => res.json({ success: false, error }))
  }

  create(req, res) {
    const { news = {} } = req.body || {};
    const params = fields.reduce((obj, key) => news[key] ? ({...obj, [key]: news[key]}) : obj, {});

    const newNews = new Model.news(params);
    newNews.save()
      .then((rs) => res.json({ success: true, news: rs }))
      .catch((error) => res.json({ success: false, error }))
  }

  upadte(req, res) {
    const { _id } = req.params
    Model.news.findOne({ _id })
      .then((rs) => {
        const { news = {} } = req.body || {};
        fields.forEach((key) => {
          if (news[key]) rs[key] = news[key]
        })
        return rs.save()
      })
      .then((rs) => res.json({ success: true, news: rs }))
      .catch((error) => res.json({ success: false, error }))
  }

  delete(req, res) {
    const { _id } = req.params

    Model.news.findOne({ _id })
      .then((rs) => rs.remove())
      .then((rs) => res.json({ success: rs, news: rs }))
      .catch((error) => res.json({ success: false, error }))
  }

  getById(req, res) {
    const { _id } = req.params
     Model.news.findOne({ _id })
      .then((rs) => res.json({ success: rs, news: rs }))
      .catch((error) => res.json({ success: false, error }))
  }

}

module.exports = new News()

