var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var orderSchema = new Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer' },
  phone: { type: String, trim: true },
  name: { type: String, trim: true },
  bought_at: { type: Date },
  total: { type: Number, default: 0 },
  detail: [{
    seri: { type: String, trim: true },
    number: { type: Number },
    quanlity : { type: Number, default: 0 },
    province: { type: mongoose.Schema.Types.ObjectId, ref: 'Province' },
    date: { type: Date },
    price: { type: String, trim: true, enum: [10000, 20000, 30000, 50000], default: 10000 },
    type: { type: String },
    total: { type: Number, default: 0 },
  }]
}, {
  timestamps: true
});

module.exports =  mongoose.model('Order', orderSchema);
