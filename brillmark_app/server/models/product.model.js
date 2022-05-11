const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
    },
    price: {
        type: String,
    },
});

const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;