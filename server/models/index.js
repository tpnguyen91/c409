const mongoose = require ("mongoose");
const uristring = process.env.MONGODB_URI || 'mongodb://localhost/lottery-git';
const orders = require('./orders');
const agencies = require('./agencies');

// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, (err, res) => {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

module.exports = {
  orders,
  agencies
}
