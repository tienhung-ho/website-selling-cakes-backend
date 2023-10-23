const express = require('express') 
const controllers = require('../controllers/client/product.controllers')

const router = express.Router()

router.route('/')
  .get(controllers.find)


module.exports = router
