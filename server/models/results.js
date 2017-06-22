var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var resultSchema = new Schema({
  date: { type: String, trim: true},
  data: {
    num0: { type: String, trim: true},
    num1: { type: String, trim: true},
    num2: Array,
    num3: Array,
    num4: Array,
    num5: Array,
    num6: Array,
    num7: Array,
    num8: Array,
  },
  code: String,
  name: { type: String, trim: true},
  title: { type: String, trim: true},
  region:{ type: String, trim: true},
  location: { type: String, trim: true},
  created_at: Date,
  updated_at: Date
});

module.exports =  mongoose.model('Results', resultSchema);
