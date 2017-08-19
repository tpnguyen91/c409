var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lotterySchema = new Schema({
  province: { type: mongoose.Schema.Types.ObjectId, ref: 'Province' },
  code: { type: String, trim: true},
  phone: { type: String, trim: true},
  date: { type: Date },
  seri: { type: String, trim: true },
  number: { type: Number },
  price: { type: String, trim: true, enum: [10000, 20000, 30000, 50000], default: 10000 },
  type: { type: String },
}, {
  timestamps: true
});

module.exports =  mongoose.model('Lottery', lotterySchema);
