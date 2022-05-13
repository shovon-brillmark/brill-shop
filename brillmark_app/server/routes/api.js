import express from 'express';
let router = express.Router();

// product Routes------------------
import product from './api/product.route.js';
router.use('/product', product);


export default router;