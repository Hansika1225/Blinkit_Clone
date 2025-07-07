const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  image: {
    type: String,
    required: true
  },
  category:{
    type: String,
    required : true
  },
  name: {
    type: String,
    required: true
  },
  quantity: {
    type: String,
    required: true
  },
  cost: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

const Item = mongoose.model('Item', itemSchema);
module.exports = Item;