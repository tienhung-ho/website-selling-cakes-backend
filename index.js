;const express = require('express')
const cors = require('cors')
require("dotenv").config()

const database = require('./app/config/database.js')
const productRoute = require('./app/routers/home.router.js')
const Products = require('./app/models/products.model.js')
const port = 3000

database.connect()

const app = express()

app.use(cors())

app.use(express.json())

app.use('/new', productRoute)




app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

