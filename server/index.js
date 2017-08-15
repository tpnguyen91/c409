
/* eslint no-console: 0 */
require('babel-register');
require('babel-polyfill');
const path = require('path');
const express = require('express');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const methodOverride = require('method-override');
const session = require('express-session');

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();
require('./models');
const routesApi = require('./api');
const routesApiClient = require('./apiV2/routes');

app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use('/apiClient/v1', routesApiClient);
app.use(cookieParser())
app.use(methodOverride('X-HTTP-Method-Override'))
app.use(session({secret: 'CRBeL8o5JZsLOG4OFcjqWpr', resave: false, saveUninitialized: true}))

routesApi(app);

app.use(express.static(path.join(__dirname, '../build/')));
app.use(express.static(path.join(__dirname, '../public/')));

if (process.env.NODE_ENV === 'production') {
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
