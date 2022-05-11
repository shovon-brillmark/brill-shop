var express = require('express')
let router = express.Router();

// product Routes------------------
let product = require('./api/product.route');
router.use('/product', product);


module.exports = router;