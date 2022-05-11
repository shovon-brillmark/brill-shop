const express = require('express');
const router = express.Router();
// Auth
import applyAuthMiddleware from "./middleware/auth.js";
import verifyRequest from "./middleware/verify-request.js";

//Product Related Operation------------------
const product = require('../../controllers/product/product.controller');
router.post('/add', product.addProduct);
router.put('/update', product.updateProduct);

// Export the Router
module.exports = router;