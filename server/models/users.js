var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: { type: String, trim: true, require: true, unique: true },
  email: { type: String, trim: true, require: true, unique: true },
  password: { type: String, trim: true, require: true },
  last_name: { type: String, trim: true },
  first_name: { type: String, trim: true },
  phone: { type: String, trim: true },
  address: { type: String, trim: true },
  image_url: { type: String, trim: true },
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);
