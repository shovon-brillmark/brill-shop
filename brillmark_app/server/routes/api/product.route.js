import express from 'express';
const router = express.Router();
// Auth

//Product Related Operation------------------
import product from '../../controllers/product/product.controller.js';
router.post('/add', product.addProduct);
router.put('/update', product.updateProduct);

// Export the Router
export default router;