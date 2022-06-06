import express from "express";
const router = express.Router();

//Wishlist Related Operation------------------
import wishlist from "../../controllers/wishlist/wishlist.controller.js";
router.post("/addItem", wishlist.addToWishlist);
router.get("/items/:id", wishlist.getOneWishlist);
router.delete("/items/:id", wishlist.removeFromWishlist);
router.delete("/items", wishlist.removeAllWishlist);

// Export the Router
export default router;
