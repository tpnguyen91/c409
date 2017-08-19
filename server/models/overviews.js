var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var overviewSchema = new Schema({
  date: Date,
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  total: { type: Number, default: 0 },
  award_orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  award_total: { type: Number, default: 0 },
  provinces: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Province' }],
}, {
  timestamps: true
});

module.exports =  mongoose.model('Overview', overviewSchema);
