/**
 * Wishlist Controller---------------------------
 */

import Wishlist from "../../models/wishlist.model.js";

const addToWishlist = (req, res, next) => {
  const newWishlist = new Wishlist({
    title: req.body.title,
    handle: req.body.handle,
    variantPrice: req.body.variantPrice,
    variantTitle: req.body.variantTitle,
    variantQuantity: req.body.variantQuantity,
  });

  newWishlist
    .save()
    .then((result) => {
      if (!result) {
        return res.status(201).json({
          error: true,
          msg: "Already Exists",
        });
      }
      return res.status(201).json({
        data: result,
        msg: "Successfully Added",
        error: false,
      });
    })
    .catch((error) => {
      return res.status(200).json({
        error: true,
        msg: error,
      });
    });
};

const removeFromWishlist = (req, res, next) => {
  const wishlistId = req.params.id ? req.params.id : null;

  Wishlist.remove({ _id: wishlistId })
    .then((result) => {
      let data = {
        error: false,
        msg: "Wishlists removed Successfully",
        data: result,
      };
      return res.status(200).json(data);
    })
    .catch((error) => {
      let data = {
        error: true,
        msg: error,
        data: [],
      };
      return res.status(200).json(data);
    });
};

const removeAllWishlist = (req, res, next) => {
  Wishlist.remove({})
    .then((result) => {
      let data = {
        error: false,
        msg: "Wishlists removed Successfully",
        data: result,
      };
      return res.status(200).json(data);
    })
    .catch((error) => {
      let data = {
        error: true,
        msg: error,
        data: [],
      };
      return res.status(200).json(data);
    });
};

const getOneWishlist = (req, res, next) => {
  const wishlistId = req.params.id ? req.params.id : null;

  Wishlist.findOne({ _id: wishlistId })
    .then((result) => {
      let data = {
        error: false,
        msg: "Wishlist Get Successfully",
        data: result,
      };
      return res.status(200).json(data);
    })
    .catch((error) => {
      let data = {
        error: true,
        msg: error,
        data: [],
      };
      return res.status(200).json(data);
    });
};
export default {
  getOneWishlist,
  addToWishlist,
  removeAllWishlist,
  removeFromWishlist,
};
