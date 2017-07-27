var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var provinceSchema = new Schema({
  name: { type: String, trim: true },
  code: { type: String, trim: true },
  region: { type: String, trim: true, enum: ['Bắc', 'Trung', 'Name'], default: 'Name' },
  time: { type: String, trim: true },
  date: Array,
  list: Array
}, {
  timestamps: true
});

module.exports =  mongoose.model('Province', provinceSchema);
