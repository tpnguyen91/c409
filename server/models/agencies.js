var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var agencySchema = new Schema({
  name: { type: String, trim: true },
  address: { type: String, trim: true },
  phone: { type: String, trim: true },
  email: { type: String, trim: true },
  image_url: { type: String, trim: true },
  description: { type: String, trim: true },
}, {
  timestamps: true
});

module.exports =  mongoose.model('Agency', agencySchema);
