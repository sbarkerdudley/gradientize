const mongoose = require('mongoose');

const reviews_list = new mongoose.Schema({
  id: {
    type: Number,
    index: true
  },
  product_id: Number,
  rating: {
    type: Number,
    min: 1,
    max: 5
  },
  reviewer_name: String,
  recommended: Boolean,
  summary: String,
  body: String,
  email: {
    type: String,
    required: false
  },
  date: {
    type: Date,
    default: Date.now
  },
  helpfulness: Number,
  photos: {
    type: [String],
    default: undefined
  }
});

////////////

const User = new mongoose.Schema({
  _id: {
    type: primary_id,
    index: true
  },
  s_id: String,
  playlists: [],
  queries: [Query],
});

const User = new mongoose.Schema({
  _id: {
    type: primary_id,
    index: true
  },
  s_id: String,
  playlists: [],
  queries: [Query]
});

const Query = new mongoose.Schema({
  name: String,
  min: String,
  max: String,
  value: {
    type: Number,
    min: 0,
    max: 1
  }
});
