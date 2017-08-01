/* eslint no-console: 0 */
require('babel-register')
require('babel-polyfill')
const path = require('path');
const express = require('express');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
const bodyParser = require('body-parser')
const routesApi = require('./api/v1');

require('./models');
const Crawler = require('./controllers/crawler');

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/api/v1', routesApi.addAPI);
app.use(express.static(path.join(__dirname, '../build/')));
app.use(express.static(path.join(__dirname, '../public/')));
app.get('/crawler', Crawler.index);
app.get('/crawler/fetch', Crawler.fetch);

if (isDeveloping) {
  // const config = require('../config/webpack.config.dev.js'); uncomment for font end
  // const config = require('../config/webpack.config.admin.dev.js'); uncomment for admin
  const config = require('../config/webpack.config.admin.dev.js');
  const webpack = require('webpack');
  const webpackMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    noInfo: true,
    silent: true,
    stats: 'errors-only',
    publicPath: config.output.publicPath,
    contentBase: 'admin'
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../build/index.html')));
    res.end();
  });

} else {
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
  });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
