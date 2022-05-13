const express = require('express');
const router = express.Router();
// Auth
import applyAuthMiddleware from "./middleware/auth.js";
import verifyRequest from "./middleware/verify-request.js";

//Popup Related Operation------------------
const popup = require('../../controllers/popup/popup.controller');
router.post('/add', popup.addPopup);
router.put('/update', popup.updatePopup);

// Export the Router
module.exports = router;