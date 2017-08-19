const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const orders = require('./orders');
const awards = require('./awards');
const provinces = require('./provinces');

const resultSchema = new Schema({
  title: { type: String, trim: true},
  name: { type: String, trim: true},
  province: { type: mongoose.Schema.Types.ObjectId, ref: 'Province' },
  date: { type: Date },
  num0: { type: String, trim: true},
  num1: { type: String, trim: true},
  num2: Array,
  num3: Array,
  num4: Array,
  num5: Array,
  num6: Array,
  num7: Array,
  num8: Array,
  end2: [],
  end3: [],
}, {
  timestamps: true
});

resultSchema.post('save', (result) => {
  const { end2, end3, date, province } = result;
  orders.find({ date })
    .then((rs) => {
      if (rs) {
        rs.forEach((res) => {
          res.detail.forEach((item) => {
            provinces.findOne({ _id: province })
              .then((provinceInResult) => {
                if (provinceInResult && provinceInResult.short === item.provinceCode) {
                  const { number, quanlity, price, type } = item;
                  const checkon = number.length === 2 ? end2 : end3;
                  if (checkon.includes(number)) {
                    const newAward = { order: res._id, result: result._id, date, number, quanlity, price, type, total: price * quanlity }
                    awards.create(newAward)
                  }
                }
              })
          });
        })
      }
    })
})

module.exports =  mongoose.model('Result', resultSchema);
