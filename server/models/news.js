var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var newSchema = new Schema({
  title: { type: String, trim: true },
  content: { type: String, trim: true },
  excerpt: { type: String, trim: true },
  category: { type: String, trim: true },
  image_url: { type: String, trim: true },
  tags: { type: Array, default: [] },
  keywords: { type: String, trim: true },
  description: { type: String, trim: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
}, {
  timestamps: true
});

export default mongoose.model('News', newSchema);
