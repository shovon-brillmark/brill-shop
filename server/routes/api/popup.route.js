import express from "express";
const router = express.Router();
// Auth
// import applyAuthMiddleware from "./middleware/auth.js";
// import verifyRequest from "./middleware/verify-request.js";

//Popup Related Operation------------------
import popup from "../../controllers/popup/popup.controller.js";
router.post("/add", popup.addPopup);
router.put("/update/:id", popup.updatePopup);
router.put("/:id/status/:status", popup.updatePopupStatus);
router.get("/", popup.getAllPopups);
router.get("/:id", popup.getOnePopup);

// Export the Router
export default router;
