var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  last_name: { type: String, trim: true },
  first_name: { type: String, trim: true },
  phone: { type: String, trim: true },
  email: { type: String, trim: true },
  address: { type: String, trim: true },
  image_url: { type: String, trim: true },
}, {
  timestamps: true
});

module.exports =  mongoose.model('Customer', customerSchema);
