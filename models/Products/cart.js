var mongoose = require("mongoose");

const ProductInCartSchema = new mongoose.Schema({
    productId: {
        type: String
    },
    userId: {
        type: String
    },
    productName: {
        type: String
    },

    productPrice: {
        type: Number
    },

    productsInCart: {
        type: Number,
        default: 0
    },

    productSize: {
        type: String
    },

    productImage: {
        type: String
    },



});

const Cart = mongoose.model("cart", ProductInCartSchema);
module.exports = Cart;