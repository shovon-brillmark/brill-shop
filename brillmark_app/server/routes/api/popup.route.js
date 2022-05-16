import express from 'express';
const router = express.Router();
// Auth
// import applyAuthMiddleware from "./middleware/auth.js";
// import verifyRequest from "./middleware/verify-request.js";

//Popup Related Operation------------------
import popup from '../../controllers/popup/popup.controller.js';
router.post('/add', popup.addPopup);
router.put('/update', popup.updatePopup);
router.get('/get', popup.getPopup);

// Export the Router
export default router;