import express from "express";
let router = express.Router();

// popup Routes------------------
import popup from "./api/popup.route.js";
import wishlist from "./api/wishlist.route.js";
router.use("/popup", popup);
router.use("/wishlist", wishlist);

export default router;
