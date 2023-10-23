const mongoose = require('mongoose')


const Schema = mongoose.Schema

const productsSchema = new Schema({

  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  brand: String,
  category: String,
  thumbnail: String,
  images: Array

}, {
  timestamps: true
})

const Products = mongoose.model('product', productsSchema, 'cake');
module.exports = Products
