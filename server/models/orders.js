var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  agency: { type: mongoose.Schema.Types.ObjectId, ref: 'Agency', require: true },
  // province: { type: mongoose.Schema.Types.ObjectId, ref: 'Province', require: true },
  date: { type: Date, require: true },
  detail: [{
    seri: { type: String, trim: true },
    number: { type: String, trim: true, require: true },
    quanlity : { type: Number, default: 1, require: true },
    price: { type: Number, trim: true, enum: [10000, 20000, 50000], default: 10000 },
    type: { type: String, trim: true },
    provinceCode: { type: String, trim: true },
    releaseBy: { type: String, trim: true },
  }]
}, {
  timestamps: true
});

module.exports =  mongoose.model('Order', orderSchema);
