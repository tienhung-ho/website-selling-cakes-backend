const Product = require('../../models/products.model')


module.exports.find =  async (req, res, next) => {
  // let document = []

  const products = await Product.find({})

  console.log("products");
  res.send(products)

}
