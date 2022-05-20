import express from 'express';
let router = express.Router();

// popup Routes------------------
import popup from './api/popup.route.js';
router.use('/popup', popup);


export default router;