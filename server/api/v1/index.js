import express from 'express'
const agencyRouter = require('./agency')
const newsRouter = require('/news')

module.exports = {
  addAPI: function() {
    const apiRouter = express.Router();
    apiRouter.use('/agency', agencyRouter);
    apiRouter.use('/news', newsRouter);
    return apiRouter
  }
}
