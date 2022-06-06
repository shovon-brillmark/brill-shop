import mongoose from "mongoose";
const Schema = mongoose.Schema;
const WishlistSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  handle: {
    type: String,
    required: true,
    unique: true,
  },
  variantPrice: {
    type: String,
    required: true,
  },
  variantTitle: {
    type: String,
    required: true,
  },
  variantQuantity: {
    type: String,
  },
});

const Wishlist = mongoose.model("Wishlist", WishlistSchema);
export default Wishlist;
