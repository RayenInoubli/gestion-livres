import mongoose from "mongoose";

const Book = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  publicationDate: {
    type: Date,
  },
  genre: {
    type: String,
    enum: [
      "Fiction",
      "Non-Fiction",
      "Science",
      "History",
      "Biography",
      "Fantasy",
      "Mystery",
    ],
  },
  pages: {
    type: Number,
  },
  publisher: {
    type: String,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: 0,
  },
  languages: {
    type: [String],
  },
  ratings: {
    type: Number,
    min: 0,
    max: 5,
  },
  isDigital: {
    type: Boolean,
  },
  copiesSold: {
    type: Number,
    default: 0,
    min: 0,
  },
}, {timestamps: true});

export default mongoose.model("Book", Book);