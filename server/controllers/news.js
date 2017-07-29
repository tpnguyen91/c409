import news from './models/news';

function getAllNews(req, res, next) {
  const {limit = 10, skip = 0, condition = {}, sort = {}} = req.query;
  news
   .find(condition)
   .limit(limit)
   .skip(skip)
   .sort(sort)
   .exec((err, newsList) => {
    if (err) {
      console.error(err);
      return res.status(404).send('Not Found');
    }
    // process data
    return res.status(200).send(newsList);
   })
}

function addNews(req, res, next) {
  var new_news = new news(req.body);
  new_news.save(function(err, item) {
    if (err)
      res.status(404).send('Not Found');
    res.status(200).send(item);
  });
}

function updateNews(req, res, next) {
  news.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
    if (err)
      res.status(404).send('Not found');
    res.status(404).send(task);
  });
}

function findById(req, res, next) {
  news.findById(req.params.id, function(err, task) {
    if (err)
      res.status(404).send('Not found');
    res.status(404).send(task);
  });
}

function deleteNews(req, res, next) {
  news.remove({
    _id: req.params.id
  }, function(err, task) {
    if (err)
      res.status(404).send(err);
    res.status(404).send({ message: 'News successfully deleted' });
  });
}

export default {
   getAllNews,
   addNews,
   updateNews,
   findById,
   deleteNews,
}
