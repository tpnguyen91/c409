var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var awardSchema = new Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  result: { type: mongoose.Schema.Types.ObjectId, ref: 'Result' },
  phone: { type: String, trim: true},
  date: { type: Date },
  seri: { type: String, trim: true },
  number: { type: Number },
  quanlity : { type: Number, default: 0 },
  province: { type: mongoose.Schema.Types.ObjectId, ref: 'province' },
  price: { type: String, trim: true, enum: [10000, 20000, 30000, 50000], default: 10000 },
  type: { type: String },
  total: { type: Number, default: 0 },
}, {
  timestamps: true
});

module.exports =  mongoose.model('Award', awardSchema);
