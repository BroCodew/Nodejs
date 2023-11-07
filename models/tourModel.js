const mongoose = require('mongoose');

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name']
  },
  duration: {
    type: Number,
    required: [true, 'duration must be a number']
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'maxGroupSize must be a number']
  },
  ratingsAverage: {
    type: Number,
    default: 0
  },
  ratingsQuantity: {
    type: Number,
    required: [true, 'ratingsQuantity must be a number']
  },
  difficulty: {
    type: String,
    required: [true, 'difficulty must be a String']
  },
  price: {
    type: Number,
    default: 0
  },
  summary: {
    type: String,
    trim: true,
    required: [true, 'A tour must be a description']
  },
  description: {
    type: String,
    trim: true
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image']
  },
  image: [String],
  startDate: [Date],
  rating: {
    type: Number,
    default: 4.5
  },

  priceDiscount: [Number],

  createdAt: {
    type: Date,
    default: Date.now()
  }
});
const Tour = mongoose.model('Tour3', tourSchema);

module.exports = Tour;
