var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resultSchema = new Schema({
  province: { type: mongoose.Schema.Types.ObjectId, ref: 'Province' },
  date: { type: String, trim: true},
  num0: { type: String, trim: true},
  num1: { type: String, trim: true},
  num2: Array,
  num3: Array,
  num4: Array,
  num5: Array,
  num6: Array,
  num7: Array,
  num8: Array,
  code: String,
}, {
  timestamps: true
});

module.exports =  mongoose.model('Result', resultSchema);
