const mongoose = require ("mongoose");
const uristring = process.env.MONGODB_URI || 'mongodb://localhost/lottery-git';
const orders = require('./orders');
const awards = require('./awards');
const agencies = require('./agencies');
const provinces = require('./provinces');
const seed = require('../seed/tinh.json');
const news = require('./news');
const users = require('./users');

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, (err, res) => {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

provinces.find({})
  .then((res) => {
    console.log('province checking...');
    if (res.length === 0) {
      seed.forEach((item) => {
        provinces.create(item)
      })
    }
  })

module.exports = {
  orders,
  awards,
  agencies,
  provinces,
  news,
  users,
}
