
class ProductServices {

  constructor(client) {
    this.Product = client.db().collection('cake')
  }

  async find (filters) {
    const cursor = await this.Product.find(filters)
    return await cursor.toArray()
  }

}

module.exports = ProductServices
